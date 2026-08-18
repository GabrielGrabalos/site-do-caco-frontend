/**
 * Upload de arquivos com progresso. Isolado de `http.ts` porque depende de
 * XMLHttpRequest (fetch não expõe evento de progresso de upload).
 */
import { authService } from '@/shared/services/authService';
import { ApiError } from './errors';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080') + '/api';

function buildUrl(endpoint: string): string {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
}

type ProgressCallback = (percent: number) => void;

function uploadFormData(
  method: 'POST' | 'PUT',
  endpoint: string,
  formData: FormData,
  onProgress?: ProgressCallback | null
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      });
    }

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(xhr.responseText ? JSON.parse(xhr.responseText) : null);
        } catch {
          reject(new ApiError('Erro ao processar resposta', xhr.status));
        }
        return;
      }

      try {
        const errorData = JSON.parse(xhr.responseText);
        reject(new ApiError(errorData.message || `Erro HTTP ${xhr.status}`, xhr.status, errorData.error));
      } catch {
        reject(new ApiError(`Erro HTTP ${xhr.status}: ${xhr.statusText}`, xhr.status));
      }
    });

    xhr.addEventListener('error', () => reject(new ApiError('Erro de rede ao enviar arquivo', 0)));
    xhr.addEventListener('timeout', () => reject(new ApiError('Timeout ao enviar arquivo', 0)));

    xhr.open(method, buildUrl(endpoint));

    const token = authService.getToken();
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }

    xhr.send(formData);
  });
}

export const uploadClient = {
  postFormDataWithProgress(endpoint: string, formData: FormData, onProgress: ProgressCallback | null = null) {
    return uploadFormData('POST', endpoint, formData, onProgress);
  },

  putFormDataWithProgress(endpoint: string, formData: FormData, onProgress: ProgressCallback | null = null) {
    return uploadFormData('PUT', endpoint, formData, onProgress);
  },
};
