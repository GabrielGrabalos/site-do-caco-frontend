import { useState } from 'react';
import { useCalendarVM } from '../useCalendarVM';
import { useEventFilters } from '../hooks/useEventFilters';
import { CalendarHeader } from './CalendarHeader';
import { MonthGrid } from './MonthGrid';
import { MinorEventModal } from './MinorEventModal';
import { EventCard } from './EventCard';
import { EventFilters } from './EventFilters';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calendar, List, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function CalendarPageWithFilters() {
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

  const {
    filters,
    setFilters,
    filteredEvents,
    clearFilters,
    setSearchTerm,
    hasActiveFilters,
  } = useEventFilters(events);

  const [viewMode, setViewMode] = useState('calendar');
  const [showFilters, setShowFilters] = useState(false);

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

  // Filtra eventos futuros para a view de lista
  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendário de Eventos</h1>
        <p className="text-muted-foreground">
          Acompanhe todos os eventos do CACO
        </p>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar eventos..."
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Sheet open={showFilters} onOpenChange={setShowFilters}>
          <SheetTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros de Eventos</SheetTitle>
              <SheetDescription>
                Filtre os eventos por tipo, importância ou status
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <EventFilters
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={clearFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Contador de Resultados */}
      {hasActiveFilters && (
        <Card className="mb-6 p-4">
          <p className="text-sm text-muted-foreground">
            {filteredEvents.length} evento{filteredEvents.length !== 1 ? 's' : ''} encontrado
            {filteredEvents.length !== 1 ? 's' : ''}
            {filters.searchTerm && ` para "${filters.searchTerm}"`}
          </p>
        </Card>
      )}

      <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Calendário
          </TabsTrigger>
          <TabsTrigger value="list" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            Lista
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <CalendarHeader currentDate={currentDate} onChangeMonth={changeMonth} />
          <MonthGrid
            currentDate={currentDate}
            events={filteredEvents}
            onEventClick={openEventModal}
          />
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Próximos Eventos</h2>
            <p className="text-sm text-muted-foreground">
              {upcomingEvents.length} evento{upcomingEvents.length !== 1 ? 's' : ''} programado{upcomingEvents.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {hasActiveFilters 
                  ? 'Nenhum evento encontrado com os filtros aplicados'
                  : 'Nenhum evento programado no momento'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <MinorEventModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={closeEventModal}
      />
    </div>
  );
}
