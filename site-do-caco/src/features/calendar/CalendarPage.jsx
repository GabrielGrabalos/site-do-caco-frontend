import { useCalendarVM } from './useCalendarVM';
import { CalendarHeader } from './components/CalendarHeader';
import { MonthGrid } from './components/MonthGrid';
import { MinorEventModal } from './components/MinorEventModal';

export function CalendarPage() {
  const {
    currentDate,
    events,
    loading,
    error,
    selectedEvent,
    changeMonth,
    openEventModal,
    closeEventModal,
  } = useCalendarVM();

  if (loading && events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CalendarHeader currentDate={currentDate} onChangeMonth={changeMonth} />
      <MonthGrid
        currentDate={currentDate}
        events={events}
        onEventClick={openEventModal}
      />
      <MinorEventModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={closeEventModal}
      />
    </div>
  );
}
