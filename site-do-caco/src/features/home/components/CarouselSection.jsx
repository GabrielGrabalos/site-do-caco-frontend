import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CarouselSection({
  items = [],
  renderItem,
  onEndReached,
  title,
  subtitle,
  icon,
  loading = false,
  error = null,
  onRetry,
  itemWidth = { mobile: '85%', tablet: '48%', desktop: '32%' },
  skeletonCount = 3,
}) {
  const carouselRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const node = carouselRef.current;
      if (node) {
        setHasOverflow(node.scrollWidth > node.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    // Verifica novamente após renderizar os itens
    const timer = setTimeout(checkOverflow, 0);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timer);
    };
  }, [items]);

  if (items.length === 0 && !loading && !error) return null;

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;

    const amount = Math.max(220, Math.round(node.clientWidth * 0.9));
    node.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const node = carouselRef.current;
    if (!node) return;

    // Detecta quando chegou próximo ao final do scroll
    const scrollThreshold = 200; // pixels do final
    const isNearEnd =
      node.scrollLeft + node.clientWidth >=
      node.scrollWidth - scrollThreshold;

    if (isNearEnd && !loading && onEndReached) {
      onEndReached();
    }
  };

  return (
    <div className="-mx-6 space-y-4 sm:rounded-2xl sm:border sm:bg-card/40 sm:p-6 sm:mx-0">
      <div className="flex flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-0">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold">
            {icon}
            {title}
          </h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-2">
          {hasOverflow && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCarousel('prev')}
                aria-label={`Rolar carrossel para a esquerda em ${title}`}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCarousel('next')}
                aria-label={`Rolar carrossel para a direita em ${title}`}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>

      {loading && items.length === 0 && (
        <div className="flex gap-4 overflow-x-hidden px-6 sm:px-0">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Card
              key={`${title}-skeleton-${index}`}
              className={`min-w-[85%] overflow-hidden sm:min-w-[48%] lg:min-w-[32%]`}
            >
              <div className="h-40 animate-pulse bg-muted" />
              <CardContent className="space-y-3 p-4">
                <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                <div className="h-5 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {error && (
        <Card className="mx-6 sm:mx-0">
          <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{error}</p>
            {onRetry && (
              <Button variant="outline" size="sm" onClick={onRetry}>
                <RefreshCcw className="h-4 w-4" />
                Tentar novamente
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {!loading && !error && items.length === 0 && (
        <Card className="mx-6 sm:mx-0">
          <CardContent className="p-6 text-sm text-muted-foreground">
            Nenhum item encontrado nesta seção.
          </CardContent>
        </Card>
      )}

      {!error && items.length > 0 && (
        <div className="space-y-3">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex snap-x gap-4 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:thin] px-6 sm:px-0 scroll-pl-6 sm:scroll-pl-0"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={`min-w-[${itemWidth.mobile}] snap-start sm:min-w-[${itemWidth.tablet}] lg:min-w-[${itemWidth.desktop}]`}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
