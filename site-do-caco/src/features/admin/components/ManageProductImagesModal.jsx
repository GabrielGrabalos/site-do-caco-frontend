import { useState, useRef, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Upload, X, GripVertical, ImagePlus, Crop, Loader2, AlertCircle } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

function SortableImageItem({ image, onDelete, isFirst }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group border-2 rounded-lg overflow-hidden bg-card hover:border-primary transition-colors"
    >
      <div className="aspect-square">
        <img
          src={image.url}
          alt={`Imagem ${image.order + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay com ações */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <button
            {...attributes}
            {...listeners}
            className="bg-primary text-primary-foreground p-3 rounded-full cursor-move hover:scale-110 transition-transform shadow-lg"
            title="Arrastar para reordenar"
          >
            <GripVertical className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(image.id)}
            className="bg-destructive text-destructive-foreground p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            title="Excluir imagem"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Badge de ordem */}
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-sm font-semibold px-2.5 py-1 rounded-full shadow-md">
          #{image.order + 1}
        </div>
        
        {/* Badge de capa */}
        {isFirst && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            CAPA
          </div>
        )}
      </div>
    </div>
  );
}

export function ManageProductImagesModal({ 
  open, 
  onClose, 
  product,
  onGetImages,
  onAddImage,
  onDeleteImage,
  onReorderImages,
  loading 
}) {
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [deleteImageId, setDeleteImageId] = useState(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [pendingFiles, setPendingFiles] = useState([]);
  const [croppedFiles, setCroppedFiles] = useState([]);
  const [croppedPreviews, setCroppedPreviews] = useState([]);
  const [uploadStatus, setUploadStatus] = useState([]);
  const [currentCropIndex, setCurrentCropIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const fileInputRef = useRef(null);
  const loadedProductIdRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Busca as imagens do produto via ViewModel quando o modal abre
  useEffect(() => {
    if (!open) {
      // Limpa as imagens quando o modal fecha
      setImages([]);
      setLoadError(null);
      loadedProductIdRef.current = null;
      return;
    }

    // Só carrega se for um produto diferente ou se ainda não carregou
    if (product?.id && product.id !== loadedProductIdRef.current) {
      const loadImages = async () => {
        if (onGetImages) {
          try {
            setIsLoadingImages(true);
            setLoadError(null);
            const result = await onGetImages(product.id);
            
            if (result.success && result.data) {
              // Mapeia a resposta do backend para o formato esperado
              const formattedImages = result.data.map((img) => ({
                id: img.id,
                url: img.imageUrl,
                order: img.displayOrder
              }));
              
              // Ordena as imagens por displayOrder
              formattedImages.sort((a, b) => a.order - b.order);
              
              setImages(formattedImages);
              loadedProductIdRef.current = product.id;
            } else {
              setLoadError(result.error || 'Erro ao carregar imagens');
              setImages([]);
            }
          } catch (error) {
            console.error('Erro ao carregar imagens:', error);
            setLoadError('Erro inesperado ao carregar imagens');
            setImages([]);
          } finally {
            setIsLoadingImages(false);
          }
        }
      };

      loadImages();
    }
  }, [open, product?.id, onGetImages]);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Valida arquivos
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) return false;
      if (file.size > 10 * 1024 * 1024) return false;
      return true;
    });

    if (validFiles.length === 0) return;

    // Inicia processo de recorte
    setPendingFiles(validFiles);
    setCroppedFiles([]);
    setCurrentCropIndex(0);
    
    // Carrega primeira imagem para recortar
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setCropModalOpen(true);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    };
    reader.readAsDataURL(validFiles[0]);
  };

  const handleCropConfirm = async () => {
    if (isCropping) return;
    
    setIsCropping(true);
    
    try {
      // Inicia o recorte em background
      const cropPromise = getCroppedImg(imageSrc, croppedAreaPixels);
      
      // Se não é a última imagem, já carrega a próxima
      const isLast = currentCropIndex >= pendingFiles.length - 1;
      
      if (!isLast) {
        const nextIndex = currentCropIndex + 1;
        setCurrentCropIndex(nextIndex);
        
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
          setCrop({ x: 0, y: 0 });
          setZoom(1);
        };
        reader.readAsDataURL(pendingFiles[nextIndex]);
      }
      
      // Aguarda o recorte terminar
      const croppedBlob = await cropPromise;
      const originalFile = pendingFiles[currentCropIndex];
      const croppedFile = new File([croppedBlob], originalFile.name, { type: 'image/jpeg' });

      // Gera preview
      const previewUrl = URL.createObjectURL(croppedBlob);
      
      // Armazena arquivo recortado e preview
      const newCroppedFiles = [...croppedFiles, croppedFile];
      const newPreviews = [...croppedPreviews, { url: previewUrl, name: originalFile.name }];
      setCroppedFiles(newCroppedFiles);
      setCroppedPreviews(newPreviews);

      // Se era a última, finaliza recortes e inicia uploads
      if (isLast) {
        setCropModalOpen(false);
        setImageSrc(null);
        await uploadAllCroppedImages(newCroppedFiles, newPreviews);
      }
    } catch (err) {
      console.error('Erro ao recortar imagem:', err);
    } finally {
      setIsCropping(false);
    }
  };

  const uploadAllCroppedImages = async (filesToUpload, previews) => {
    setIsUploading(true);
    
    // Inicializa status de upload
    const initialStatus = previews.map((preview, index) => ({
      preview: preview.url,
      name: preview.name,
      status: 'pending',
      progress: 0
    }));
    setUploadStatus(initialStatus);
    
    for (let i = 0; i < filesToUpload.length; i++) {
      // Atualiza status para uploading
      setUploadStatus(prev => prev.map((item, idx) => 
        idx === i ? { ...item, status: 'uploading', progress: 50 } : item
      ));
      
      const result = await onAddImage(product.id, filesToUpload[i]);
      
      // Atualiza status baseado no resultado
      if (result.success && result.data) {
        setUploadStatus(prev => prev.map((item, idx) => 
          idx === i ? { ...item, status: 'success', progress: 100 } : item
        ));
        
        // Adiciona a imagem com os dados reais do backend
        const newImage = {
          id: result.data.id,
          url: result.data.imageUrl,
          order: result.data.displayOrder !== undefined ? result.data.displayOrder : prev.length
        };
        
        setImages(prev => [...prev, newImage]);
      } else {
        setUploadStatus(prev => prev.map((item, idx) => 
          idx === i ? { ...item, status: 'error', progress: 0 } : item
        ));
      }
    }

    // Aguarda 1 segundo para mostrar todos como success
    setTimeout(() => {
      // Limpa estados
      setIsUploading(false);
      setUploadProgress(null);
      setPendingFiles([]);
      setCroppedFiles([]);
      setCroppedPreviews([]);
      setUploadStatus([]);
      setCurrentCropIndex(0);
      
      // Libera URLs de preview
      previews.forEach(preview => URL.revokeObjectURL(preview.url));
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1500);
  };

  const handleCropCancel = () => {
    setCropModalOpen(false);
    setPendingFiles([]);
    setCroppedFiles([]);
    setCroppedPreviews([]);
    setCurrentCropIndex(0);
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteImage = async () => {
    if (!deleteImageId) return;
    
    const imageToDelete = images.find(img => img.id === deleteImageId);
    const result = await onDeleteImage(product.id, deleteImageId, imageToDelete?.url);
    if (result.success) {
      setImages(prev => prev.filter(img => img.id !== deleteImageId));
    }
    setDeleteImageId(null);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = images.findIndex(img => img.id === active.id);
      const newIndex = images.findIndex(img => img.id === over.id);
      
      const newImages = arrayMove(images, oldIndex, newIndex).map((img, index) => ({
        ...img,
        order: index
      }));
      
      setImages(newImages);
      
      // Salva nova ordem no backend e atualiza o estado do produto
      const imageIds = newImages.map(img => String(img.id));
      
      const result = await onReorderImages(product.id, imageIds, newImages);
      
      // Se der erro, reverte a ordenação local
      if (!result.success) {
        setImages(images);
      }
    }
  };

  if (!product) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <ImagePlus className="h-5 w-5" />
              Gerenciar Imagens - {product.name}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-2">
              {images.length === 0 
                ? 'Adicione imagens para o produto'
                : `${images.length} ${images.length === 1 ? 'imagem' : 'imagens'} • A primeira imagem é a capa do produto`
              }
            </p>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Estado de Loading */}
            {isLoadingImages ? (
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-muted/20">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <p className="font-medium text-lg">Carregando imagens...</p>
                </div>
              </div>
            ) : loadError ? (
              /* Estado de Erro */
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-destructive/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-destructive/10 p-4">
                    <AlertCircle className="h-12 w-12 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Erro ao carregar imagens</p>
                    <p className="text-sm text-muted-foreground">{loadError}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setLoadError(null);
                      setIsLoadingImages(true);
                      onGetImages(product.id).then(result => {
                        if (result.success && result.data) {
                          const formattedImages = result.data.map((img) => ({
                            id: img.id,
                            url: img.imageUrl,
                            order: img.displayOrder
                          }));
                          formattedImages.sort((a, b) => a.order - b.order);
                          setImages(formattedImages);
                        } else {
                          setLoadError(result.error || 'Erro ao carregar imagens');
                        }
                        setIsLoadingImages(false);
                      });
                    }}
                  >
                    Tentar Novamente
                  </Button>
                </div>
              </div>
            ) : images.length === 0 ? (
              /* Estado Vazio */
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-muted/20">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <ImagePlus className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Nenhuma imagem adicionada</p>
                    <p className="text-sm text-muted-foreground">
                      Adicione fotos do produto para melhorar a apresentação
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={loading || uploadProgress || isUploading}
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || uploadProgress || isUploading}
                    className="mt-2"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {uploadProgress || 'Selecionar Imagens'}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={images.map(img => img.id)}
                    strategy={rectSortingStrategy}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <SortableImageItem
                          key={image.id}
                          image={image}
                          onDelete={setDeleteImageId}
                          isFirst={index === 0}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>

      {/* Crop Modal */}
      <Dialog open={cropModalOpen} onOpenChange={handleCropCancel}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crop className="h-5 w-5" />
              Recortar Imagem {currentCropIndex + 1} de {pendingFiles.length}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Recorte todas as imagens. O upload será feito após finalizar os recortes.
            </p>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Cropper */}
            <div className="relative w-full h-[400px] bg-black rounded-lg overflow-hidden">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* Zoom Control */}
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

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleCropCancel}
                className="flex-1"
              >
                Cancelar Tudo
              </Button>
              <Button
                type="button"
                onClick={handleCropConfirm}
                disabled={loading || isCropping}
                className="flex-1"
              >
                {isCropping ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Crop className="h-4 w-4 mr-2" />
                    {currentCropIndex < pendingFiles.length - 1 ? 'Próxima Imagem' : 'Finalizar e Enviar'}
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

                {/* Botão para adicionar mais */}
                <div className="border-2 border-dashed rounded-lg p-6 text-center bg-muted/10 hover:bg-muted/20 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={loading || uploadProgress || isUploading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || uploadProgress || isUploading}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {uploadProgress || 'Adicionar Mais Imagens'}
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose} disabled={loading || isUploading}>
              {isUploading ? 'Enviando...' : 'Fechar'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Progress Modal */}
      <Dialog open={isUploading} onOpenChange={() => {}}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 animate-pulse" />
              Enviando Imagens
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              {uploadStatus.filter(s => s.status === 'success').length} de {uploadStatus.length} imagens enviadas
            </p>
          </DialogHeader>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {uploadStatus.map((item, index) => (
              <div key={index} className="relative border rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay de status */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  item.status === 'pending' ? 'bg-black/20' :
                  item.status === 'uploading' ? 'bg-primary/20' :
                  item.status === 'success' ? 'bg-green-600/20' :
                  'bg-red-600/20'
                }`}>
                  {item.status === 'pending' && (
                    <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                      Aguardando...
                    </div>
                  )}
                  {item.status === 'uploading' && (
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  )}
                  {item.status === 'success' && (
                    <div className="bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Enviada
                    </div>
                  )}
                  {item.status === 'error' && (
                    <div className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-full">
                      Erro
                    </div>
                  )}
                </div>
                
                {/* Nome do arquivo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs truncate">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteImageId} onOpenChange={() => setDeleteImageId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta imagem? Esta ação não pode ser desfeita.
              {images.findIndex(img => img.id === deleteImageId) === 0 && (
                <span className="block mt-2 font-semibold text-amber-600">
                  ⚠️ Esta é a imagem de capa do produto.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteImage} disabled={loading} className="bg-destructive hover:bg-destructive/90">
              Excluir Imagem
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
