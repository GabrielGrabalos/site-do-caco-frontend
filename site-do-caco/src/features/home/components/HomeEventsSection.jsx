import { CalendarClock, History } from 'lucide-react';
import { EventSummaryCard } from './EventSummaryCard';
import { CarouselSection } from './CarouselSection';

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
  const upcomingEvents = upcomingPage?.content || [];
  const pastEvents = pastPage?.content || [];

  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Eventos</h2>
        <p className="text-sm text-muted-foreground">
          Fique por dentro do que vai acontecer e relembre os eventos que já passaram.
        </p>
      </div>

      <div className="space-y-5">
        <CarouselSection
          items={upcomingEvents}
          renderItem={(event) => <EventSummaryCard event={event} />}
          onEndReached={onChangeUpcomingPage}
          title="Próximos eventos"
          subtitle="Novidades e eventos em breve"
          icon={<CalendarClock className="h-5 w-5 text-primary" />}
          loading={loading.upcoming}
          error={error.upcoming}
          onRetry={onRetryUpcoming}
        />

        <CarouselSection
          items={pastEvents}
          renderItem={(event) => <EventSummaryCard event={event} />}
          onEndReached={onChangePastPage}
          title="Eventos anteriores"
          subtitle="Confira os eventos já encerrados"
          icon={<History className="h-5 w-5 text-primary" />}
          loading={loading.past}
          error={error.past}
          onRetry={onRetryPast}
        />
      </div>
    </section>
  );
}
