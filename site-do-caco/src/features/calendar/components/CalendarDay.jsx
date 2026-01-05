import { cn } from '@/lib/utils';

export function CalendarDay({ date, events, isToday, onEventClick }) {
  if (!date) {
    return <div className="min-h-[120px] bg-muted/30 border-r border-b" />;
  }

  return (
    <div
      className={cn(
        'min-h-[120px] border-r border-b last:border-r-0 p-2 hover:bg-muted/30 transition-colors',
        isToday && 'bg-primary/5'
      )}
    >
      <div
        className={cn(
          'text-sm font-medium mb-1',
          isToday && 'text-primary font-bold'
        )}
      >
        {date}
      </div>
      <div className="space-y-1">
        {events.slice(0, 3).map((event) => (
          <button
            key={event.id}
            onClick={() => onEventClick(event)}
            className={cn(
              'w-full text-left text-xs px-2 py-1 rounded truncate transition-colors',
              event.type === 'MAJOR'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
            )}
          >
            {event.title}
          </button>
        ))}
        {events.length > 3 && (
          <div className="text-xs text-muted-foreground px-2">
            +{events.length - 3} mais
          </div>
        )}
      </div>
    </div>
  );
}
