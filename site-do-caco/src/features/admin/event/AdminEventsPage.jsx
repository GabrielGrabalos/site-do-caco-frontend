import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminEventsVM } from "./useAdminEventsVM";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EventItem } from "./components/EventItem";

export function AdminEventsPage() {
  const {
    events,
    loading,
    creating,
    modalOpen,
    setModalOpen,
    createEvent,
    updateEvent,
    deleteEvent,
  } = useAdminEventsVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Gerenciamento de Eventos</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg md:text-xl flex items-center gap-2">
              Eventos atuais e previstos
            </CardTitle>
            <Button onClick={() => setModalOpen(true)} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Novo Evento
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {events.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Nenhum evento programado.
              </p>
              <Button onClick={() => setModalOpen(true)} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Evento
              </Button>
            </div>
          ) : (
            <div className="w-full flex gap-4 flex-wrap">
              {events.map((event => (
                <EventItem
                  key={event.id}
                  event={event}
                  onUpdate={updateEvent}
                  onDelete={deleteEvent}
                />
              )))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}