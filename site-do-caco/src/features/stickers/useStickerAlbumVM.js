import { useState, useEffect } from 'react';
import { stickerService } from '@/shared/services/stickerService';
import { userStickerService } from '@/shared/services/userStickerService';

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
      // Busca stickers do usuário (retorna Page)
      const userStickersPage = await userStickerService.getMyStickers(0, 1000);
      const myStickersData = (userStickersPage?.content || []).map((item) => ({
        ...item,
        stickerId: item?.sticker?.id,
      }));
      
      // Busca todos os stickers disponíveis (retorna Page)
      const allStickersPage = await stickerService.getAllStickers(0, 1000);
      const allStickersData = allStickersPage.content || [];
      
      setMyStickers(myStickersData);
      setAllStickers(allStickersData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (code) => {
    const result = await stickerService.redeemSticker(code);
    
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
    setSelectedSticker({ ...sticker, obtainedAt: userSticker?.obtainedAt });
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
