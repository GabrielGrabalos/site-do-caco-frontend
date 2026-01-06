import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { authService } from '@/shared/services/authService';

export function useProfileVM() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
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
            setUploadProgress(0);
            setError(null);

            let updatedUser;

            const formData = new FormData();
            formData.append('name', data.name || user?.name || '');
            
            // Só adiciona avatar se existir um arquivo
            if (data.avatarFile instanceof File) {
                formData.append('avatar', data.avatarFile);
            } else {
                formData.append('avatar', null);
            }

            // Callback para atualizar progresso
            const onProgress = (percentual) => {
                setUploadProgress(percentual);
            };

            updatedUser = await apiClient.putFormDataWithProgress('user/me', formData, onProgress);


            // Atualiza o usuário no localStorage
            authService.setUser(updatedUser);
            setUser(updatedUser);

            return { success: true };
        } catch (err) {
            setError(err.message || 'Erro ao atualizar perfil');
            return { success: false, error: err.message };
        } finally {
            setUpdating(false);
            setUploadProgress(0);
        }
    };

    return {
        user,
        loading,
        updating,
        uploadProgress,
        error,
        updateProfile,
        refreshProfile: loadProfile,
    };
}
