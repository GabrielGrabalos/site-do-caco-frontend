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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{sticker.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-muted">
            <img
              src={sticker.imageUrl}
              alt={sticker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            {sticker.createdAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Criado em:</span>
                <span className="text-muted-foreground">
                  {formatDate(sticker.createdAt)}
                </span>
              </div>
            )}

            {sticker.originEvent && (
              <>
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
              </>
            )}

            {sticker.description && (
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  {sticker.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
