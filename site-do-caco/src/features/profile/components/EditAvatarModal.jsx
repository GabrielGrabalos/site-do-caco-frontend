import { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast.jsx';
import { Upload, Crop, Save } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';

export function EditAvatarModal({ open, onClose, onSave, currentAvatarUrl }) {
  const [step, setStep] = useState(1); // 1: upload, 2: crop, 3: confirm
  const [originalFile, setOriginalFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      // Reseta para step 1 ao abrir
      setStep(1);
      setOriginalFile(null);
      setImageSrc(null);
      setCroppedImage(null);
      setCroppedFile(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    }
  }, [open]);

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

    // Limite de 2MB para avatar
    const maxSize = 2 * 1024 * 1024; // 2MB em bytes
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'Arquivo muito grande',
        description: 'A imagem deve ter no máximo 2 MB.',
      });
      return;
    }

    setOriginalFile(file);

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
      
      // Converte blob para File object
      const fileName = originalFile?.name || 'avatar.jpg';
      const croppedFileObj = new File([croppedImageBlob], fileName, { 
        type: 'image/jpeg' 
      });
      setCroppedFile(croppedFileObj);
      
      // Cria preview em base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setCroppedImage(reader.result);
        setStep(3); // Vai para step de confirmação
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

  const handleSave = () => {
    if (croppedFile) {
      onSave(croppedFile);
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    setOriginalFile(null);
    setImageSrc(null);
    setCroppedImage(null);
    setCroppedFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Alterar Foto de Perfil</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            {/* Preview do avatar atual */}
            {currentAvatarUrl && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Foto atual:</p>
                <img
                  src={currentAvatarUrl}
                  alt="Avatar atual"
                  className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-border"
                />
              </div>
            )}

            {/* Botão de upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Escolha uma nova foto</p>
                  <p className="text-sm text-muted-foreground">
                    Clique para selecionar do seu computador (máx. 2 MB)
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {step === 2 && imageSrc && (
          <div className="space-y-4">
            {/* Cropper */}
            <div className="relative w-full h-[400px] bg-black rounded-lg">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
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
              <Button 
                type="button" 
                onClick={handleCropConfirm}
                className="flex-1"
              >
                <Crop className="h-4 w-4 mr-2" />
                Confirmar Recorte
              </Button>
            </div>
          </div>
        )}

        {step === 3 && croppedImage && (
          <div className="space-y-4">
            {/* Preview da imagem recortada */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img
                  src={croppedImage}
                  alt="Preview"
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary"
                />
              </div>
              
              <p className="text-sm text-muted-foreground">
                Esta será sua nova foto de perfil
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(2)}
                className="flex-1"
              >
                Recortar Novamente
              </Button>
              <Button 
                type="button" 
                onClick={handleSave}
                className="flex-1"
              >
                <Save className="h-4 w-4 mr-2" />
                Confirmar Foto
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
