import { Link } from 'react-router-dom';
import { CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const TYPE_LABEL = {
  CACO: 'CACO',
  IC: 'IC',
  FERIADO: 'Feriado',
};

const STATUS_LABEL = {
  SCHEDULED: 'Programado',
  HAPPENING: 'Acontecendo',
  ENDED: 'Encerrado',
};

const STATUS_STYLE = {
  SCHEDULED: 'bg-blue-600 text-white border-blue-600',
  HAPPENING: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  ENDED: 'bg-muted text-muted-foreground border-border',
};

const IMPORTANCE_LABEL = {
  MAJOR: 'Destaque',
  MINOR: 'Ordinário',
};

function formatDay(date) {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatTime(date) {
  return new Date(date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getDateRangeText(startDate, endDate) {
  if (!startDate) return '-';
  if (!endDate) return formatDay(startDate);

  const sameDay = new Date(startDate).toDateString() === new Date(endDate).toDateString();
  if (sameDay) {
    return `${formatDay(startDate)} • ${formatTime(startDate)} - ${formatTime(endDate)}`;
  }

  return `${formatDay(startDate)} ${formatTime(startDate)} → ${formatDay(endDate)} ${formatTime(endDate)}`;
}

export function EventSummaryCard({ event }) {
  const isMajor = event.importance === 'MAJOR';

  return (
    <Link to={`/eventos/${event.slug}`} className="group block h-full">
      <Card
        className={cn(
          'h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
          isMajor
            ? 'border-primary/35 bg-gradient-to-br from-primary/10 to-card shadow-md hover:shadow-primary/20'
            : 'border-border/80 bg-card/90 hover:border-primary/30 hover:shadow-md'
        )}
      >
        <CardContent className="p-0">
          <div className="relative">
            {event.coverImage ? (
              <img
                src={event.coverImage}
                alt={`Capa do evento ${event.title}`}
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]',
                  isMajor ? 'h-44 sm:h-48' : 'h-36 sm:h-40'
                )}
              />
            ) : (
              <div
                className={cn(
                  'w-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent',
                  isMajor ? 'h-44 sm:h-48' : 'h-36 sm:h-40'
                )}
              />
            )}

            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              {isMajor && (
                <Badge className="bg-primary text-primary-foreground border-transparent">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  {IMPORTANCE_LABEL[event.importance] || 'Destaque'}
                </Badge>
              )}

              <Badge
                variant="outline"
                className={cn('bg-background/85 backdrop-blur-sm', STATUS_STYLE[event.status])}
              >
                {STATUS_LABEL[event.status] || 'Evento'}
              </Badge>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="font-medium">
                {TYPE_LABEL[event.type] || 'Evento'}
              </Badge>
              {!isMajor && (
                <span className="text-xs text-muted-foreground">
                  {IMPORTANCE_LABEL[event.importance] || 'Ordinário'}
                </span>
              )}
            </div>

            <h3 className={cn('line-clamp-2 leading-tight', isMajor ? 'text-lg font-bold' : 'text-base font-semibold')}>
              {event.title}
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                <span className="line-clamp-2">{getDateRangeText(event.startDate, event.endDate)}</span>
              </div>

              {event.location && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>
              )}

              {!event.endDate && event.startDate && (
                <div className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{formatTime(event.startDate)}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
