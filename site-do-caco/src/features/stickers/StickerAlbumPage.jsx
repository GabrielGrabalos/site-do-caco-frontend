import { useStickerAlbumVM } from './useStickerAlbumVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { RedeemInput } from './components/RedeemInput';
import { AlbumGrid } from './components/AlbumGrid';
import { StickerModal } from './components/StickerModal';
import { Card } from '@/components/ui/card';

export function StickerAlbumPage() {
  usePageTitle('Álbum de Figurinhas');
  const {
    myStickers,
    allStickers,
    loading,
    error,
    selectedSticker,
    progress,
    handleRedeem,
    openStickerModal,
    closeStickerModal,
  } = useStickerAlbumVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Álbum de Figurinhas</h1>
        <p className="text-muted-foreground">
          Colecione figurinhas participando dos eventos do CACo
        </p>
      </div>

      {/* Redeem Input */}
      <RedeemInput onRedeem={handleRedeem} />

      {/* Album Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Minha Coleção</h2>
        <AlbumGrid
          allStickers={allStickers}
          myStickers={myStickers}
          onStickerClick={openStickerModal}
        />
      </div>

      {/* Sticker Modal */}
      <StickerModal
        sticker={selectedSticker}
        open={!!selectedSticker}
        onClose={closeStickerModal}
      />
    </div>
  );
}
