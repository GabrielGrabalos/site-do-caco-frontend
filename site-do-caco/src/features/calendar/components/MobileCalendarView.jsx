import { EventCard } from './EventCard';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

/**
 * Mobile-friendly calendar view
 * Groups events by date in a list format
 */
export function MobileCalendarView({ currentDate, events }) {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
  // Group events by date (group by start date for simplicity in this improved view, 
  // or keeping the logic of showing on every day specific, but usually users want to see when it starts)
  // The user complained about "gambiarra", duplicating events for every day they occur might be cluttered.
  // Standard agenda view: List events by start date. If it spans, the card shows the date range.
  
  // Let's change the grouping strategy to unique events sorted by start date, grouped by Day.
  // If an event is long running, it appears on the start day.
  
  const eventsByDate = {};
  
  sortedEvents.forEach(event => {
    const startDate = new Date(event.startDate);
    // Adjust logic if you want to show it on the current month view properly
    // even if it started last month.
    // The VM returns events for the specific month window.
    
    // Let's stick to "Start Date" grouping.
    const dateKey = startDate.toDateString();
    if (!eventsByDate[dateKey]) {
      eventsByDate[dateKey] = [];
    }
    eventsByDate[dateKey].push(event);
  });

  const sortedDates = Object.keys(eventsByDate).sort((a, b) => new Date(a) - new Date(b));
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Hoje';
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Amanhã';
    }
    
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };
  
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="bg-muted rounded-full p-6 mb-4">
            <Calendar className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Sem eventos</h3>
        <p className="text-muted-foreground max-w-xs">
          Nenhum evento encontrado para este mês.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 pb-10">
      {sortedDates.map(dateStr => {
        const dateEvents = eventsByDate[dateStr];
        const date = new Date(dateStr);
        const isToday = date.toDateString() === new Date().toDateString();
        
        return (
          <div key={dateStr} className="space-y-4">
            {/* Date Header */}
            <div className="flex items-center gap-3">
               <div className={cn(
                  "flex flex-col items-center justify-center w-12 h-14 rounded-lg bg-card border shadow-sm shrink-0",
                  isToday && "bg-primary text-primary-foreground border-primary"
               )}>
                  <span className="text-xs font-medium uppercase opacity-80">
                      {date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                  </span>
                  <span className="text-xl font-bold">
                      {date.getDate()}
                  </span>
               </div>
               
               <div className="flex flex-col">
                  {isToday && (
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Hoje</span>
                  )}
                  <h3 className="text-lg font-semibold capitalize leading-none">
                      {date.toLocaleDateString('pt-BR', { weekday: 'long' })}
                  </h3>
               </div>
            </div>
            
            {/* Events Grid for this date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-16">
              {dateEvents.map(event => (
                <div key={event.id} className="w-full">
                    <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
