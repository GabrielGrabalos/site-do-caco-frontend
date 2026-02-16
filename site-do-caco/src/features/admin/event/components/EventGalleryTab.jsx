import { useEffect, useMemo, useState } from 'react';
import { eventService } from '@/shared/services/eventService';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { ConfirmDeleteDialog } from '@/features/admin/components/ConfirmDeleteDialog';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import {
  ChevronLeft,
  ChevronRight,
  FileVideo,
  Image as ImageIcon,
  Link as LinkIcon,
  Plus,
  Save,
  Trash2,
  Upload,
  Video,
  ExternalLink,
  Pencil,
  Loader2,
  X,
  AlertCircle
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';

function getEmbedUrl(url) {
  if (!url) return null;

  const youtubeWatch = url.match(/(?:youtube\.com\/watch\?v=)([\w-]{6,})/i);
  if (youtubeWatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeWatch[1]}`;
  }

  const youtubeShort = url.match(/(?:youtu\.be\/)([\w-]{6,})/i);
  if (youtubeShort?.[1]) {
    return `https://www.youtube.com/embed/${youtubeShort[1]}`;
  }

  const vimeo = url.match(/vimeo\.com\/(\d+)/i);
  if (vimeo?.[1]) {
    return `https://player.vimeo.com/video/${vimeo[1]}`;
  }

  return null;
}

function looksLikeDirectVideo(url = '') {
  return /\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(url);
}

function createPendingId() {
  return `pending-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function revokeUploadPreview(item) {
  if (item?.sourceType === 'upload' && item?.previewUrl?.startsWith('blob:')) {
    URL.revokeObjectURL(item.previewUrl);
  }
}

function GalleryMediaPreview({ item, className = "" }) {
  if (item.type === 'IMAGE') {
    return (
      <div className={`relative w-full overflow-hidden rounded-md bg-muted ${className}`}>
        <img src={item.mediaUrl || item.previewUrl} alt="Mídia da galeria" className="h-full w-full object-cover" />
      </div>
    );
  }

  const embedUrl = getEmbedUrl(item.mediaUrl);
  if (embedUrl) {
    return (
      <div className={`relative w-full overflow-hidden rounded-md bg-muted border ${className}`}>
        <iframe
          src={embedUrl}
          className="h-full w-full"
          title="Prévia do vídeo"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (looksLikeDirectVideo(item.mediaUrl)) {
    return (
      <div className={`relative w-full overflow-hidden rounded-md bg-muted border ${className}`}>
        <video src={item.mediaUrl} controls className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`relative w-full rounded-md border bg-muted/40 flex items-center justify-center text-center p-4 ${className}`}>
      <div>
        <FileVideo className="h-8 w-8 mx-auto text-muted-foreground" />
        <p className="mt-2 text-xs text-muted-foreground">Prévia indisponível</p>
      </div>
    </div>
  );
}

export function EventGalleryTab({ eventId, initialItems = [] }) {
  const { toast } = useToast();

  const [items, setItems] = useState(initialItems);
  
  // Pending items state
  const [pendingItems, setPendingItems] = useState([]);
  const [currentPendingIndex, setCurrentPendingIndex] = useState(0);
  
  // URL Input State
  const [urlInputOpen, setUrlInputOpen] = useState(false);
  const [mediaUrlsText, setMediaUrlsText] = useState('');

  // Processing state
  const [isCreating, setIsCreating] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ done: 0, total: 0 });

  // Existing item editing
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingCaption, setEditingCaption] = useState('');
  const [isUpdatingCaption, setIsUpdatingCaption] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Editor keys
  const [pendingEditorKey, setPendingEditorKey] = useState(0);
  const [editEditorKey, setEditEditorKey] = useState(0);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const hasItems = items && items.length > 0;
  const sortedItems = useMemo(() => [...(items || [])], [items]);
  const currentPendingItem = pendingItems[currentPendingIndex] || null;

  const parsedUrls = useMemo(() => {
    return mediaUrlsText
      .split(/\r?\n|,|;/)
      .map((url) => url.trim())
      .filter(Boolean);
  }, [mediaUrlsText]);

  // --- ACTIONS ---

  const handleSelectUploadFiles = (e) => {
    const files = e.target.files;
    const normalized = Array.from(files || []).filter((file) => file.type?.startsWith('image/'));

    if (normalized.length === 0) {
      if (files.length > 0) {
        toast({
            variant: 'destructive',
            title: 'Arquivos inválidos',
            description: 'Apenas imagens são permitidas para upload de arquivos.',
        });
      }
      return;
    }

    const newItems = normalized.map((file) => ({
      id: createPendingId(),
      sourceType: 'upload',
      file,
      mediaUrl: '',
      type: 'IMAGE',
      caption: '',
      previewUrl: URL.createObjectURL(file),
    }));

    setPendingItems((prev) => [...prev, ...newItems]);
    setCurrentPendingIndex((prev) => (prev === 0 && pendingItems.length === 0 ? 0 : prev)); // Keep index if already set or 0
    
    // Clear input
    e.target.value = null;

    toast({
      title: 'Imagens adicionadas',
      description: `${newItems.length} imagens adicionadas à fila de envio.`,
    });
  };

  const handleAppendUrlsToQueue = () => {
    if (parsedUrls.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Sem URLs',
        description: 'Digite pelo menos uma URL válida.',
      });
      return;
    }

    const newItems = parsedUrls.map((url) => ({
      id: createPendingId(),
      sourceType: 'url',
      file: null,
      mediaUrl: url,
      type: 'IMAGE', // Default to image, can change later
      caption: '',
      previewUrl: url,
    }));

    setPendingItems((prev) => [...prev, ...newItems]);
    setMediaUrlsText('');
    setUrlInputOpen(false);

    toast({
      title: 'URLs adicionadas',
      description: `${newItems.length} itens adicionados à fila de envio.`,
    });
  };

  const updatePendingItem = (itemId, updates) => {
    setPendingItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, ...updates } : item)));
  };

  const removePendingItem = (itemId) => {
    setPendingItems((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);
      if (index === -1) return prev;

      revokeUploadPreview(prev[index]);

      const next = prev.filter((item) => item.id !== itemId);
      
      // Adjust index
      if (next.length === 0) {
        setCurrentPendingIndex(0);
      } else if (currentPendingIndex >= next.length) {
        setCurrentPendingIndex(next.length - 1);
      }
      
      return next;
    });
  };

  const handleCreateItem = async () => {
    if (pendingItems.length === 0) return;

    // Validation
    const hasInvalidUrl = pendingItems.some(
      (item) => item.sourceType === 'url' && !item.mediaUrl?.trim()
    );

    if (hasInvalidUrl) {
      toast({
        variant: 'destructive',
        title: 'URL inválida',
        description: 'Verifique se todos os itens de URL possuem um link válido.',
      });
      return;
    }

    setIsCreating(true);
    setBatchProgress({ done: 0, total: pendingItems.length });

    const createdItems = [];
    const failedItems = [];
    const entries = [...pendingItems];

    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      const formData = new FormData();

      // Enforce IMAGE for uploads, allow selection for URLs
      formData.append('type', entry.sourceType === 'upload' ? 'IMAGE' : entry.type);

      if (entry.sourceType === 'upload') {
        formData.append('image', entry.file);
      } else {
        formData.append('mediaUrl', entry.mediaUrl.trim());
      }

      if (entry.caption?.trim()) {
        formData.append('caption', entry.caption);
      }

      try {
        const created = await eventService.createGalleryItem(eventId, formData);
        createdItems.push(created);
      } catch (error) {
        console.error("Error creating item:", error);
        failedItems.push(entry);
      } finally {
        setBatchProgress({ done: index + 1, total: entries.length });
      }
    }

    // Update state
    if (createdItems.length > 0) {
      setItems((prev) => [...(createdItems || []).reverse(), ...(prev || [])]);
    }

    // Cleanup successful uploads
    entries.forEach((entry) => {
      if (!failedItems.includes(entry)) {
        revokeUploadPreview(entry);
      }
    });

    setPendingItems(failedItems);
    setCurrentPendingIndex(0);
    setBatchProgress({ done: 0, total: 0 });
    setIsCreating(false);

    if (failedItems.length === 0) {
      toast({
        title: 'Sucesso!',
        description: `${createdItems.length} itens adicionados à galeria.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Envio Parcial',
        description: `${createdItems.length} enviados, ${failedItems.length} falharam. Verifique os itens restantes na fila.`,
      });
    }
  };

  // Gallery Item Actions
  const startEditingCaption = (item) => {
    setEditingItemId(item.id);
    setEditingCaption(item.caption || '');
    setEditEditorKey((prev) => prev + 1);
  };

  const handleUpdateCaption = async (itemId, nextCaption) => {
    try {
      setIsUpdatingCaption(true);
      const updated = await eventService.updateGalleryItemCaption(eventId, itemId, {
        caption: nextCaption,
      });

      setItems((prev) => prev.map((item) => (item.id === itemId ? updated : item)));
      setEditingItemId(null);

      toast({ title: 'Legenda atualizada' });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível salvar a legenda.',
      });
    } finally {
      setIsUpdatingCaption(false);
    }
  };

  const handleDeleteItem = async () => {
    if (!itemToDelete) return;
    try {
      setIsDeleting(true);
      await eventService.deleteGalleryItem(eventId, itemToDelete.id);
      setItems((prev) => prev.filter((item) => item.id !== itemToDelete.id));
      setItemToDelete(null);
      toast({ title: 'Item removido' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Erro ao remover' });
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    return () => {
      pendingItems.forEach(revokeUploadPreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* --- SEÇÃO DE PENDENTES (ADD MEDIA) --- */}
      <Card className={`border-dashed border-2 overflow-hidden transition-all duration-300 ${pendingItems.length > 0 ? 'border-primary/50' : 'border-muted'}`}>
        <CardHeader className="bg-muted/10 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" /> Adicionar à Galeria
            </CardTitle>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setUrlInputOpen(true)}>
                    <LinkIcon className="w-4 h-4 mr-2" /> Adicionar URLs
                </Button>
                <div className="relative">
                    <Button variant="secondary" size="sm" onClick={() => document.getElementById('gallery-upload-input').click()}>
                        <Upload className="w-4 h-4 mr-2" /> Upload Imagens
                    </Button>
                    <input 
                        id="gallery-upload-input" 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        className="hidden" 
                        onChange={handleSelectUploadFiles}
                    />
                </div>
            </div>
          </div>
          <CardDescription>
            Envie imagens ou adicione vídeos via URL. Os itens aparecerão na fila abaixo para edição antes de serem salvos.
          </CardDescription>
        </CardHeader>
        
        {pendingItems.length > 0 && (
          <CardContent className="pt-0 p-0">
            <Separator />
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
                
                {/* LISTA DE THUMBNAILS (WhatsApp style list on left) */}
                <div className="lg:border-r bg-muted/10 flex flex-col">
                    <div className="p-3 border-b flex justify-between items-center bg-background/50 backdrop-blur sticky top-0 z-10">
                        <span className="text-xs font-semibold text-muted-foreground uppercase">Fila de Envio ({pendingItems.length})</span>
                        <Button variant="ghost" size="xs" className="h-6 text-xs text-destructive hover:text-destructive" onClick={() => setPendingItems([])}>
                            Limpar Tudo
                        </Button>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[500px] p-2 space-y-2">
                        {pendingItems.map((item, idx) => (
                            <div 
                                key={item.id}
                                onClick={() => {
                                    setCurrentPendingIndex(idx);
                                    setPendingEditorKey(p => p + 1);
                                }}
                                className={`flex gap-3 p-2 rounded-lg cursor-pointer border transition-all hover:bg-muted ${idx === currentPendingIndex ? 'bg-background border-primary shadow-sm ring-1 ring-primary/20' : 'border-transparent bg-transparent'}`}
                            >
                                <div className="h-16 w-16 shrink-0 rounded overflow-hidden bg-muted border relative">
                                    {item.type === 'IMAGE' ? (
                                        <img src={item.previewUrl || item.mediaUrl} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-black/5"><Video className="w-6 h-6 text-muted-foreground" /></div>
                                    )}
                                    <Badge className="absolute top-0 right-0 rounded-none rounded-bl-md px-1 py-0 h-4 text-[9px] min-w-4 justify-center pointer-events-none">
                                        {idx + 1}
                                    </Badge>
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium truncate max-w-[120px]">
                                            {item.sourceType === 'upload' ? item.file.name : 'Link Externo'}
                                        </span>
                                        {item.sourceType === 'url' && (
                                            <Badge variant="outline" className="text-[9px] h-4 px-1">{item.type === 'IMAGE' ? 'IMG' : 'VID'}</Badge>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {item.caption ? item.caption.substring(0, 30) + '...' : 'Sem legenda'}
                                    </p>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6 self-center text-muted-foreground opacity-50 hover:opacity-100 hover:text-destructive hover:bg-destructive/10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removePendingItem(item.id);
                                    }}
                                >
                                    <X className="w-3 h-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t bg-background/50 backdrop-blur sticky bottom-0 z-10">
                         <Button className="w-full" onClick={handleCreateItem} disabled={isCreating}>
                            {isCreating ? (
                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processando {batchProgress.done}/{batchProgress.total}...</>
                            ) : (
                                <><Save className="w-4 h-4 mr-2" /> Enviar {pendingItems.length} item(ns)</>
                            )}
                         </Button>
                    </div>
                </div>

                {/* AREA DE EDIÇÃO DO ITEM SELECIONADO */}
                <div className="lg:col-span-2 p-6 flex flex-col gap-6 bg-background">
                    {currentPendingItem ? (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    Editando Mídia {currentPendingIndex + 1}
                                </h3>
                                <div className="flex gap-2">
                                     {currentPendingItem.sourceType === 'url' && (
                                         <div className="flex bg-muted rounded-md p-1">
                                             <Button 
                                                variant={currentPendingItem.type === 'IMAGE' ? 'secondary' : 'ghost'} 
                                                size="xs" 
                                                onClick={() => updatePendingItem(currentPendingItem.id, { type: 'IMAGE' })}
                                                className="h-7 text-xs"
                                             >
                                                Imagem
                                             </Button>
                                             <Button 
                                                variant={currentPendingItem.type === 'VIDEO' ? 'secondary' : 'ghost'} 
                                                size="xs" 
                                                onClick={() => updatePendingItem(currentPendingItem.id, { type: 'VIDEO' })}
                                                className="h-7 text-xs"
                                             >
                                                Vídeo
                                             </Button>
                                         </div>
                                     )}
                                     <Button 
                                        variant="destructive" 
                                        size="sm" 
                                        onClick={() => removePendingItem(currentPendingItem.id)}
                                     >
                                        <Trash2 className="w-4 h-4" />
                                     </Button>
                                </div>
                            </div>

                            <Card className="overflow-hidden border-2 bg-muted/20">
                                <GalleryMediaPreview 
                                    item={{
                                        type: currentPendingItem.type,
                                        mediaUrl: currentPendingItem.previewUrl || currentPendingItem.mediaUrl
                                    }} 
                                    className="aspect-video" 
                                />
                            </Card>

                            <div className="space-y-2">
                                <Label>Legenda (Markdown)</Label>
                                <div className="border rounded-md focus-within:ring-1 focus-within:ring-primary">
                                    <MDXEditor
                                        editorKey={`pending-editor-${currentPendingItem.id}-${pendingEditorKey}`}
                                        value={currentPendingItem.caption}
                                        onChange={(val) => updatePendingItem(currentPendingItem.id, { caption: val })}
                                        placeholder="Digite uma legenda para esta mídia..."
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground text-right">{currentPendingItem.caption?.length || 0} caracteres</p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setCurrentPendingIndex(i => Math.max(0, i - 1));
                                        setPendingEditorKey(k => k + 1);
                                    }}
                                    disabled={currentPendingIndex === 0}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" /> Anterior
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setCurrentPendingIndex(i => Math.min(pendingItems.length - 1, i + 1));
                                        setPendingEditorKey(k => k + 1);
                                    }}
                                    disabled={currentPendingIndex >= pendingItems.length - 1}
                                >
                                    Próxima <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                            <AlertCircle className="w-10 h-10 opacity-20" />
                            <p>Selecione um item da fila para editar.</p>
                        </div>
                    )}
                </div>
            </div>
          </CardContent>
        )}
      </Card>

      <Separator />

      {/* --- GALERIA EXISTENTE --- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
             <h2 className="text-xl font-bold tracking-tight">Galeria Publicada</h2>
             <Badge variant="outline">{sortedItems.length} itens</Badge>
        </div>

        {!hasItems ? (
            <div className="rounded-lg border border-dashed py-12 text-center bg-muted/50">
                <ImageIcon className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">A galeria está vazia.</p>
                <p className="text-sm text-muted-foreground/80">Use a área acima para adicionar novas mídias.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden group hover:shadow-md transition-all duration-300 border-muted-foreground/20">
                        <CardHeader className="p-0 relative aspect-video bg-muted">
                            <GalleryMediaPreview item={item} className="h-full w-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                <div className="flex justify-end gap-2">
                                     <Button variant="secondary" size="sm" onClick={() => startEditingCaption(item)}>
                                        <Pencil className="w-4 h-4 mr-2" /> Editar
                                     </Button>
                                     <Button variant="destructive" size="sm" onClick={() => setItemToDelete(item)}>
                                        <Trash2 className="w-4 h-4" />
                                     </Button>
                                </div>
                            </div>
                            <Badge className="absolute top-2 left-2 shadow-sm" variant={item.type === 'IMAGE' ? 'default' : 'secondary'}>
                                {item.type === 'IMAGE' ? <ImageIcon className="w-3 h-3 mr-1" /> : <Video className="w-3 h-3 mr-1" />}
                                {item.type === 'IMAGE' ? 'Imagem' : 'Vídeo'}
                            </Badge>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            {editingItemId === item.id ? (
                                <div className="space-y-3 animate-in slide-in-from-top-2">
                                    <Label>Editar Legenda</Label>
                                    <MDXEditor
                                        editorKey={`edit-gallery-${item.id}-${editEditorKey}`}
                                        value={editingCaption}
                                        onChange={setEditingCaption}
                                        placeholder="Legenda..."
                                    />
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="sm" onClick={() => setEditingItemId(null)}>Cancelar</Button>
                                        <Button size="sm" onClick={() => handleUpdateCaption(item.id, editingCaption)} disabled={isUpdatingCaption}>
                                            {isUpdatingCaption ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Salvar'}
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="min-h-[3rem]">
                                    {item.caption ? (
                                        <div className="prose prose-sm dark:prose-invert line-clamp-3 text-xs text-muted-foreground">
                                            <MarkdownContent content={item.caption} />
                                        </div>
                                    ) : (
                                        <p className="text-xs text-muted-foreground italic">Sem legenda.</p>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
      </div>

      {/* --- DIALOG DE URL --- */}
      <Dialog open={urlInputOpen} onOpenChange={setUrlInputOpen}>
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>Adicionar Links Externos</DialogTitle>
                <DialogDescription>
                    Cole links de imagens ou vídeos (Youtube, Vimeo, etc).
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-2">
                <Textarea 
                    placeholder={"https://imagem.com/foto1.jpg\nhttps://youtube.com/watch?v=..."}
                    className="min-h-[150px] font-mono text-sm"
                    value={mediaUrlsText}
                    onChange={(e) => setMediaUrlsText(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                    Separe múltiplos links por linha. Links de vídeo serão detectados automaticamente.
                </p>
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => setUrlInputOpen(false)}>Cancelar</Button>
                <Button onClick={handleAppendUrlsToQueue} disabled={!mediaUrlsText.trim()}>
                    Adicionar à fila
                </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        open={!!itemToDelete}
        onOpenChange={(open) => {
          if (!open) setItemToDelete(null);
        }}
        title="Excluir item da galeria?"
        description="Essa ação removerá o item permanentemente da galeria do evento."
        confirmText={isDeleting ? 'Excluindo...' : 'Excluir Item'}
        onConfirm={handleDeleteItem}
      />
    </div>
  );
}
