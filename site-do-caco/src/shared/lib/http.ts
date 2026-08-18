/**
 * Cliente HTTP centralizado para todas as chamadas à API.
 * Substitui `shared/services/apiClient.js`.
 */
import { authService } from '@/shared/services/authService';
import { ApiError } from './errors';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080') + '/api';

function buildUrl(endpoint: string): string {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
}

function buildHeaders(customHeaders: HeadersInit = {}, isFormData: boolean): Record<string, string> {
  const headers: Record<string, string> = { ...(customHeaders as Record<string, string>) };

  // Não define Content-Type para FormData (o browser define com o boundary correto)
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  const token = authService.getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await ApiError.fromResponse(response);

    // Formulário de perfil obrigatório não preenchido.
    // Bridge temporário: o guard de rota (fase 3) vai consumir isso via ApiError.code
    // diretamente; até lá, mantemos o evento global que o App.jsx já escuta.
    if (response.status === 403 && error.code === 'form_required' && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('caco:form-required'));
    }

    throw error;
  }

  if (response.status === 204) {
    return null;
  }

  const text = await response.text();
  if (!text || text.trim() === '') {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new ApiError('Resposta inválida do servidor', response.status);
  }
}

export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {}

async function request(
  endpoint: string,
  method: string,
  body: BodyInit | undefined,
  isFormData: boolean,
  options: RequestOptions
) {
  const { headers, ...rest } = options;
  const response = await fetch(buildUrl(endpoint), {
    ...rest,
    method,
    headers: buildHeaders(headers, isFormData),
    body,
  });

  return handleResponse(response);
}

export const httpClient = {
  get(endpoint: string, options: RequestOptions = {}) {
    return request(endpoint, 'GET', undefined, false, options);
  },

  post(endpoint: string, data: unknown = null, options: RequestOptions = {}) {
    return request(endpoint, 'POST', data ? JSON.stringify(data) : undefined, false, options);
  },

  put(endpoint: string, data: unknown = null, options: RequestOptions = {}) {
    return request(endpoint, 'PUT', data ? JSON.stringify(data) : undefined, false, options);
  },

  patch(endpoint: string, data: unknown = null, options: RequestOptions = {}) {
    return request(endpoint, 'PATCH', data ? JSON.stringify(data) : undefined, false, options);
  },

  delete(endpoint: string, options: RequestOptions = {}) {
    return request(endpoint, 'DELETE', undefined, false, options);
  },

  postFormData(endpoint: string, formData: FormData, options: RequestOptions = {}) {
    return request(endpoint, 'POST', formData, true, options);
  },

  putFormData(endpoint: string, formData: FormData, options: RequestOptions = {}) {
    return request(endpoint, 'PUT', formData, true, options);
  },
};
