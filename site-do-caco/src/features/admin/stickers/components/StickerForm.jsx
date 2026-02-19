import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, Save, Upload, AlertCircle, ImageIcon, X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { stickerService } from '@/shared/services/stickerService';

const DRAFT_KEY = 'sticker-draft';
const EVENTS_PER_PAGE = 6;

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <p className="text-sm font-medium text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">
      {message}
    </p>
  );
};

const EventCard = ({ event, isSelected, onSelect, isLoading }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(event.id)}
      disabled={isLoading}
      className={`relative overflow-hidden rounded-lg border-2 transition-all flex flex-col gap-2
        ${isSelected 
          ? 'border-primary bg-primary/10 ring-2 ring-primary/50' 
          : 'border-border hover:border-primary/50'
        }
      `}
    >
      {/* Imagem */}
      <div className="w-full h-24 bg-muted flex items-center justify-center overflow-hidden">
        {event.coverImage ? (
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Calendar className="h-8 w-8 text-muted-foreground" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 px-3 pb-3 text-left">
        <p className="font-medium text-sm line-clamp-2">{event.title}</p>
        <p className="text-xs text-muted-foreground">
          {new Date(event.startDate).toLocaleDateString('pt-BR')}
        </p>
        {event.location && (
          <p className="text-xs text-muted-foreground truncate">{event.location}</p>
        )}
      </div>

      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          ✓
        </div>
      )}
    </button>
  );
};

export function StickerForm({ initialData, onSubmit, onCancel, loading }) {
  const { toast } = useToast();
  const isEditMode = !!initialData?.id;

  // === ESTADO DE FORM ===
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    originEventId: initialData?.originEventId || null,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === EVENTOS ===
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const paginatedEvents = events.slice(
    currentPage * EVENTS_PER_PAGE,
    (currentPage + 1) * EVENTS_PER_PAGE
  );

  useEffect(() => {
    loadEvents();
  }, []);

  /**
   * Carrega eventos da API
   */
  const loadEvents = async () => {
    try {
      setLoadingEvents(true);
      const eventsList = await stickerService.getEventsForSelection();
      setEvents(eventsList);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar eventos",
        description: "Não foi possível buscar a lista de eventos.",
      });
    } finally {
      setLoadingEvents(false);
    }
  };

  /**
   * Valida formulário
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.length > 120) {
      newErrors.name = 'Nome deve ter no máximo 120 caracteres';
    }

    if (formData.description && formData.description.length > 600) {
      newErrors.description = 'Descrição deve ter no máximo 600 caracteres';
    }

    // Imagem é obrigatória apenas na criação
    if (!isEditMode && !imageFile) {
      newErrors.image = 'Imagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Atualiza campo de form
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  /**
   * Handle de upload de imagem
   */
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Valida tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast({
        variant: "destructive",
        title: "Arquivo inválido",
        description: "Por favor, selecione uma imagem válida.",
      });
      return;
    }

    // Valida tamanho (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "Arquivo muito grande",
        description: "A imagem deve ter no máximo 5MB.",
      });
      return;
    }

    setImageFile(file);

    // Cria preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Limpa erro
    if (errors.image) {
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  /**
   * Remove imagem selecionada
   */
  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  /**
   * Submete formulário
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepara DTO (sem imageUrl)
      const dto = {
        name: formData.name,
        description: formData.description || null,
        originEventId: formData.originEventId || null,
      };

      const result = await onSubmit(dto, imageFile);

      if (result.success) {
        localStorage.removeItem(DRAFT_KEY);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onCancel}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {isEditMode ? 'Editar Sticker' : 'Novo Sticker'}
          </h1>
          <p className="text-muted-foreground">
            {isEditMode ? 'Atualize as informações do sticker' : 'Crie um novo sticker para o álbum'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Informações Básicas + Upload de Imagem */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>
                Preencha os dados essenciais do sticker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6 lg:gap-10">
                {/* Left: Image Upload - Fixed Size */}
                <div className="flex flex-col flex-shrink-0 mx-auto lg:mx-0">
                  <Label className="text-sm font-semibold mb-4 text-foreground">
                    Imagem do Sticker {!isEditMode && '*'}
                  </Label>
                  {!imageFile && !imagePreview ? (
                    <label
                      htmlFor="image-upload"
                      className={`flex flex-col items-center justify-center w-80 h-80 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200
                        ${errors.image ? 'border-destructive bg-destructive/5' : 'border-primary/30 hover:border-primary/50 hover:bg-primary/5'}
                      `}
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Upload className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-sm text-foreground font-semibold">
                          Clique ou arraste
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG ou WEBP
                        </p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={isSubmitting}
                      />
                    </label>
                  ) : (
                    <div className="space-y-4">
                      {/* Image Preview - Fixed 320x320 */}
                      <div className="relative w-80 h-80 rounded-xl overflow-hidden bg-muted border-2 border-border shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={imageFile ? imagePreview : (initialData?.imageUrl || imagePreview)}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 shadow-md"
                          onClick={handleRemoveImage}
                          disabled={isSubmitting}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Remover
                        </Button>
                      </div>

                      {/* File Info */}
                      {imageFile && (
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-3.5 space-y-2.5 border border-primary/20">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                              <ImageIcon className="h-4 w-4 text-primary flex-shrink-0" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm text-foreground truncate">{imageFile.name}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {(imageFile.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <ErrorMessage message={errors.image} />
                </div>

                {/* Right: Form Fields - Flexible */}
                <div className="flex-1 space-y-6">
                  {/* Name */}
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Nome do Sticker *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="ex: Balão de Programação"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      maxLength={120}
                      className={`text-base transition-colors ${errors.name ? 'border-destructive' : ''}`}
                    />
                    <p className="text-xs text-muted-foreground font-medium">
                      {(formData.name || '').length}/120 caracteres
                    </p>
                    <ErrorMessage message={errors.name} />
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <Label htmlFor="description" className="text-sm font-semibold text-foreground">
                      Descrição
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Descrição opcional do sticker (máx 600 caracteres)"
                      value={formData.description}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={4}
                      maxLength={600}
                      className={`resize-none text-base transition-colors ${errors.description ? 'border-destructive' : ''}`}
                    />
                    <p className="text-xs text-muted-foreground font-medium">
                      {(formData.description || '').length}/600 caracteres
                    </p>
                    <ErrorMessage message={errors.description} />
                  </div>

                  {/* Dica */}
                  <Alert className="bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-300 dark:border-blue-800/50 rounded-lg shadow-sm">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <AlertTitle className="text-blue-900 dark:text-blue-200 font-semibold">Dica</AlertTitle>
                    <AlertDescription className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                      Use imagens quadradas (1:1) com fundo transparente para melhores resultados.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seletor de Evento */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Evento Relacionado (Opcional)</CardTitle>
              <CardDescription>
                Escolha um evento para associar a este sticker
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {loadingEvents ? (
                <div className="flex items-center justify-center py-12 gap-2 text-muted-foreground">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
                  <p>Carregando eventos...</p>
                </div>
              ) : events.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Nenhum evento disponível</p>
                </div>
              ) : (
                <>
                  {/* Events Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {/* Botão "Sem Evento" */}
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, originEventId: null }))}
                      disabled={isSubmitting}
                      className={`relative overflow-hidden rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 py-4
                        ${!formData.originEventId
                          ? 'border-primary bg-primary/10 ring-2 ring-primary/50'
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <X className="h-6 w-6 text-muted-foreground" />
                      <p className="text-xs font-medium text-center">Sem evento</p>
                      {!formData.originEventId && (
                        <div className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </button>

                    {/* Event Cards */}
                    {paginatedEvents.map(event => (
                      <EventCard
                        key={event.id}
                        event={event}
                        isSelected={formData.originEventId === event.id}
                        onSelect={(eventId) => {
                          setFormData(prev => ({
                            ...prev,
                            originEventId: eventId
                          }));
                        }}
                        isLoading={isSubmitting}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        disabled={currentPage === 0 || isSubmitting}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        {currentPage + 1} de {totalPages}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        disabled={currentPage === totalPages - 1 || isSubmitting}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || loading}
            className="w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || loading}
            className="gap-2 w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                {isEditMode ? 'Salvando...' : 'Criando...'}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {isEditMode ? 'Salvar Alterações' : 'Criar Sticker'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
