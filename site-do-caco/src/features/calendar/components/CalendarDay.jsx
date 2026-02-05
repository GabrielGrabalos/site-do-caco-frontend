import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Clock, ChevronDown } from 'lucide-react';

export function CalendarDay({ date, events, isToday, onEventClick, topSpacerHeight = 0 }) {
  const scrollRef = useRef(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const hasContentBelow = scrollHeight > clientHeight + scrollTop + 5;
      setShowIndicator(hasContentBelow);
    }
  };

  useEffect(() => {
    checkScroll();
  }, [events]);

  if (!date) {
    return <div className="min-h-[160px] bg-muted/10 border-r border-b last:border-r-0" />;
  }

  // Prioritize events: Happening -> With Image -> Others
  const sortedEvents = [...events].sort((a, b) => {
    if (a.status === 'HAPPENING' && b.status !== 'HAPPENING') return -1;
    if (b.status === 'HAPPENING' && a.status !== 'HAPPENING') return 1;
    if (a.coverImage && !b.coverImage) return -1;
    if (!a.coverImage && b.coverImage) return 1;
    return new Date(a.startDate) - new Date(b.startDate);
  });

  const getEventStyle = (event) => {
    if (event.status === 'HAPPENING') {
        return 'bg-green-600 hover:bg-green-700 text-white shadow-md animate-pulse border-green-700';
    }
    if (event.status === 'ENDED') {
        return 'bg-muted text-muted-foreground hover:bg-muted/80 line-through opacity-70';
    }
    if (event.coverImage) {
        return 'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm border-primary/20';
    }
    
    switch (event.type) {
      case 'ONLINE':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
      case 'HYBRID':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800';
      default: 
        return 'bg-primary/10 text-primary hover:bg-primary/20 border-primary/20';
    }
  };

  const formatTimeRange = (startDate, endDate) => {
    const start = new Date(startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    if (!endDate) return start;
    const end = new Date(endDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${start} - ${end}`;
  };

  return (
    <div
      className={cn(
        'h-[180px] border-r border-b last:border-r-0 p-1.5 hover:bg-muted/5 transition-colors relative group flex flex-col gap-1',
        isToday && 'bg-accent/5 ring-2 ring-primary ring-inset z-10'
      )}
    >
      {/* Header do Dia */}
      <div className="flex justify-between items-start mb-1 h-8 shrink-0">
        <span
          className={cn(
            'text-[15px] font-medium w-8 h-8 flex items-center justify-center rounded-full transition-all',
            isToday 
              ? 'bg-primary text-primary-foreground font-bold shadow-sm scale-110' 
              : 'text-muted-foreground group-hover:bg-muted group-hover:text-foreground'
          )}
        >
          {date}
        </span>
        
        {events.length > 0 && <span className="text-xs text-muted-foreground font-medium pt-1 pr-1">{events.length}</span>}
      </div>

      {/* Lista de eventos scrollable */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-1 customize-scrollbar pb-1"
      >
        {topSpacerHeight > 0 && (
          <div style={{ height: topSpacerHeight }} className="w-full shrink-0 transition-all duration-300 pointer-events-none" />
        )}

        {sortedEvents.map((event) => {
          const hasImage = !!event.coverImage;
          
          return (
            <button
              key={event.id}
              onClick={(e) => { e.stopPropagation(); onEventClick(event); }}
              className={cn(
                'w-full text-left rounded-md transition-all group/event relative overflow-hidden shrink-0',
                hasImage ? 'h-[72px] p-0 border-0' : 'px-2.5 py-2 text-xs border border-transparent',
                getEventStyle(event)
              )}
              title={event.title}
            >
              {hasImage ? (
                <>
                  <div className="absolute inset-0">
                    <img 
                      src={event.coverImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-90 group-hover/event:opacity-100 group-hover/event:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white flex flex-col justify-end h-full">
                     <div className="text-sm font-bold leading-tight line-clamp-2 shadow-sm mb-0.5">{event.title}</div>
                     <div className="text-xs opacity-90 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTimeRange(event.startDate, event.endDate)}
                     </div>
                  </div>
                  
                  {event.status === 'HAPPENING' && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white animate-pulse" />
                  )}
                </>
              ) : (
                <div className="flex flex-col gap-0.5">
                   <div className="flex items-center gap-1.5">
                        {event.status === 'HAPPENING' && (
                                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-ping" />
                        )}
                        <span className="truncate font-medium leading-tight text-[13px]">{event.title}</span>
                   </div>
                   <div className="text-[11px] opacity-80 flex items-center gap-1">
                        {formatTimeRange(event.startDate, event.endDate)}
                   </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showIndicator && (
         <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/95 to-transparent pointer-events-none flex items-end justify-center rounded-b-sm z-20 pb-1 duration-300 animate-in fade-in">
            <ChevronDown className="w-5 h-5 text-primary drop-shadow-sm animate-bounce" />
         </div>
      )}
    </div>
  );
}
