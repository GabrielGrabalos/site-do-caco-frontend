import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BannerCarousel({ banners = [] }) {
  const [current, setCurrent] = useState(0);
  const [isManualInteraction, setIsManualInteraction] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showTitle, setShowTitle] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navigate = useNavigate();

  // Mínima distância de swipe (em px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (banners.length === 0) return;

    // Se foi interação manual, espera 8 segundos; senão 5 segundos
    const interval = isManualInteraction ? 8000 : 5000;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
      setIsManualInteraction(false); // Após mudar, volta ao tempo normal
    }, interval);

    return () => clearInterval(timer);
  }, [banners.length, current, isManualInteraction]); // Reseta quando current ou isManualInteraction muda

  const handleBannerClick = (targetLink) => {
    if (!targetLink) return;

    // Verifica se é link externo (começa com http:// ou https://)
    const isExternal = /^https?:\/\//i.test(targetLink);

    if (isExternal) {
      // Link externo - abre em nova aba
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    } else {
      // Link interno - normaliza para começar com /
      const internalPath = targetLink.startsWith('/') ? targetLink : `/${targetLink}`;
      navigate(internalPath);
    }
  };

  if (banners.length === 0) {
    return (
      <div className="relative w-full min-h-[200px] md:min-h-[300px] aspect-[21/9] rounded-none md:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <h3 className="text-2xl font-bold mb-2">Bem-vindo ao CACo</h3>
          <p className="text-sm">Os banners aparecerão aqui em breve</p>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const goToIndex = (index) => {
    setCurrent(index);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 800); // Mostra título após 800ms
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setShowTitle(false);
  };

  return (
    <div 
      className="relative w-full min-h-[200px] md:min-h-[300px] aspect-[21/9] rounded-none md:rounded-3xl overflow-hidden bg-muted touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${banner.targetLink ? 'cursor-pointer' : ''}`}
          onClick={() => banner.targetLink && handleBannerClick(banner.targetLink)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          {/* Gradiente e título aparecem apenas com hover prolongado */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white transition-opacity duration-300 ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{banner.title}</h2>
            {banner.description && (
              <p className="text-sm sm:text-lg opacity-90">{banner.description}</p>
            )}
          </div>
        </div>
      ))}

      {banners.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === current ? 'bg-white w-6' : 'bg-white/50 w-1.5'
                }`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
