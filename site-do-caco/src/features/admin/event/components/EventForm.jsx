import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter 
} from '@/components/ui/card';
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter 
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MDXEditor } from '@/shared/components/MDXEditor'; 
import { 
  CalendarIcon, Upload, MapPin, Type, AlertCircle, Link as LinkIcon,
  Save, Trash2, ArrowLeft, Image as ImageIcon, ExternalLink, Eraser
} from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';
import { DatePicker } from '../../components/DatePicker';
import { TimeInput } from '../../components/TimeInput';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

const DRAFT_KEY = 'event-draft';

const EVENT_TYPES = [
  { value: 'CACO', label: 'Evento CACO' },
  { value: 'IC', label: 'Intercâmbio' },
  { value: 'FERIADO', label: 'Feriado' },
];

const IMPORTANCE_TYPES = [
  { value: 'MAJOR', label: 'Importante' },
  { value: 'MINOR', label: 'Menor' },
];

const STATUS_TYPES = [
  { value: 'SCHEDULED', label: 'Agendado' },
  { value: 'HAPPENING', label: 'Ocorrendo' },
  { value: 'ENDED', label: 'Finalizado' },
];

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export function EventForm({ 
  initialData, 
  onSubmit, 
  onCancel,
  loading,
  onDelete
}) {
  // --- ESTADOS DE IMAGEM ---
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null);

  // --- ESTADOS DO FORMULÁRIO ---
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugEdited, setSlugEdited] = useState(false);
  const [description, setDescription] = useState('');
  // Key auxiliar para forçar re-render do editor quando carregamos rascunho
  const [editorKey, setEditorKey] = useState(0); 

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [locationUrl, setLocationUrl] = useState('');
  const [type, setType] = useState('CACO');
  const [importance, setImportance] = useState('MINOR');
  const [status, setStatus] = useState('SCHEDULED');
  const [differentDay, setDifferentDay] = useState(false);
  
  // Dialogs
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [discardDraftDialogOpen, setDiscardDraftDialogOpen] = useState(false);

  // --- INICIALIZAÇÃO E LIMPEZA ---
  useEffect(() => {
    // Limpeza de memória de blobs
    return () => {
        if (imageSrc && imageSrc.startsWith('blob:')) URL.revokeObjectURL(imageSrc);
        if (croppedImage && croppedImage.startsWith('blob:')) URL.revokeObjectURL(croppedImage);
    };
  }, []);

  // CARREGAR DADOS (Edição ou Rascunho)
  useEffect(() => {
    if (initialData) {
      // Modo EDIÇÃO
      setTitle(initialData.title || '');
      setSlug(initialData.slug || '');
      setSlugEdited(true);
      setDescription(initialData.description || '');
      // Força reload do editor com o conteúdo inicial
      setEditorKey(prev => prev + 1);

      setLocation(initialData.location || '');
      setLocationUrl(initialData.locationUrl || '');
      setType(initialData.type || 'CACO');
      setImportance(initialData.importance || 'MINOR');
      setStatus(initialData.status || 'SCHEDULED');
      
      if (initialData.startDate) {
        const start = new Date(initialData.startDate);
        setStartDate(start);
        setStartTime(formatTime(start));
      }
      
      if (initialData.endDate) {
        const end = new Date(initialData.endDate);
        setEndDate(end);
        setEndTime(formatTime(end));
        if (initialData.startDate) {
           const start = new Date(initialData.startDate);
           setDifferentDay(start.toDateString() !== end.toDateString());
        }
      }

      if (initialData.coverImage) {
        setCroppedImage(initialData.coverImage);
      }
    } else {
      // Modo CRIAÇÃO - Tentar carregar rascunho
      const savedDraft = localStorage.getItem(DRAFT_KEY);
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          if(draft.title) setTitle(draft.title);
          if(draft.slug) setSlug(draft.slug);
          
          if(draft.description) {
            setDescription(draft.description);
            // Força reload do editor com o conteúdo do rascunho
            setEditorKey(prev => prev + 1);
          }

          if(draft.location) setLocation(draft.location);
          if(draft.locationUrl) setLocationUrl(draft.locationUrl);
          if(draft.type) setType(draft.type);
          if(draft.importance) setImportance(draft.importance);
          if(draft.startTime) setStartTime(draft.startTime);
          if(draft.endTime) setEndTime(draft.endTime);
          if(draft.differentDay) setDifferentDay(draft.differentDay);
          
          if(draft.startDate) setStartDate(new Date(draft.startDate));
          if(draft.endDate) setEndDate(new Date(draft.endDate));
          
        } catch (e) {
          console.error("Erro ao ler rascunho", e);
        }
      }
    }
  }, [initialData]);

  // SALVAR RASCUNHO AUTOMÁTICO
  useEffect(() => {
    // Só salva rascunho se for criação (sem ID inicial)
    if (!initialData) {
      if (title || description || startDate) {
        const draft = { 
            title, slug, description, location, locationUrl, 
            type, importance, startDate, endDate, startTime, endTime, differentDay 
        };
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      }
    }
  }, [
    initialData, title, slug, description, location, locationUrl, 
    type, importance, startDate, endDate, startTime, endTime, differentDay
  ]);

  // --- HANDLERS ---
  const formatTime = (date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });

  const handleDiscardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    // Reset visual
    setTitle('');
    setSlug('');
    setDescription('');
    setEditorKey(prev => prev + 1); // Limpa editor visualmente
    setLocation('');
    setLocationUrl('');
    setStartDate(null);
    setEndDate(null);
    setStartTime('');
    setEndTime('');
    setDiscardDraftDialogOpen(false);
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!slugEdited) {
        setSlug(slugify(newTitle));
    }
  };

  const handleSlugChange = (e) => {
      setSlug(slugify(e.target.value));
      setSlugEdited(true);
  };

  const handleBackClick = () => {
    if (!initialData) {
        // Novo evento: avisa que ficou salvo no rascunho
        setExitDialogOpen(true);
    } else {
        onCancel();
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (imageSrc) URL.revokeObjectURL(imageSrc);

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setIsCropModalOpen(true);
      e.target.value = ''; 
    };
    reader.readAsDataURL(file);
  };

  const handleCropConfirm = async () => {
    try {
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const file = new File([croppedBlob], `cover-${Date.now()}.jpg`, { type: 'image/jpeg' });
      const objectUrl = URL.createObjectURL(croppedBlob);
      setCroppedImage(objectUrl);
      setCroppedFile(file);
      setIsCropModalOpen(false);
    } catch (err) {
      console.error(err);
      alert('Erro ao recortar imagem');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return alert('Título é obrigatório');
    if (!slug.trim()) return alert('Slug é obrigatório');
    if (!description.trim()) return alert('Descrição é obrigatória');
    if (!startDate) return alert('Data de início é obrigatória');

    const combine = (d, t) => {
        if (!d || !t) return null;
        const [hh, mm] = t.split(':').map(Number);
        const newDate = new Date(d);
        newDate.setHours(hh, mm, 0, 0);
        return newDate;
    };

    const startDateTime = combine(startDate, startTime);
    let endDateTime = differentDay 
        ? combine(endDate, endTime)
        : combine(startDate, endTime);

    if (!startDateTime || !endDateTime) return alert('Defina os horários de início e fim corretamente');
    if (endDateTime <= startDateTime) return alert('Data final deve ser maior que a inicial');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('description', description);
    formData.append('startDate', startDateTime.toISOString());
    formData.append('endDate', endDateTime.toISOString());
    formData.append('location', location);
    formData.append('locationUrl', locationUrl);
    formData.append('type', type);
    formData.append('importance', importance);
    
    if (initialData) {
        formData.append('status', status); 
    }
    
    if (croppedFile) {
        formData.append('coverImage', croppedFile);
    }

    const result = await onSubmit(formData, initialData?.id);
    
    if (result?.success) {
      localStorage.removeItem(DRAFT_KEY);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleBackClick}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">
                {initialData ? 'Editar Evento' : 'Novo Evento'}
            </h1>
        </div>
        <div className="flex gap-2">
            {!initialData && (
                <Button variant="ghost" className="text-muted-foreground hover:text-destructive" size="sm" onClick={() => setDiscardDraftDialogOpen(true)}>
                    <Eraser className="w-4 h-4 mr-2" /> Descartar Rascunho
                </Button>
            )}
            {initialData && (
                <Button variant="destructive" size="sm" onClick={() => setDeleteDialogOpen(true)} disabled={loading}>
                    <Trash2 className="w-4 h-4 mr-2" /> Excluir
                </Button>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUNA ESQUERDA: Conteúdo */}
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Informações do Evento</CardTitle>
                    <CardDescription>Detalhes principais do evento.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Título *</Label>
                        <Input value={title} onChange={handleTitleChange} placeholder="Ex: Recepção de Calouros" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label className="text-muted-foreground text-xs font-bold">Slug (URL-Friendly) *</Label>
                        <Input value={slug} onChange={handleSlugChange} placeholder="Ex: recepcao-de-calouros" className="font-mono text-sm"/>
                    </div>

                    <div className="space-y-2">
                        <Label>Descrição (Markdown) *</Label>
                        <div className="border rounded-md min-h-[50vh] md:min-h-[400px]">
                             {/* Key force o reset quando carregamos rascunhos */}
                             <MDXEditor 
                                editorKey={editorKey.toString()} 
                                value={description} 
                                onChange={setDescription} 
                                placeholder="Descreva o evento..." 
                             />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CalendarIcon className="w-5 h-5" /> Data e Horário</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DatePicker value={startDate} onChange={setStartDate} label="Data Início *" />
                        <TimeInput value={startTime} onChange={setStartTime} label="Hora Início *" />
                     </div>
                     <div className="flex items-center space-x-2 py-2">
                        <Switch id="diff-day" checked={differentDay} onCheckedChange={setDifferentDay} />
                        <Label htmlFor="diff-day">Termina em outro dia?</Label>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {differentDay ? <DatePicker value={endDate} onChange={setEndDate} label="Data Término *" /> : <div className="hidden md:block"></div>}
                        <TimeInput value={endTime} onChange={setEndTime} label="Hora Término *" />
                     </div>
                </CardContent>
            </Card>
        </div>

        {/* COLUNA DIREITA: Mídia e Configs */}
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Imagem de Capa</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {croppedImage ? (
                            <div className="relative group rounded-lg overflow-hidden border aspect-video bg-muted">
                                <img src={croppedImage} alt="Cover" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button size="sm" variant="secondary" onClick={() => document.getElementById('cover-upload').click()}>Trocar Imagem</Button>
                                </div>
                            </div>
                        ) : (
                            <div 
                                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition"
                                onClick={() => document.getElementById('cover-upload').click()}
                            >
                                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">Clique para enviar (Opcional)</p>
                                <p className="text-xs text-muted-foreground mt-1">Formato 16:9 recomendado</p>
                            </div>
                        )}
                        <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>Configurações</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label><MapPin className="w-4 h-4 inline mr-1"/> Local (Nome)</Label>
                        <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="Ex: Auditório Central" />
                    </div>

                    <div className="space-y-2">
                        <Label><LinkIcon className="w-4 h-4 inline mr-1"/> Link do Mapa</Label>
                        <div className="flex gap-2">
                            <Input value={locationUrl} onChange={e => setLocationUrl(e.target.value)} placeholder="https://maps.google..." />
                            {locationUrl && <Button variant="outline" size="icon" asChild><a href={locationUrl} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4" /></a></Button>}
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <Label><Type className="w-4 h-4 inline mr-1"/> Tipo</Label>
                        <div className="flex flex-wrap gap-2">
                            {EVENT_TYPES.map(t => (
                                <Badge key={t.value} variant={type === t.value ? "default" : "outline"} className="cursor-pointer" onClick={() => setType(t.value)}>{t.label}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label><AlertCircle className="w-4 h-4 inline mr-1"/> Importância</Label>
                        <div className="flex flex-wrap gap-2">
                            {IMPORTANCE_TYPES.map(t => (
                                <Badge key={t.value} variant={importance === t.value ? "default" : "outline"} className="cursor-pointer" onClick={() => setImportance(t.value)}>{t.label}</Badge>
                            ))}
                        </div>
                    </div>

                    {initialData && (
                         <div className="space-y-2 pt-2">
                            <Label>Status</Label>
                            <select className="w-full border rounded-md p-2 text-sm bg-background" value={status} onChange={e => setStatus(e.target.value)}>
                                {STATUS_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                            </select>
                         </div>
                    )}
                </CardContent>
                <CardFooter className="bg-muted/20 border-t p-4 flex justify-end gap-3">
                    <Button variant="outline" onClick={handleBackClick} disabled={loading}>Cancelar</Button>
                    <Button onClick={handleFormSubmit} disabled={loading}>{loading ? 'Salvando...' : <><Save className="w-4 h-4 mr-2" /> Salvar</>}</Button>
                </CardFooter>
            </Card>
        </div>
      </div>

      <Dialog open={isCropModalOpen} onOpenChange={setIsCropModalOpen}>
        <DialogContent className="sm:max-w-xl">
            <DialogHeader><DialogTitle>Ajustar Imagem</DialogTitle></DialogHeader>
            <div className="relative h-[300px] w-full bg-black rounded-lg overflow-hidden my-4">
                <Cropper image={imageSrc} crop={crop} zoom={zoom} aspect={16 / 9} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)} />
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsCropModalOpen(false)}>Cancelar</Button>
                <Button onClick={handleCropConfirm}>Confirmar Recorte</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
          open={exitDialogOpen}
          onOpenChange={setExitDialogOpen}
          title="Rascunho Salvo"
          description="Suas alterações foram salvas. Deseja sair?"
          onConfirm={onCancel}
          confirmText="Sair"
          cancelText="Continuar Editando"
        />

        <ConfirmDeleteDialog
          open={discardDraftDialogOpen}
          onOpenChange={setDiscardDraftDialogOpen}
          title="Descartar Rascunho?"
          description="Você perderá todo o progresso deste evento novo."
          onConfirm={handleDiscardDraft}
          confirmText="Descartar"
        />

        <ConfirmDeleteDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          title="Excluir Evento?"
          description="Essa ação não pode ser desfeita."
          onConfirm={() => onDelete(initialData.id)}
          confirmText="Excluir Definitivamente"
        />
    </div>
  );
}