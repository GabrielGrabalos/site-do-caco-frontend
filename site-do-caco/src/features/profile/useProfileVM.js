import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { authService } from '@/shared/services/authService';

export function useProfileVM() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await apiClient.get('user/me');
      setUser(userData);
    } catch (err) {
      setError(err.message || 'Erro ao carregar perfil');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data) => {
    try {
      setUpdating(true);
      setError(null);
      
      const updatedUser = await apiClient.put('user/profile', data);
      
      // Atualiza o usuário no localStorage
      authService.setUser(updatedUser);
      setUser(updatedUser);
      
      return { success: true };
    } catch (err) {
      setError(err.message || 'Erro ao atualizar perfil');
      return { success: false, error: err.message };
    } finally {
      setUpdating(false);
    }
  };

  return {
    user,
    loading,
    updating,
    error,
    updateProfile,
    refreshProfile: loadProfile,
  };
}
