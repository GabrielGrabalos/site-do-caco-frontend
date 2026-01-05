export function StickerItem({ sticker }) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden group">
      <img
        src={sticker.imageUrl}
        alt={sticker.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
          {sticker.name}
        </div>
      </div>
    </div>
  );
}
