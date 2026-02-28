import { useCalendarVM } from './useCalendarVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { CalendarHeader } from './components/CalendarHeader';
import { MonthGrid } from './components/MonthGrid';
import { MobileCalendarView } from './components/MobileCalendarView';
import { EventPreviewModal } from './components/EventPreviewModal';

export function CalendarPage() {
  usePageTitle('Calendário');
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
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="text-sm text-muted-foreground">Carregando eventos...</p>
        </div>
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendário</h1>
        <p className="text-muted-foreground">
          Confira as datas importantes e atividades do CACO
        </p>
      </div>
        
      <CalendarHeader currentDate={currentDate} onChangeMonth={changeMonth} />

      <div className="space-y-8">
        {/* Desktop View: Traditional Calendar Grid */}
        <div className="hidden lg:block">
          <MonthGrid
            currentDate={currentDate}
            events={events}
            onEventClick={openEventModal}
          />
        </div>

        {/* Mobile/Tablet View: Agenda List */}
        <div className="lg:hidden">
          <MobileCalendarView
            currentDate={currentDate}
            events={events}
          />
        </div>
      </div>

      <EventPreviewModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={closeEventModal}
      />
    </div>
  );
}
