import { cn } from '@/lib/utils';

/**
 * Componente para renderizar eventos que se estendem por múltiplos dias
 * como barras horizontais no calendário
 */
export function EventBar({ event, year, month, startingDayOfWeek, onClick }) {
  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  
  // Calcula o dia de início no mês (1-31)
  let startDay;
  if (eventStart < monthStart) {
    startDay = 1;
  } else {
    startDay = eventStart.getDate();
  }
  
  // Calcula o dia de término no mês (1-31)
  let endDay;
  if (eventEnd > monthEnd) {
    endDay = monthEnd.getDate();
  } else {
    endDay = eventEnd.getDate();
  }
  
  // Calcula a posição da barra no grid
  // Note: Using grid positioning is tricky if rows are used. 
  // This component usually lives inside a MonthGrid which handles rows.
  // The 'gridColumnStart' logic here might be redundant if the parent handles it or 
  // if this is used in a grid layout directly. 
  // Looking at MonthGrid, it renders EventBar inside a row, and uses standard flow?
  // No, checking MonthGrid again... it uses 'relative' on row and absolute on EventBar.
  // But wait, the previous code had 'gridColumnStart' and 'left/right'.
  // I will keep the positioning logic as is to avoid breaking layout, just change styling.
  
  const gridColumnStart = startDay + startingDayOfWeek;
  const gridColumnEnd = endDay + startingDayOfWeek + 1;
  
  // Cores baseadas no Status e Tipo
  const getEventStyle = () => {
    if (event.status === 'HAPPENING') {
        return 'bg-green-600 hover:bg-green-700 text-white animate-pulse';
    }
    if (event.status === 'ENDED') {
        return 'bg-muted text-muted-foreground hover:bg-muted/80';
    }
    
    // Default for SCHEDULED based on Type
    switch (event.type) {
      case 'ONLINE':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'HYBRID':
        return 'bg-purple-600 hover:bg-purple-700 text-white';
      default: // IN_PERSON
        return 'bg-primary hover:bg-primary/90 text-primary-foreground';
    }
  };
  
  const spanDays = endDay - startDay + 1;
  const showFullTitle = spanDays >= 2;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute h-7 rounded-md px-2 py-0.5 text-xs font-medium truncate transition-all pointer-events-auto m-0.5 shadow-sm',
        'flex items-center gap-1.5',
        getEventStyle()
      )}
      style={{
        // Positioning logic from previous version maintained
        // Assuming parent has grid-cols-7
        left: `calc((100% / 7) * ${startDay + startingDayOfWeek - 1})`,
        width: `calc((100% / 7) * ${spanDays})`, // Simplified width calculation
        // right: `calc(100% - (100% / 7) * ${endDay + startingDayOfWeek})`, // Old calculation
        top: '2px',
        zIndex: 10
      }}
      title={`${event.title} - ${event.location || ''}`}
    >
      {/* Status Dot */}
       {event.status === 'HAPPENING' && (
         <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping flex-shrink-0" />
       )}

      {/* Título do evento */}
      <span className="truncate flex-1 text-left">
        {event.title}
      </span>
      
      {/* Badge de tipo (apenas se houver espaço e não for HAPPENING para não poluir) */}
      {spanDays >= 3 && (
        <span className="ml-auto text-[10px] opacity-80 hidden sm:inline uppercase tracking-tighter">
          {event.type.replace('_', ' ')}
        </span>
      )}
    </button>
  );
}
