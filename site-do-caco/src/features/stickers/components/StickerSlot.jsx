import { Lock } from 'lucide-react';

export function StickerSlot() {
  return (
    <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
      <div className="text-center">
        <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
        <p className="text-xs text-muted-foreground">Bloqueada</p>
      </div>
    </div>
  );
}
