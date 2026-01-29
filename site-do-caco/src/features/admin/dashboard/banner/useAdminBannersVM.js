import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Banner } from './Banner';

export function useAdminBannersVM() {
  const [activeBanners, setActiveBanners] = useState([]);
  const [inactiveBanners, setInactiveBanners] = useState([]);
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
      
      const [activeData, inactiveData] = await Promise.all([
        apiClient.get('admin/banners/active'),
        apiClient.get('admin/banners/inactive'),
      ]);
      
      // Converte DTOs para instâncias de Banner
      setActiveBanners(Banner.fromDTOArray(activeData));
      setInactiveBanners(Banner.fromDTOArray(inactiveData));
    } catch (err) {
      setError(err.message || 'Erro ao carregar banners');
    } finally {
      setLoading(false);
    }
  };

  const createBanner = async (bannerData) => {
    // Cria preview da imagem localmente
    const imagePreview = URL.createObjectURL(bannerData.imageFile);
    
    // Cria banner temporário usando o Model
    const tempBanner = Banner.createTemporary({
      title: bannerData.title,
      imageUrl: imagePreview,
      targetLink: bannerData.targetLink,
    });
    
    setActiveBanners([...activeBanners, tempBanner]);
    
    try {
      setCreating(true);
      
      // Criar FormData para enviar o arquivo
      const formData = new FormData();
      formData.append('title', bannerData.title);
      formData.append('imageFile', bannerData.imageFile);
      formData.append('targetLink', bannerData.targetLink);
      formData.append('active', true); // Sempre ativo por padrão
      
      // Callback para atualizar progresso
      const onProgress = (percentual) => {
        setActiveBanners(current => 
          current.map(b => 
            b.id === tempBanner.id 
              ? b.clone({ uploadProgress: percentual })
              : b
          )
        );
      };
      
      const newBannerDTO = await apiClient.postFormDataWithProgress(
        'admin/banners', 
        formData, 
        onProgress
      );
      
      // Converte DTO para instância de Banner e substitui o temporário
      const newBanner = Banner.fromDTO(newBannerDTO);
      setActiveBanners(current => 
        current.map(b => b.id === tempBanner.id ? newBanner : b)
      );
      
      // Libera a URL temporária
      URL.revokeObjectURL(imagePreview);
      
      return { success: true, data: newBanner };
    } catch (err) {
      // Remove o banner temporário em caso de erro
      setActiveBanners(current => current.filter(b => b.id !== tempBanner.id));
      URL.revokeObjectURL(imagePreview);
      
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const reorderActiveBanners = async (newOrder) => {
    try {
      // Atualiza localmente primeiro para feedback imediato
      setActiveBanners(newOrder);
      
      // Envia para o backend
      const bannerIds = newOrder.map(b => b.id);
      await apiClient.put('admin/banners/reorder', { bannerIds });
      
      return { success: true };
    } catch (err) {
      // Reverte em caso de erro
      await loadBanners();
      return { success: false, error: err.message };
    }
  };

  const toggleBannerStatus = async (bannerId, isCurrentlyActive) => {
    try {
      await apiClient.put(`admin/banners/${bannerId}/toggle`);
      
      if (isCurrentlyActive) {
        // Move de ativo para inativo
        const banner = activeBanners.find(b => b.id === bannerId);
        if (banner) {
          setActiveBanners(activeBanners.filter(b => b.id !== bannerId));
          setInactiveBanners([...inactiveBanners, banner]);
        }
      } else {
        // Move de inativo para ativo (ao final da lista)
        const banner = inactiveBanners.find(b => b.id === bannerId);
        if (banner) {
          setInactiveBanners(inactiveBanners.filter(b => b.id !== bannerId));
          setActiveBanners([...activeBanners, banner]);
        }
      }
      
      return { success: true };
    } catch (err) {
      // Reverte em caso de erro
      await loadBanners();
      return { success: false, error: err.message };
    }
  };

  const deleteBanner = async (id) => {
    try {
      await apiClient.delete(`admin/banners/${id}`);
      setActiveBanners(activeBanners.filter(b => b.id !== id));
      setInactiveBanners(inactiveBanners.filter(b => b.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateBanner = async (id, bannerData) => {
    try {
      const formData = new FormData();
      formData.append('title', bannerData.title);
      formData.append('targetLink', bannerData.targetLink);
      
      // Se tiver uma nova imagem (File), adiciona ao FormData
      if (bannerData.imageFile instanceof File) {
        formData.append('imageFile', bannerData.imageFile);
      }
      // Senão, não precisa enviar a imagem (mantém a existente no backend)
      
      const updatedBannerDTO = await apiClient.putFormData(`admin/banners/${id}`, formData);
      
      // Converte DTO para instância de Banner
      const updatedBanner = Banner.fromDTO(updatedBannerDTO);
      
      // Atualiza o banner na lista correta
      setActiveBanners(activeBanners.map(b => b.id === id ? updatedBanner : b));
      setInactiveBanners(inactiveBanners.map(b => b.id === id ? updatedBanner : b));
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    activeBanners,
    inactiveBanners,
    loading,
    error,
    creating,
    createBanner,
    updateBanner,
    reorderActiveBanners,
    toggleBannerStatus,
    deleteBanner,
    refreshBanners: loadBanners,
  };
}
