import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { formatDate, formatTime } from '@/shared/utils/helpers';
import { MapPin, Calendar, Clock } from 'lucide-react';

export function MinorEventModal({ event, open, onClose }) {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <DialogDescription>{event.description}</DialogDescription>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <div className="font-medium">
                  {formatDate(event.start)}
                </div>
                <div className="text-muted-foreground">
                  {formatTime(event.start)}
                  {event.end && ` - ${formatTime(event.end)}`}
                </div>
              </div>
            </div>

            {event.location && (
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>{event.location}</div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
