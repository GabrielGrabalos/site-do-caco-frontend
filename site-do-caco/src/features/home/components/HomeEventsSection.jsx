import { useRef } from 'react';
import { CalendarClock, ChevronLeft, ChevronRight, History, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EventSummaryCard } from './EventSummaryCard';

function EventRow({
  title,
  subtitle,
  icon,
  pageData,
  loading,
  error,
  onChangePage,
  onRetry,
}) {
  const carouselRef = useRef(null);
  const events = pageData?.content || [];
  const currentPage = (pageData?.number || 0) + 1;
  const totalPages = pageData?.totalPages || 0;
  const hasMultiplePages = totalPages > 1;

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;

    const amount = Math.max(220, Math.round(node.clientWidth * 0.9));
    node.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-4 rounded-2xl border bg-card/40 p-4 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold">
            {icon}
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {hasMultiplePages && (
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onChangePage((pageData?.number || 0) - 1)}
              disabled={loading || currentPage <= 1}
              aria-label={`Página anterior de ${title}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <span className="min-w-24 text-center text-sm text-muted-foreground">
              Página {currentPage} de {totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => onChangePage((pageData?.number || 0) + 1)}
              disabled={loading || currentPage >= totalPages}
              aria-label={`Próxima página de ${title}`}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {loading && (
        <div className="flex gap-4 overflow-x-hidden">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={`${title}-skeleton-${index}`} className="min-w-[85%] overflow-hidden sm:min-w-[48%] lg:min-w-[32%]">
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

      {!loading && error && (
        <Card>
          <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{error}</p>
            <Button variant="outline" size="sm" onClick={onRetry}>
              <RefreshCcw className="h-4 w-4" />
              Tentar novamente
            </Button>
          </CardContent>
        </Card>
      )}

      {!loading && !error && events.length === 0 && (
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            Nenhum evento encontrado nesta seção.
          </CardContent>
        </Card>
      )}

      {!loading && !error && events.length > 0 && (
        <div className="space-y-3">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:thin]"
          >
            {events.map((event) => (
              <div key={event.id} className="min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[32%]">
                <EventSummaryCard event={event} />
              </div>
            ))}
          </div>

          {events.length > 1 && (
            <div className="flex items-center justify-end gap-2">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function HomeEventsSection({
  upcomingPage,
  pastPage,
  loading,
  error,
  onChangeUpcomingPage,
  onChangePastPage,
  onRetryUpcoming,
  onRetryPast,
}) {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Eventos</h2>
        <p className="text-sm text-muted-foreground">
          Fique por dentro do que vai acontecer e relembre os eventos que já passaram.
        </p>
      </div>

      <div className="space-y-5">
        <EventRow
          title="Próximos eventos"
          subtitle="Novidades e eventos em breve"
          icon={<CalendarClock className="h-5 w-5 text-primary" />}
          pageData={upcomingPage}
          loading={loading.upcoming}
          error={error.upcoming}
          onChangePage={onChangeUpcomingPage}
          onRetry={onRetryUpcoming}
        />

        <EventRow
          title="Eventos anteriores"
          subtitle="Confira os eventos já encerrados"
          icon={<History className="h-5 w-5 text-primary" />}
          pageData={pastPage}
          loading={loading.past}
          error={error.past}
          onChangePage={onChangePastPage}
          onRetry={onRetryPast}
        />
      </div>
    </section>
  );
}
