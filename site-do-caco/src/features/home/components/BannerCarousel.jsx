import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BannerCarousel({ banners = [] }) {
  const [current, setCurrent] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    if (banners.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length, lastInteraction]); // Reseta timer quando lastInteraction muda

  if (banners.length === 0) {
    return (
      <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <h3 className="text-2xl font-bold mb-2">Bem-vindo ao CACo</h3>
          <p className="text-sm">Os banners aparecerão aqui em breve</p>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    setLastInteraction(Date.now()); // Reseta timer
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    setLastInteraction(Date.now()); // Reseta timer
  };

  const goToIndex = (index) => {
    setCurrent(index);
    setLastInteraction(Date.now()); // Reseta timer
  };

  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-muted">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{banner.title}</h2>
            <p className="text-lg opacity-90">{banner.description}</p>
            {banner.linkUrl && (
              <Button
                variant="secondary"
                className="mt-4"
                onClick={() => window.location.href = banner.linkUrl}
              >
                Saiba mais
              </Button>
            )}
          </div>
        </div>
      ))}

      {banners.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-white w-8' : 'bg-white/50'
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
