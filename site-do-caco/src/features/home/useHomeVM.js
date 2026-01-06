import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';

export function useHomeVM() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const dashboardData = await contentService.getDashboard();
      
      // Não filtrar warnings dismissed - quando atualizar a página, voltam a aparecer
      setData(dashboardData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const dismissWarning = (id) => {
    // Apenas remove do estado local, sem salvar no localStorage
    setData(prev => ({
      ...prev,
      warnings: prev.warnings.filter(w => w.id !== id),
    }));
  };

  return {
    data,
    loading,
    error,
    dismissWarning,
  };
}
