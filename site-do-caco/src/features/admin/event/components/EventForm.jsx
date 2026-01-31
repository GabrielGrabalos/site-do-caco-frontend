import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { useToast } from '@/components/ui/use-toast';
import {
    CalendarIcon, Upload, MapPin, Type, AlertCircle, Link as LinkIcon,
    Save, Trash2, ArrowLeft, Image as ImageIcon, ExternalLink, Eraser, Crop, X
} from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';
import { DatePicker } from '../../components/DatePicker';
import { TimeInput } from '../../components/TimeInput';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

const DRAFT_KEY = 'event-draft';

const EVENT_TYPES = [
    { value: 'CACO', label: 'Evento CACo' },
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

const toLocalISOString = (date) => {
    const pad = (num) => num.toString().padStart(2, '0');
    return (
        date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds())
    );
};

export function EventForm({
    initialData,
    onSubmit,
    onCancel,
    loading,
    onDelete
}) {
    const { toast } = useToast();

    // --- ESTADOS DE IMAGEM ---
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [croppedFile, setCroppedFile] = useState(null);

    // NOVO: Controle de remoção de imagem
    const [removeCoverImage, setRemoveCoverImage] = useState(false);

    // --- ESTADOS DO FORMULÁRIO ---
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [slugEdited, setSlugEdited] = useState(false);
    const [description, setDescription] = useState('');
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

    const [errors, setErrors] = useState({});

    // Dialogs
    const [exitDialogOpen, setExitDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [discardDraftDialogOpen, setDiscardDraftDialogOpen] = useState(false);

    // Limpeza de memória
    useEffect(() => {
        return () => {
            if (imageSrc && imageSrc.startsWith('blob:')) URL.revokeObjectURL(imageSrc);
            if (croppedImage && croppedImage.startsWith('blob:')) URL.revokeObjectURL(croppedImage);
        };
    }, []);

    // CARREGAMENTO DE DADOS
    useEffect(() => {
        if (initialData) {
            console.log("Carregando dados iniciais para edição:", initialData);
            setTitle(initialData.title || '');
            setSlug(initialData.slug || '');
            setDescription(initialData.description || '');
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
                setRemoveCoverImage(false); // Reseta flag ao carregar
            }
        } else {
            const savedDraft = localStorage.getItem(DRAFT_KEY);
            if (savedDraft) {
                try {
                    const draft = JSON.parse(savedDraft);
                    if (draft.title) setTitle(draft.title);
                    if (draft.slug) setSlug(draft.slug);
                    if (draft.description) {
                        setDescription(draft.description);
                        setEditorKey(prev => prev + 1);
                    }
                    if (draft.location) setLocation(draft.location);
                    if (draft.locationUrl) setLocationUrl(draft.locationUrl);
                    if (draft.type) setType(draft.type);
                    if (draft.importance) setImportance(draft.importance);
                    if (draft.startTime) setStartTime(draft.startTime);
                    if (draft.endTime) setEndTime(draft.endTime);
                    if (draft.differentDay) setDifferentDay(draft.differentDay);
                    if (draft.startDate) setStartDate(new Date(draft.startDate));
                    if (draft.endDate) setEndDate(new Date(draft.endDate));

                    // Nota: Imagens não são salvas no rascunho do localStorage por serem pesadas
                } catch (e) {
                    console.error("Erro ao ler rascunho", e);
                }
            }
        }
    }, [initialData]);

    // Salvar rascunho
    useEffect(() => {
        if (!initialData) {
            if (title || description || startDate) {
                const draft = {
                    title, slug, description, location, locationUrl,
                    type, importance, startDate, endDate, startTime, endTime, differentDay
                };
                localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
            }
        }
    }, [initialData, title, slug, description, location, locationUrl, type, importance, startDate, endDate, startTime, endTime, differentDay]);

    const formatTime = (date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });

    const handleDiscardDraft = () => {
        localStorage.removeItem(DRAFT_KEY);
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
        if (croppedImage && croppedImage.startsWith('blob:')) URL.revokeObjectURL(croppedImage);
        setCroppedImage(null);
        setCroppedFile(null);
        setRemoveCoverImage(false);

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

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (imageSrc) URL.revokeObjectURL(imageSrc);

        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
            setZoom(1);
            setIsCropModalOpen(true);
            e.target.value = '';
        };
        reader.readAsDataURL(file);
    };

    // Lógica de Recorte (Adiciona imagem)
    const handleCropConfirm = async () => {
        try {
            const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            const file = new File([croppedBlob], `cover-${Date.now()}.jpg`, { type: 'image/jpeg' });
            const objectUrl = URL.createObjectURL(croppedBlob);

            setCroppedImage(objectUrl);
            setCroppedFile(file);

            // Se estamos adicionando uma imagem, garantimos que a flag de remoção seja falsa
            setRemoveCoverImage(false);

            setIsCropModalOpen(false);
        } catch (err) {
            console.error(err);
            toast({ variant: "destructive", title: "Erro ao recortar imagem" });
        }
    };

    // Lógica de Remoção de Imagem
    const handleRemoveImage = () => {
        // Limpa visualização
        setCroppedImage(null);
        setCroppedFile(null);

        // Se for edição de um evento existente, marca flag para remover no backend
        if (initialData) {
            setRemoveCoverImage(true);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "O título é obrigatório.";
        if (!slug.trim()) newErrors.slug = "O slug é obrigatório.";
        if (!description.trim()) newErrors.description = "A descrição é obrigatória.";
        if (!startDate) newErrors.startDate = "Data de início obrigatória.";
        if (!startTime) newErrors.startTime = "Hora de início obrigatória.";
        if (!endTime) newErrors.endTime = "Hora de término obrigatória.";

        if (differentDay && !endDate) newErrors.endDate = "Data de término obrigatória.";

        if (!newErrors.startDate && !newErrors.startTime && !newErrors.endTime) {
            const combine = (d, t) => {
                if (!d || !t) return null;
                const [hh, mm] = t.split(':').map(Number);
                const newDate = new Date(d);
                newDate.setHours(hh, mm, 0, 0);
                return newDate;
            };
            const startDateTime = combine(startDate, startTime);
            let endDateTime = differentDay
                ? (endDate ? combine(endDate, endTime) : null)
                : combine(startDate, endTime);

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
            formData.append('removeCoverImage', removeCoverImage.toString());
        }

        // Se tiver arquivo novo, envia.
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
                                <Label className={errors.title ? "text-destructive" : ""}>Título *</Label>
                                <Input
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Ex: Recepção de Calouros"
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
                                    placeholder="Ex: recepcao-de-calouros"
                                    className={`font-mono text-sm ${errors.slug ? "border-destructive" : ""}`}
                                    data-error={!!errors.slug}
                                />
                                <ErrorMessage message={errors.slug} />
                            </div>

                            <div className="space-y-2">
                                <Label className={errors.description ? "text-destructive" : ""}>Descrição (Markdown) *</Label>
                                <div
                                    className={`border rounded-md min-h-[50vh] md:min-h-[400px] ${errors.description ? "border-destructive" : ""}`}
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
                                {croppedImage ? (
                                    <div className="relative group rounded-lg overflow-hidden border aspect-video bg-muted">
                                        <img src={croppedImage} alt="Cover" className="w-full h-full object-cover" />

                                        {/* Overlay com Ações (Trocar e Remover) */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                            <Button size="sm" variant="secondary" onClick={() => document.getElementById('cover-upload').click()}>
                                                Trocar
                                            </Button>
                                            <Button size="sm" variant="destructive" onClick={handleRemoveImage} title="Remover imagem">
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
                                <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
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
                                    <Input value={locationUrl} onChange={e => setLocationUrl(e.target.value)} placeholder="https://maps.google..." />
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

            {/* --- MODAL DE RECORTE (Mantido o layout solicitado) --- */}
            <Dialog open={isCropModalOpen} onOpenChange={setIsCropModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Ajustar Imagem</DialogTitle>
                        <DialogDescription>Recorte e ajuste a imagem para melhor visualização.</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="relative h-96 bg-black rounded-lg overflow-hidden border">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={16 / 9}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label className="text-sm font-medium">Zoom</Label>
                                <span className="text-xs text-muted-foreground">{zoom.toFixed(1)}x</span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={3}
                                step={0.1}
                                value={zoom}
                                onChange={(e) => setZoom(Number(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2 sm:gap-0 mt-4">
                        <Button
                            variant="outline"
                            onClick={() => setIsCropModalOpen(false)}
                        >
                            Voltar
                        </Button>
                        <Button onClick={handleCropConfirm}>
                            <Crop className="h-4 w-4 mr-2" />
                            Confirmar Recorte
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