import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function GalleryGrid({ media = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (media.length === 0) return null;

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(item)}
              className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={item.url}
                alt={item.caption || `Imagem ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || 'Imagem'}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <p className="text-center">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
