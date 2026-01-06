import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';

export function useAdminBannersVM() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiClient.get('banners');
      setBanners(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar banners');
    } finally {
      setLoading(false);
    }
  };

  const createBanner = async (bannerData) => {
    try {
      setCreating(true);
      const newBanner = await apiClient.post('banners', bannerData);
      setBanners([...banners, newBanner]);
      return { success: true, data: newBanner };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const reorderBanners = async (newOrder) => {
    try {
      // Atualiza localmente primeiro para feedback imediato
      setBanners(newOrder);
      
      // Envia para o backend
      const bannerIds = newOrder.map(b => b.id);
      await apiClient.put('banners/reorder', { bannerIds });
      
      return { success: true };
    } catch (err) {
      // Reverte em caso de erro
      await loadBanners();
      return { success: false, error: err.message };
    }
  };

  const deleteBanner = async (id) => {
    try {
      await apiClient.delete(`banners/${id}`);
      setBanners(banners.filter(b => b.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    banners,
    loading,
    error,
    creating,
    createBanner,
    reorderBanners,
    deleteBanner,
    refreshBanners: loadBanners,
  };
}
