import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { useToast } from '@/components/ui/use-toast';
import {
    CalendarIcon, Upload, MapPin, Type, AlertCircle, Link as LinkIcon,
    Save, Trash2, ArrowLeft, Image as ImageIcon, ExternalLink, Eraser, Crop, Images
} from 'lucide-react';
import Cropper from 'react-easy-crop';
import { combineDateAndTime, toLocalISOString } from '@/shared/utils/helpers';
import { DatePicker } from '../../components/DatePicker';
import { TimeInput } from '../../components/TimeInput';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';
import { EventGalleryTab } from './EventGalleryTab';
import { useImageCropper } from '@/shared/hooks/useImageCropper';
import { useFormDraft } from '@/shared/hooks/useFormDraft';
import { extractUrlFromIframe } from '@/lib/utils';

const DRAFT_KEY = 'event-draft';

const EVENT_TYPES = [
    { value: 'CACO', label: 'Evento do CACo' },
    { value: 'IC', label: 'IC' },
    { value: 'FERIADO', label: 'Feriado' },
];

const IMPORTANCE_TYPES = [
    { value: 'MAJOR', label: 'Importante' },
    { value: 'MINOR', label: 'Comum' },
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

const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return <p className="text-sm font-medium text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">{message}</p>;
};

export function EventForm({
    initialData,
    onSubmit,
    onCancel,
    loading,
    onDelete
}) {
    const { toast } = useToast();

    function formatTime(date) {
        return date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    }

    // --- ESTADOS DE IMAGEM ---
    const imageCropper = useImageCropper(initialData?.coverImage || null);

    // --- RASCUNHO ---
    const { draftValues, hasDraft, saveDraft, discardDraft } = useFormDraft(DRAFT_KEY, {}, !!initialData);
    
    // --- ESTADOS DO FORMULÁRIO ---
    const [title, setTitle] = useState(initialData?.title || draftValues.title || '');
    const [slug, setSlug] = useState(initialData?.slug || draftValues.slug || '');
    const [slugEdited, setSlugEdited] = useState(Boolean(initialData?.slug || draftValues.slug));
    const [description, setDescription] = useState(initialData?.description || draftValues.description || '');
    const [activeTab, setActiveTab] = useState('details');
    
    // Key para re-renderizar editor se necessário
    const [editorKey, setEditorKey] = useState(0);

    const [startDate, setStartDate] = useState(
        initialData?.startDate ? new Date(initialData.startDate) : 
        draftValues.startDate ? new Date(draftValues.startDate) : null
    );
    const [endDate, setEndDate] = useState(
        initialData?.endDate ? new Date(initialData.endDate) : 
        draftValues.endDate ? new Date(draftValues.endDate) : null
    );
    const [startTime, setStartTime] = useState(
         initialData?.startDate ? formatTime(new Date(initialData.startDate)) :
         draftValues.startTime || ''
    );
    const [endTime, setEndTime] = useState(
         initialData?.endDate ? formatTime(new Date(initialData.endDate)) :
         draftValues.endTime || ''
    );
    
    const [location, setLocation] = useState(initialData?.location || draftValues.location || '');
    const [locationUrl, setLocationUrl] = useState(initialData?.locationUrl || draftValues.locationUrl || '');
    const [type, setType] = useState(initialData?.type || draftValues.type || 'CACO');
    const [importance, setImportance] = useState(initialData?.importance || draftValues.importance || 'MINOR');
    const [status, setStatus] = useState(initialData?.status || 'SCHEDULED');
    const [differentDay, setDifferentDay] = useState(
        initialData?.startDate ? new Date(initialData.startDate).toDateString() !== new Date(initialData.endDate).toDateString() :
        draftValues.differentDay || false
    );

    const [errors, setErrors] = useState({});

    // Dialogs
    const [exitDialogOpen, setExitDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [discardDraftDialogOpen, setDiscardDraftDialogOpen] = useState(false);

    // CARREGAMENTO DE DADOS E RASCUNHO
    useEffect(() => {
         // Se tivermos initialData (edição), já foi setado no useState initial values.
         // Se não tivermos (criação), verificamos se o draftValues mudou (carregou do storage)
         if (!initialData && hasDraft) {
             setTitle(draftValues.title || '');
             setSlug(draftValues.slug || '');
             setDescription((prev) => draftValues.description !== prev ? draftValues.description : prev);
             if (draftValues.description) setEditorKey(p => p + 1);
             
             setLocation(draftValues.location || '');
             setLocationUrl(draftValues.locationUrl || '');
             setType(draftValues.type || 'CACO');
             setImportance(draftValues.importance || 'MINOR');
             
             if (draftValues.startDate) setStartDate(new Date(draftValues.startDate));
             if (draftValues.endDate) setEndDate(new Date(draftValues.endDate));
             if (draftValues.startTime) setStartTime(draftValues.startTime);
             if (draftValues.endTime) setEndTime(draftValues.endTime);
             if (draftValues.differentDay !== undefined) setDifferentDay(draftValues.differentDay);
         }
    }, [initialData, hasDraft, draftValues]);

   // Salvar rascunho com DEBOUNCE (atraso)
    useEffect(() => {
        if (!initialData) {
            const timeoutId = setTimeout(() => {
                if (title || description || startDate) {
                    saveDraft({
                        title, slug, description, location, locationUrl,
                        type, importance, startDate, endDate, startTime, endTime, differentDay
                    });
                }
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [initialData, title, slug, description, location, locationUrl, type, importance, startDate, endDate, startTime, endTime, differentDay, saveDraft]);

    const handleDiscardDraft = () => {
        discardDraft();
        
        setTitle('');
        setSlug('');
        setDescription('');
        setEditorKey(prev => prev + 1);
        setLocation('');
        setLocationUrl(''); 
        setStartDate(null);
        setEndDate(null);
        setStartTime('');
        setEndTime('');

        // Limpar imagem
        imageCropper.reset();

        setDiscardDraftDialogOpen(false);
        toast({ title: "Rascunho limpo" });
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (!slugEdited) setSlug(slugify(newTitle));
        if (errors.title) setErrors(prev => ({ ...prev, title: null }));
    };

    const handleSlugChange = (e) => {
        setSlug(slugify(e.target.value));
        setSlugEdited(true);
        if (errors.slug) setErrors(prev => ({ ...prev, slug: null }));
    };

    const handleBackClick = () => {
        if (!initialData) {
            setExitDialogOpen(true);
        } else {
            onCancel();
        }
    };

    const handleLocationUrlChange = (e) => {
        let value = e.target.value;
        const extracted = extractUrlFromIframe(value);
        if (extracted !== value) {
            toast({
                title: "Link do mapa detectado",
                description: "O link foi extraído automaticamente do código iframe.",
            });
            value = extracted;
        }
        setLocationUrl(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "O título é obrigatório.";
        if (!slug.trim()) newErrors.slug = "O slug é obrigatório.";
        if (!description.trim()) newErrors.description = "A descrição é obrigatória.";
        if (!startDate) newErrors.startDate = "Data de início obrigatória.";

        if (differentDay && !endDate) newErrors.endDate = "Data de término obrigatória.";

        if (!newErrors.startDate && !newErrors.startTime && !newErrors.endTime) {
            const startDateTime = combineDateAndTime(startDate, startTime, '00:00');
            const endDateTime = differentDay
                ? combineDateAndTime(endDate, endTime, '23:59')
                : combineDateAndTime(startDate, endTime, '23:59');

            if (endDateTime && startDateTime && endDateTime <= startDateTime) {
                newErrors.dateLogic = "A data final deve ser posterior à data inicial.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                variant: "destructive",
                title: "Campos inválidos",
                description: "Por favor, verifique os campos em vermelho.",
            });

            setTimeout(() => {
                const firstErrorElement = document.querySelector('[data-error="true"]');
                if (firstErrorElement) {
                    firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstErrorElement.focus({ preventScroll: true });
                }
            }, 100);
            return;
        }

        // Combina data e hora usando valores padrão se hora estiver vazia
        const startDateTime = combineDateAndTime(startDate, startTime, '00:00');
        const endDateTime = differentDay
            ? combineDateAndTime(endDate, endTime, '23:59')
            : combineDateAndTime(startDate, endTime, '23:59');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('description', description);

        if (startDateTime) formData.append('startDate', toLocalISOString(startDateTime));
        if (endDateTime) formData.append('endDate', toLocalISOString(endDateTime));

        formData.append('location', location);
        formData.append('locationUrl', locationUrl);
        formData.append('type', type);
        formData.append('importance', importance);

        if (initialData) {
            formData.append('status', status);
            // Flag de remoção (para DTO)
            formData.append('removeCoverImage', imageCropper.isRemoved.toString());
        }

        // Se tiver arquivo novo, envia.
        if (imageCropper.file) {
            formData.append('coverImage', imageCropper.file);
        }

        const result = await onSubmit(formData, initialData?.id);

        if (result?.success) {
            discardDraft();
        }
    };

    const galleryItems = initialData?.galleryItems || initialData?.gallery || [];

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

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList className="w-full justify-start rounded-lg h-auto p-1">
                    <TabsTrigger value="details" className="px-4 py-2">Dados do Evento</TabsTrigger>
                    {initialData && (
                        <TabsTrigger value="gallery" className="px-4 py-2">
                            <Images className="w-4 h-4 mr-2" /> Galeria
                        </TabsTrigger>
                    )}
                </TabsList>

                    <TabsContent value="details" className="mt-0">
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
                                <Label className={errors.title ? "text-destructive" : ""}>Título *</Label>
                                <Input
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Ex: Recepção de Caloures"
                                    className={errors.title ? "border-destructive" : ""}
                                    data-error={!!errors.title}
                                />
                                <ErrorMessage message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label className={`text-xs font-bold ${errors.slug ? "text-destructive" : "text-muted-foreground"}`}>Slug (URL-Friendly) *</Label>
                                <Input
                                    value={slug}
                                    onChange={handleSlugChange}
                                    placeholder="Ex: recepcao-de-caloures"
                                    className={`font-mono text-sm ${errors.slug ? "border-destructive" : ""}`}
                                    data-error={!!errors.slug}
                                />
                                <ErrorMessage message={errors.slug} />
                            </div>

                            <div className="space-y-2">
                                <Label className={errors.description ? "text-destructive" : ""}>Descrição (Markdown) *</Label>
                                <div
                                    className={`rounded-md ${errors.description ? "border-destructive" : ""}`}
                                    data-error={!!errors.description}
                                >
                                    <MDXEditor
                                        editorKey={editorKey.toString()}
                                        value={description}
                                        onChange={(val) => {
                                            setDescription(val);
                                            if (errors.description && val.trim()) setErrors(prev => ({ ...prev, description: null }));
                                        }}
                                        placeholder="Descreva o evento..."
                                    />
                                </div>
                                <ErrorMessage message={errors.description} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><CalendarIcon className="w-5 h-5" /> Data e Horário</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ErrorMessage message={errors.dateLogic} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div data-error={!!errors.startDate}>
                                        <DatePicker
                                            value={startDate}
                                            onChange={(val) => {
                                                setStartDate(val);
                                                if (val) setErrors(prev => ({ ...prev, startDate: null }));
                                            }}
                                            label="Data Início *"
                                            hasError={!!errors.startDate}
                                        />
                                    </div>
                                    <ErrorMessage message={errors.startDate} />
                                </div>

                                <div className="space-y-1">
                                    <TimeInput
                                        value={startTime}
                                        onChange={(val) => {
                                            setStartTime(val);
                                            if (val) setErrors(prev => ({ ...prev, startTime: null }));
                                        }}
                                        label="Hora Início *"
                                        className={errors.startTime ? "border-destructive" : ""}
                                        data-error={!!errors.startTime}
                                    />
                                    <ErrorMessage message={errors.startTime} />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 py-2">
                                <Switch id="diff-day" checked={differentDay} onCheckedChange={setDifferentDay} />
                                <Label htmlFor="diff-day">Termina em outro dia?</Label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {differentDay ? (
                                    <div className="space-y-1">
                                        <div data-error={!!errors.endDate}>
                                            <DatePicker
                                                value={endDate}
                                                onChange={(val) => {
                                                    setEndDate(val);
                                                    if (val) setErrors(prev => ({ ...prev, endDate: null }));
                                                }}
                                                label="Data Término *"
                                                hasError={!!errors.endDate}
                                            />
                                        </div>
                                        <ErrorMessage message={errors.endDate} />
                                    </div>
                                ) : <div className="hidden md:block"></div>}

                                <div className="space-y-1">
                                    <TimeInput
                                        value={endTime}
                                        onChange={(val) => {
                                            setEndTime(val);
                                            if (val) setErrors(prev => ({ ...prev, endTime: null }));
                                        }}
                                        label="Hora Término *"
                                        placeholder="23:59"
                                        className={errors.endTime ? "border-destructive" : ""}
                                        data-error={!!errors.endTime}
                                    />
                                    <ErrorMessage message={errors.endTime} />
                                </div>
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
                                {imageCropper.previewUrl ? (
                                    <div className="relative group rounded-lg overflow-hidden border aspect-video bg-muted">
                                        <img src={imageCropper.previewUrl} alt="Cover" className="w-full h-full object-cover" />

                                        {/* Overlay com Ações (Trocar e Remover) */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                            <Button size="sm" variant="secondary" onClick={() => document.getElementById('cover-upload').click()}>
                                                Trocar
                                            </Button>
                                            <Button size="sm" variant="destructive" onClick={imageCropper.handleRemove} title="Remover imagem">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition group"
                                        onClick={() => document.getElementById('cover-upload').click()}
                                    >
                                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <p className="text-sm text-muted-foreground">Clique para enviar (Opcional)</p>
                                        <p className="text-xs text-muted-foreground mt-1">Formato 16:9 recomendado</p>
                                    </div>
                                )}
                                <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={imageCropper.handleFileSelect} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Configurações</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label><MapPin className="w-4 h-4 inline mr-1" /> Local (Nome)</Label>
                                <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="Ex: Auditório Central" />
                            </div>

                            <div className="space-y-2">
                                <Label><LinkIcon className="w-4 h-4 inline mr-1" /> Link do Mapa</Label>
                                <div className="flex gap-2">
                                    <Input value={locationUrl} onChange={handleLocationUrlChange} placeholder="Cole o link ou iframe do Google Maps" />
                                    {locationUrl && <Button variant="outline" size="icon" asChild><a href={locationUrl} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4" /></a></Button>}
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <Label><Type className="w-4 h-4 inline mr-1" /> Tipo</Label>
                                <div className="flex flex-wrap gap-2">
                                    {EVENT_TYPES.map(t => (
                                        <Badge key={t.value} variant={type === t.value ? "default" : "outline"} className="cursor-pointer" onClick={() => setType(t.value)}>{t.label}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label><AlertCircle className="w-4 h-4 inline mr-1" /> Importância</Label>
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
                    </TabsContent>

                {initialData && (
                    <TabsContent value="gallery" className="mt-0">
                        <EventGalleryTab eventId={initialData.id} initialItems={galleryItems} />
                    </TabsContent>
                )}
            </Tabs>

            {/* --- MODAL DE RECORTE (Mantido o layout solicitado) --- */}
            <Dialog open={imageCropper.isModalOpen} onOpenChange={imageCropper.setIsModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Ajustar Imagem</DialogTitle>
                        <DialogDescription>Recorte e ajuste a imagem para melhor visualização.</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="relative h-96 bg-black rounded-lg overflow-hidden border">
                            <Cropper
                                image={imageCropper.imageSrc}
                                crop={imageCropper.crop}
                                zoom={imageCropper.zoom}
                                aspect={16 / 9}
                                onCropChange={imageCropper.setCrop}
                                onZoomChange={imageCropper.setZoom}
                                onCropComplete={imageCropper.onCropComplete}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label className="text-sm font-medium">Zoom</Label>
                                <span className="text-xs text-muted-foreground">{imageCropper.zoom.toFixed(1)}x</span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={3}
                                step={0.1}
                                value={imageCropper.zoom}
                                onChange={(e) => imageCropper.setZoom(Number(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2 sm:gap-0 mt-4">
                        <Button
                            variant="outline"
                            onClick={imageCropper.handleCancelCrop}
                        >
                            Voltar
                        </Button>
                        <Button onClick={imageCropper.handleCropConfirm} disabled={imageCropper.loading}>
                            {imageCropper.loading ? 'Processando...' : <><Crop className="h-4 w-4 mr-2" /> Confirmar Recorte</>}
                        </Button>
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