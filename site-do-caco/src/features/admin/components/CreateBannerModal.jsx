import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { Upload, Crop, Save } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';

export function CreateBannerModal({ open, onClose, onCreate, loading }) {
  const [step, setStep] = useState(1); // 1: upload, 2: crop, 3: form
  const [title, setTitle] = useState('');
  const [targetLink, setTargetLink] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const { toast } = useToast();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Arquivo inválido',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setStep(2);
    };
    reader.readAsDataURL(file);
  };

  const handleCropConfirm = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      
      // Converte blob para base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setCroppedImage(reader.result);
        setStep(3);
      };
      reader.readAsDataURL(croppedImageBlob);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao recortar',
        description: 'Não foi possível processar a imagem.',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!croppedImage) {
      toast({
        variant: 'destructive',
        title: 'Imagem necessária',
        description: 'Por favor, faça upload e recorte uma imagem.',
      });
      return;
    }

    const result = await onCreate({
      title,
      imageUrl: croppedImage, // Base64 da imagem recortada
      targetLink: targetLink || null,
      active: true,
    });

    if (result.success) {
      handleClose();
      toast({
        title: 'Banner criado!',
        description: 'O banner foi adicionado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar banner',
        description: result.error,
      });
    }
  };

  const handleClose = () => {
    setStep(1);
    setTitle('');
    setTargetLink('');
    setImageSrc(null);
    setCroppedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Criar Novo Banner</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-4">
                Clique para fazer upload da imagem do banner
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="banner-upload"
              />
              <label htmlFor="banner-upload">
                <Button type="button" asChild>
                  <span>Escolher Imagem</span>
                </Button>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="relative h-96 bg-black rounded-lg overflow-hidden">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={21 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Zoom</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                Voltar
              </Button>
              <Button type="button" onClick={handleCropConfirm} className="flex-1">
                <Crop className="h-4 w-4 mr-2" />
                Confirmar Recorte
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Preview da imagem recortada */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preview</label>
              <div className="w-full aspect-[21/9] rounded-lg overflow-hidden bg-muted">
                <img
                  src={croppedImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep(2)}
              >
                Recortar Novamente
              </Button>
            </div>

            {/* Formulário */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Título do Banner *
                </label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Bem-vindo ao CACo"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  URL de Redirecionamento
                </label>
                <Input
                  type="text"
                  value={targetLink}
                  onChange={(e) => setTargetLink(e.target.value)}
                  placeholder="Ex: /eventos/123 ou https://..."
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Opcional. Para onde o usuário vai ao clicar no banner.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" disabled={loading} className="flex-1">
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Criando...' : 'Criar Banner'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
