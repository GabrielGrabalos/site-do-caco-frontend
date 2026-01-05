import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEventVM } from './useEventVM';
import { Countdown } from './components/Countdown';
import { EventInfo } from './components/EventInfo';
import { GalleryGrid } from './components/GalleryGrid';
import { Button } from '@/components/ui/button';

export function EventPage() {
  const { event, loading, error } = useEventVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">
            {error || 'Evento não encontrado'}
          </p>
          <Button asChild className="mt-4">
            <Link to="/calendario">Voltar para calendário</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header com imagem de fundo */}
      {event.imageUrl && (
        <div className="relative w-full h-[400px] overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Button variant="ghost" asChild className="mb-4 text-white hover:text-white hover:bg-white/20">
                <Link to="/calendario">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para calendário
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {event.title}
              </h1>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === 'UPCOMING'
                      ? 'bg-blue-500 text-white'
                      : event.status === 'ONGOING'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}
                >
                  {event.status === 'UPCOMING'
                    ? 'Em breve'
                    : event.status === 'ONGOING'
                    ? 'Acontecendo agora'
                    : 'Finalizado'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Countdown para eventos futuros */}
        {event.status !== 'ENDED' && (
          <Countdown targetDate={event.start} />
        )}

        {/* Informações do evento */}
        <EventInfo event={event} />

        {/* Galeria (apenas para eventos finalizados) */}
        {event.status === 'ENDED' && event.gallery && event.gallery.length > 0 && (
          <GalleryGrid media={event.gallery} />
        )}
      </div>
    </div>
  );
}
