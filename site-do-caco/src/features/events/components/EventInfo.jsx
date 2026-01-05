import { MapPin, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate, formatTime } from '@/shared/utils/helpers';

export function EventInfo({ event }) {
  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações do Evento</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Data</div>
                <div className="text-muted-foreground">
                  {formatDate(event.start)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Horário</div>
                <div className="text-muted-foreground">
                  {formatTime(event.start)}
                  {event.end && ` - ${formatTime(event.end)}`}
                </div>
              </div>
            </div>

            {event.location && (
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold">Local</div>
                  <div className="text-muted-foreground mb-3">
                    {event.location}
                  </div>
                  {/* Google Maps iframe - Nota: você precisa de uma API key real */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={getGoogleMapsUrl(event.location)}
                      allowFullScreen
                      title="Localização do evento"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {event.description && (
          <div>
            <h3 className="font-semibold mb-2">Descrição</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
