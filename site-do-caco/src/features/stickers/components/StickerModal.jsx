import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDate } from '@/shared/utils/helpers';
import { Calendar, MapPin, ImageIcon } from 'lucide-react';

export function StickerModal({ sticker, open, onClose }) {
  if (!sticker) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[92vw] max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl sm:text-2xl">
            {sticker.name}
          </DialogTitle>
          {sticker.obtainedAt && (
            <p className="text-sm text-muted-foreground">
              Obtido em {formatDate(sticker.obtainedAt)}
            </p>
          )}
        </DialogHeader>

        <div className="space-y-5">
          <div className="relative">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-muted ring-1 ring-border">
              <img
                src={sticker.imageUrl}
                alt={sticker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {sticker.description && (
            <div className="rounded-lg border bg-muted/40 p-4">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {sticker.description}
              </p>
            </div>
          )}

          <div className="space-y-3">
            {sticker.originEvent && (
              <div className="rounded-lg border p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <span className="font-medium">Evento:</span>
                  <span className="text-muted-foreground">
                    {sticker.originEvent.title}
                  </span>
                </div>

                {sticker.originEvent.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Local:</span>
                    <span className="text-muted-foreground">
                      {sticker.originEvent.location}
                    </span>
                  </div>
                )}

                {sticker.originEvent.startDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Data do evento:</span>
                    <span className="text-muted-foreground">
                      {formatDate(sticker.originEvent.startDate)}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
