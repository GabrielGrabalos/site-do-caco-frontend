import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDate } from '@/shared/utils/helpers';
import { Star, Calendar, MapPin } from 'lucide-react';

const rarityLabels = {
  COMMON: 'Comum',
  RARE: 'Rara',
  EPIC: 'Épica',
  LEGENDARY: 'Lendária',
};

export function StickerModal({ sticker, open, onClose }) {
  if (!sticker) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{sticker.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="aspect-[3/4] w-full rounded-lg overflow-hidden">
            <img
              src={sticker.imageUrl}
              alt={sticker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-medium">Raridade:</span>
              <span className="text-muted-foreground">
                {rarityLabels[sticker.rarity]}
              </span>
            </div>

            {sticker.acquiredAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Conquistada em:</span>
                <span className="text-muted-foreground">
                  {formatDate(sticker.acquiredAt)}
                </span>
              </div>
            )}

            {sticker.eventName && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">Evento:</span>
                <span className="text-muted-foreground">
                  {sticker.eventName}
                </span>
              </div>
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
