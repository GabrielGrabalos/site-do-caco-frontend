import { StickerItem } from './StickerItem';
import { StickerSlot } from './StickerSlot';

export function AlbumGrid({ allStickers, myStickers, onStickerClick }) {
  const hasSticker = (stickerId) => {
    return myStickers.find((s) => s.stickerId === stickerId);
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'LEGENDARY':
        return 'border-yellow-400 shadow-yellow-200';
      case 'EPIC':
        return 'border-purple-400 shadow-purple-200';
      case 'RARE':
        return 'border-blue-400 shadow-blue-200';
      default:
        return 'border-gray-300 shadow-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {allStickers.map((sticker) => {
        const userSticker = hasSticker(sticker.id);
        const borderColor = getRarityColor(sticker.rarity);

        return (
          <div
            key={sticker.id}
            className={`relative aspect-[3/4] rounded-lg border-2 ${borderColor} transition-all hover:shadow-lg`}
          >
            {userSticker ? (
              <button
                onClick={() => onStickerClick(sticker, userSticker)}
                className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <StickerItem sticker={sticker} />
              </button>
            ) : (
              <StickerSlot />
            )}
          </div>
        );
      })}
    </div>
  );
}
