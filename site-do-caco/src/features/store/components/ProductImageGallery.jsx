import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductImageGallery({ 
  images, 
  productName, 
  currentIndex, 
  onNext, 
  onPrevious, 
  onSelectImage 
}) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);
  const touchDistance = useRef(0);
  const containerRef = useRef(null);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages 
    ? images[currentIndex]
    : null;

  // Função para limitar o movimento da imagem dentro dos bounds
  const constrainPosition = (position, scale, containerSize, imageSize) => {
    if (scale <= 1) return { x: 0, y: 0 };
    
    const scaledImageSize = imageSize * scale;
    const maxOffset = (scaledImageSize - containerSize) / 2;
    
    return {
      x: Math.max(Math.min(position.x, maxOffset), -maxOffset),
      y: Math.max(Math.min(position.y, maxOffset), -maxOffset)
    };
  };

  // Hover zoom para desktop
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Mobile zoom com pinça
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistance.current = distance;
    } else if (e.touches.length === 1 && zoomScale > 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - zoomPosition.x, 
        y: e.touches[0].clientY - zoomPosition.y 
      });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = distance / touchDistance.current;
      setZoomScale((prev) => Math.min(Math.max(prev * scale, 1), 4));
      touchDistance.current = distance;
    } else if (isDragging && e.touches.length === 1 && zoomScale > 1) {
      e.preventDefault();
      const newPosition = {
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      };
      
      // Limitar o movimento dentro dos bounds
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const constrainedPos = constrainPosition(
          newPosition,
          zoomScale,
          Math.min(rect.width, rect.height),
          Math.min(rect.width, rect.height)
        );
        setZoomPosition(constrainedPos);
      } else {
        setZoomPosition(newPosition);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Aplicar restrições quando o zoom muda
  useEffect(() => {
    if (containerRef.current && zoomScale > 1) {
      const rect = containerRef.current.getBoundingClientRect();
      const constrainedPos = constrainPosition(
        zoomPosition,
        zoomScale,
        Math.min(rect.width, rect.height),
        Math.min(rect.width, rect.height)
      );
      
      // Só atualizar se a posição mudou
      if (constrainedPos.x !== zoomPosition.x || constrainedPos.y !== zoomPosition.y) {
        setZoomPosition(constrainedPos);
      }
    } else if (zoomScale === 1) {
      // Resetar posição quando zoom volta para 1
      setZoomPosition({ x: 0, y: 0 });
    }
  }, [zoomScale]);

  const handleOpenZoom = () => {
    setIsZoomOpen(true);
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleCloseZoom = () => {
    setIsZoomOpen(false);
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  if (!hasImages) {
    return (
      <Card className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-gray-400">Sem imagens disponíveis</span>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Imagem Principal */}
        <div className="relative aspect-square overflow-hidden rounded-xl border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg">
          {/* Desktop: Zoom on hover */}
          <div 
            className="hidden md:block w-full h-full overflow-hidden group cursor-crosshair"
            onMouseMove={handleMouseMove}
            ref={imageRef}
          >
            <img
              src={currentImage}
              alt={`${productName} - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-transform group-hover:scale-150"
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
              }}
            />
          </div>
          
          {/* Mobile: Click para abrir popup */}
          <button
            onClick={handleOpenZoom}
            className="md:hidden w-full h-full"
          >
            <img
              src={currentImage}
              alt={`${productName} - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </button>

          {/* Navegação (apenas se houver mais de uma imagem) */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg"
                onClick={onPrevious}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg"
                onClick={onNext}
              >
                <ChevronRight size={20} />
              </Button>

              {/* Indicador de posição */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onSelectImage(index)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105",
                  currentIndex === index
                    ? "border-primary ring-2 ring-primary/30 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                )}
              >
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Zoom (apenas mobile) */}
      <DialogPrimitive.Root open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay 
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
            onClick={() => setIsZoomOpen(false)}
          />
          <DialogPrimitive.Content 
            className="fixed left-0 top-0 z-50 w-full h-[100dvh] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onEscapeKeyDown={() => setIsZoomOpen(false)}
            onPointerDownOutside={() => setIsZoomOpen(false)}
          >
            <div className="relative w-full h-full">
              {/* Botão Fechar */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseZoom}
                className="absolute top-4 right-4 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
              >
                <X size={24} />
              </Button>

              {/* Navegação */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
                    onClick={onPrevious}
                  >
                    <ChevronLeft size={28} />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
                    onClick={onNext}
                  >
                    <ChevronRight size={28} />
                  </Button>
                </>
              )}

              {/* Imagem com pinch zoom */}
              <div
                ref={containerRef}
                className="w-full h-full flex items-center justify-center overflow-hidden touch-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={currentImage}
                  alt={`${productName} - Imagem ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain select-none"
                  style={{
                    transform: `scale(${zoomScale}) translate(${zoomPosition.x / zoomScale}px, ${zoomPosition.y / zoomScale}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                    cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  draggable={false}
                />
              </div>

              {/* Indicador */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
