import { useNavigate } from 'react-router-dom';
import { CalendarDay } from './CalendarDay';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export function MonthGrid({ currentDate, events, onEventClick }) {
  const navigate = useNavigate();

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Previous month days
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ date: null, events: [] });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter(e => e.start.startsWith(dateStr));
      days.push({ date: day, events: dayEvents });
    }

    return days;
  };

  const handleEventClick = (event) => {
    if (event.action === 'PAGE') {
      navigate(`/eventos/${event.id}`);
    } else {
      onEventClick(event);
    }
  };

  const days = getDaysInMonth();
  const today = new Date();
  const isCurrentMonth =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 bg-muted">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="p-2 text-center font-semibold text-sm border-r last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 auto-rows-fr">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            date={day.date}
            events={day.events}
            isToday={
              isCurrentMonth && day.date === today.getDate()
            }
            onEventClick={handleEventClick}
          />
        ))}
      </div>
    </div>
  );
}
