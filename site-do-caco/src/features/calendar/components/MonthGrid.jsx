import { useNavigate } from 'react-router-dom';
import { CalendarDay } from './CalendarDay';
import { EventBar } from './EventBar';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

/**
 * Calcula em qual dia do mês um evento começa a ser exibido
 * considerando eventos que começam antes do mês
 */
function getEventStartDay(event, year, month) {
  const eventStart = new Date(event.startDate);
  const monthStart = new Date(year, month, 1);
  
  if (eventStart < monthStart) {
    return 1;
  }
  return eventStart.getDate();
}

/**
 * Calcula em qual dia do mês um evento termina de ser exibido
 * considerando eventos que terminam depois do mês
 */
function getEventEndDay(event, year, month) {
  const eventEnd = new Date(event.endDate);
  const monthEnd = new Date(year, month + 1, 0);
  
  if (eventEnd > monthEnd) {
    return monthEnd.getDate();
  }
  return eventEnd.getDate();
}

/**
 * Verifica se um evento está ativo em um dia específico
 */
function isEventActiveOnDay(event, year, month, day) {
  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);
  const checkDate = new Date(year, month, day);
  
  // Normaliza para comparar apenas datas (sem horas)
  eventStart.setHours(0, 0, 0, 0);
  eventEnd.setHours(23, 59, 59, 999);
  checkDate.setHours(12, 0, 0, 0);
  
  return checkDate >= eventStart && checkDate <= eventEnd;
}

/**
 * Agrupa eventos por linhas (para eventos de múltiplos dias)
 */
function organizeEventsInRows(events, year, month, daysInMonth) {
  const rows = [];
  
  // Separa eventos de dia único e múltiplos dias
  const multiDayEvents = events.filter(e => {
    const start = new Date(e.startDate);
    const end = new Date(e.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return end > start;
  });
  
  const singleDayEvents = events.filter(e => {
    const start = new Date(e.startDate);
    const end = new Date(e.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return end.getTime() === start.getTime();
  });
  
  // Organiza eventos de múltiplos dias em linhas
  multiDayEvents.forEach(event => {
    const startDay = getEventStartDay(event, year, month);
    const endDay = getEventEndDay(event, year, month);
    
    // Encontra uma linha onde o evento cabe
    let placed = false;
    for (let row of rows) {
      const hasConflict = row.some(e => {
        const eStart = getEventStartDay(e, year, month);
        const eEnd = getEventEndDay(e, year, month);
        return !(endDay < eStart || startDay > eEnd);
      });
      
      if (!hasConflict) {
        row.push(event);
        placed = true;
        break;
      }
    }
    
    if (!placed) {
      rows.push([event]);
    }
  });
  
  return { multiDayRows: rows, singleDayEvents };
}

export function MonthGrid({ currentDate, events, onEventClick }) {
  const navigate = useNavigate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const { multiDayRows, singleDayEvents } = organizeEventsInRows(events, year, month, daysInMonth);
  
  // Removed local handleEventClick to respect the prop passed from parent
  
  // Cria array de dias do mês
  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ date: null, events: [] });
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = singleDayEvents.filter(e => {
      const eventDate = new Date(e.startDate);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === month && 
             eventDate.getFullYear() === year;
    });
    days.push({ date: day, events: dayEvents });
  }
  
  const today = new Date();
  const isCurrentMonth = 
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();
  
  return (
    <div className="border rounded-lg overflow-hidden bg-card shadow-sm">
      {/* Header com dias da semana */}
      <div className="grid grid-cols-7 bg-muted/30 border-b">
        {WEEKDAYS.map((day, index) => (
          <div
            key={day}
            className="p-3 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0 uppercase tracking-wide"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.substring(0, 1)}</span>
          </div>
        ))}
      </div>
      
      {/* Eventos de múltiplos dias */}
      {multiDayRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="relative bg-card">
          <div className="grid grid-cols-7">
            {days.map((_, index) => (
              <div 
                key={`spacer-${rowIndex}-${index}`} 
                className="h-8 border-r border-b last:border-r-0"
              />
            ))}
          </div>
          
          <div className="absolute inset-0 pointer-events-none">
            {row.map((event) => (
              <EventBar
                key={event.id}
                event={event}
                year={year}
                month={month}
                startingDayOfWeek={startingDayOfWeek}
                onClick={() => onEventClick(event)}
              />
            ))}
          </div>
        </div>
      ))}
      
      {/* Grid de dias com eventos de dia único */}
      <div className="grid grid-cols-7 bg-card">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            date={day.date}
            events={day.events}
            isToday={isCurrentMonth && day.date === today.getDate()}
            onEventClick={onEventClick}
          />
        ))}
      </div>
    </div>
  );
}
