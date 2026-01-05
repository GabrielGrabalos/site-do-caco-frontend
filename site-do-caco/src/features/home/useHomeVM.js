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
      
      // Filtrar warnings já dismissed
      const dismissedWarnings = JSON.parse(
        localStorage.getItem('dismissedWarnings') || '[]'
      );
      const activeWarnings = dashboardData.warnings.filter(
        w => !dismissedWarnings.includes(w.id)
      );
      
      setData({ ...dashboardData, warnings: activeWarnings });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const dismissWarning = (id) => {
    const dismissedWarnings = JSON.parse(
      localStorage.getItem('dismissedWarnings') || '[]'
    );
    dismissedWarnings.push(id);
    localStorage.setItem('dismissedWarnings', JSON.stringify(dismissedWarnings));
    
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
