import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Trash2, Loader2, Crop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { useToast } from '@/components/ui/use-toast';
import { useImageCropper } from '@/shared/hooks/useImageCropper';
import Cropper from 'react-easy-crop';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export function NewsFormSection({ news, onSave, onCancel, saving }) {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    content: '',
  });

  // Tenta usar coverImage primeiro, depois imageUrl como fallback
  const imageCropper = useImageCropper(news?.coverImage || news?.imageUrl || null);
  const [slugEdited, setSlugEdited] = useState(false);
  const [errors, setErrors] = useState({});
  const [editorKey, setEditorKey] = useState(0);

  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title || '',
        slug: news.slug || '',
        summary: news.summary || '',
        content: news.content || '',
      });
      setEditorKey(prev => prev + 1);
      setSlugEdited(Boolean(news.slug));
      setErrors({});
    } else {
      setFormData({
        title: '',
        slug: '',
        summary: '',
        content: '',
      });
      setEditorKey(prev => prev + 1);
      setSlugEdited(false);
    }
  }, [news]);

  const handleTitleChange = (value) => {
    setFormData(prev => ({
      ...prev,
      title: value,
      slug: !slugEdited ? slugify(value) : prev.slug,
    }));
    if (errors.title || errors.slug) {
      setErrors(prev => ({
        ...prev,
        title: '',
        slug: '',
      }));
    }
  };

  const handleSlugChange = (value) => {
    setFormData(prev => ({
      ...prev,
      slug: slugify(value),
    }));
    setSlugEdited(true);
    if (errors.slug) {
      setErrors(prev => ({
        ...prev,
        slug: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    }
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    }
    if (!formData.summary.trim()) {
      newErrors.summary = 'Resumo é obrigatório';
    }
    if (!formData.content.trim()) {
      newErrors.content = 'Conteúdo é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('slug', formData.slug);
      submitData.append('summary', formData.summary);
      submitData.append('content', formData.content);
      submitData.append('removeCoverImage', imageCropper.isRemoved.toString());
      
      if (imageCropper.file) {
        submitData.append('coverImage', imageCropper.file);
      }
      
      await onSave(submitData);
    }
  };

  return (
    <div className="space-y-6 mb-12">
      {/* Header com botão voltar */}
      <div className="flex items-center gap-2 mb-6">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onCancel}
          disabled={saving}
          className="-ml-3"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <h2 className="text-2xl font-bold ml-2">
          {news ? 'Editar Notícia' : 'Criar Nova Notícia'}
        </h2>
      </div>

      <Separator />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Título */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>
              Preenchimento obrigatório dos dados principais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className={errors.title ? "text-destructive" : ""}>Título *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Digite o título da notícia"
                disabled={saving}
                className={errors.title ? 'border-destructive' : ''}
                data-error={!!errors.title}
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title}</p>
              )}
            </div>

            {/* Slug */}
            <div className="space-y-2">
              <Label htmlFor="slug" className={`text-xs font-bold ${errors.slug ? "text-destructive" : "text-muted-foreground"}`}>
                Slug (URL-Friendly) *
              </Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                placeholder="Ex: minha-noticia-importante"
                disabled={saving}
                className={`font-mono text-sm ${errors.slug ? 'border-destructive' : ''}`}
              />
              {errors.slug && (
                <p className="text-sm text-destructive">{errors.slug}</p>
              )}
            </div>

            {/* Resumo */}
            <div className="space-y-2">
              <Label htmlFor="summary" className={errors.summary ? "text-destructive" : ""}>Resumo *</Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => {
                  setFormData(prev => ({
                    ...prev,
                    summary: e.target.value,
                  }));
                  if (errors.summary) {
                    setErrors(prev => ({
                      ...prev,
                      summary: '',
                    }));
                  }
                }}
                placeholder="Resumo breve da notícia (aparece na lista)"
                rows={3}
                disabled={saving}
                className={errors.summary ? 'border-destructive' : ''}
                data-error={!!errors.summary}
              />
              {errors.summary && (
                <p className="text-sm text-destructive">{errors.summary}</p>
              )}
              <p className="text-xs text-muted-foreground">
                {formData.summary.length}/200 caracteres recomendados
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Imagem */}
        <Card>
          <CardHeader>
            <CardTitle>Imagem de Destaque</CardTitle>
            <CardDescription>
              Upload de imagem em destaque (3:2, máx 5MB)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!imageCropper.previewUrl ? (
              <div className="space-y-2">
                <Label htmlFor="coverImage">Upload de Imagem</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="coverImage"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-muted-foreground/50 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Clique para fazer upload ou arraste uma imagem
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, WebP (máx 5MB)
                      </p>
                    </div>
                    <input
                      id="coverImage"
                      type="file"
                      accept="image/*"
                      onChange={imageCropper.handleFileSelect}
                      disabled={saving}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Preview da Imagem</Label>
                <div className="relative w-64 group rounded-lg overflow-hidden bg-muted border">
                  <div className="aspect-video w-64 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={imageCropper.previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => imageCropper.setIsModalOpen(true)}
                    >
                      <Crop className="h-4 w-4 mr-2" />
                      Recortar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => document.getElementById('cover-upload')?.click()}
                    >
                      Trocar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      onClick={imageCropper.handleRemove}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <input
                  id="cover-upload"
                  type="file"
                  accept="image/*"
                  onChange={imageCropper.handleFileSelect}
                  disabled={saving}
                  className="hidden"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Crop Dialog */}
        <Dialog open={imageCropper.isModalOpen} onOpenChange={imageCropper.setIsModalOpen}>
          <DialogContent className="max-w-3xl">
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
                  aspect={3 / 2}
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

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={imageCropper.handleCancelCrop}
                disabled={imageCropper.loading}
              >
                Voltar
              </Button>
              <Button 
                onClick={imageCropper.handleCropConfirm} 
                disabled={imageCropper.loading}
              >
                {imageCropper.loading ? 'Processando...' : <><Crop className="h-4 w-4 mr-2" /> Confirmar Recorte</>}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Conteúdo */}
        <Card>
          <CardHeader>
            <CardTitle>Conteúdo da Notícia *</CardTitle>
            <CardDescription>
              Escreva o conteúdo em Markdown
            </CardDescription>
          </CardHeader>
          <CardContent className={errors.content ? "border-destructive" : ""} data-error={!!errors.content}>
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <MDXEditor
                  editorKey={editorKey.toString()}
                  value={formData.content}
                  onChange={(markdown) => {
                    setFormData(prev => ({
                      ...prev,
                      content: markdown,
                    }));
                    if (errors.content && markdown.trim()) {
                      setErrors(prev => ({
                        ...prev,
                        content: '',
                      }));
                    }
                  }}
                  placeholder="Escreva o conteúdo da notícia..."
                  readOnly={saving}
                />
              </div>
              {errors.content && (
                <p className="text-sm text-destructive">{errors.content}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Botões de Ação */}
        <Separator />

        <div className="flex justify-between gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={saving}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={saving} size="lg">
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {saving ? 'Salvando...' : 'Salvar Notícia'}
          </Button>
        </div>
      </form>
    </div>
  );
}
