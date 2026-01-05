import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';
import { authService } from '@/shared/services/authService';

export function useStickerAlbumVM() {
  const [myStickers, setMyStickers] = useState([]);
  const [allStickers, setAllStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSticker, setSelectedSticker] = useState(null);

  useEffect(() => {
    loadStickers();
  }, []);

  const loadStickers = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      const data = await contentService.getStickers(token);
      setMyStickers(data.myStickers || []);
      setAllStickers(data.allStickers || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (code) => {
    const token = authService.getToken();
    const result = await contentService.redeemSticker(code, token);
    
    // Adicionar novo sticker
    setMyStickers(prev => [...prev, result.userSticker]);
    
    // Tocar som (se disponível)
    try {
      const audio = new Audio('/sounds/sticker-unlocked.mp3');
      audio.play().catch(() => {
        // Ignorar erro se som não estiver disponível
      });
    } catch (e) {
      // Ignorar
    }
    
    return result;
  };

  const openStickerModal = (sticker, userSticker) => {
    setSelectedSticker({ ...sticker, ...userSticker });
  };

  const closeStickerModal = () => {
    setSelectedSticker(null);
  };

  const progress = {
    collected: myStickers.length,
    total: allStickers.length,
    percentage: allStickers.length > 0
      ? Math.round((myStickers.length / allStickers.length) * 100)
      : 0,
  };

  return {
    myStickers,
    allStickers,
    loading,
    error,
    selectedSticker,
    progress,
    handleRedeem,
    openStickerModal,
    closeStickerModal,
  };
}
