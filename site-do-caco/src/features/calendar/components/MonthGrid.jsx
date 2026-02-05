import { useNavigate } from 'react-router-dom';
import { CalendarDay } from './CalendarDay';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

/**
 * Normaliza data para comparar apenas dia/mês/ano
 */
function normalizeDate(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Verifica se dois dias são iguais (apenas data)
 */
function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

/**
 * Gera as semanas para a visualização do mês
 */
function getWeeksForMonth(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  
  // Começar do Domingo anterior à data inicial se não for Domingo
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(1 - startingDayOfWeek);

  const weeks = [];
  const current = new Date(startDate);
  
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // Condição: até passar do fim do mês E ser sábado (para fechar a semana)
  // Ou garantir minimo de semanas
  while (true) {
     const weekDays = [];
     for (let i = 0; i < 7; i++) {
        weekDays.push(new Date(current));
        current.setDate(current.getDate() + 1);
     }
     weeks.push({ id: weekDays[0].toISOString(), days: weekDays });

     // Se o primeiro dia da proxima semana já é outro mês (e maior que o ultimo dia do mes atual), paramos
     if (current > lastDayOfMonth) break;
  }
  
  return weeks;
}

export function MonthGrid({ currentDate, events, onEventClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const weeks = useMemo(() => getWeeksForMonth(year, month), [year, month]);
  const today = new Date();

  // Função para pegar eventos de um dia especifico
  const getEventsForDay = (date) => {
      // Normalizar target date
      const target = normalizeDate(date);
      const targetTime = target.getTime();

      return events.filter(e => {
          const start = normalizeDate(e.startDate);
          const end = normalizeDate(e.endDate);
          
          // Se é evento de um dia: start == target
          // Se é multi-day: target >= start AND target <= end
          return targetTime >= start.getTime() && targetTime <= end.getTime();
      });
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-card shadow-sm">
      {/* Header com dias da semana */}
      <div className="grid grid-cols-7 bg-muted/30 border-b">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="p-3 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0 uppercase tracking-wide"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.substring(0, 1)}</span>
          </div>
        ))}
      </div>
      
      {/* Grid de Semanas */}
      <div className="flex flex-col bg-card">
         {weeks.map((week) => (
             <div key={week.id} className="grid grid-cols-7 min-h-[160px]">
                 {week.days.map((date, dIndex) => {
                     const isCurrentMonth = date.getMonth() === month && date.getFullYear() === year;
                     const isTodayDate = isSameDay(date, today);
                     const daysEvents = getEventsForDay(date);

                     return (
                         <div key={dIndex} className={cn(!isCurrentMonth && "bg-muted/10 opacity-60")}>
                             <CalendarDay
                                 date={date.getDate()}
                                 events={daysEvents}
                                 isToday={isTodayDate}
                                 onEventClick={onEventClick}
                                 // Sem espaçadores complexos, apenas grid normal
                             />
                         </div>
                     );
                 })}
             </div>
         ))}
      </div>
    </div>
  );
}
