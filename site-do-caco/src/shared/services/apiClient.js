/**
 * Cliente HTTP centralizado para todas as chamadas à API
 */

import { authService } from './authService';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080')+'/api';

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Monta headers padrão para todas as requisições
   */
  getHeaders(customHeaders = {}, isFormData = false) {
    const headers = {
      ...customHeaders,
    };

    // Não definir Content-Type para FormData (deixa o browser definir com boundary)
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    // Adiciona token de autenticação se disponível
    const token = authService.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Monta URL completa
   */
  buildUrl(endpoint) {
    // Remove barra inicial do endpoint se existir
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.baseUrl}/${cleanEndpoint}`;
  }

  /**
   * Trata erros da API
   */
  async handleResponse(response) {
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }

      // Se seguir o padrão ErrorResponseDTO
      if (errorData.message) {
        throw new Error(errorData.message);
      }

      throw new Error(errorData.error || 'Erro desconhecido');
    }

    // Se resposta vazia (204 No Content ou corpo vazio)
    if (response.status === 204) {
      return null;
    }

    // Verifica se há conteúdo antes de fazer parse
    const text = await response.text();
    if (!text || text.trim() === '') {
      return null;
    }

    try {
      return JSON.parse(text);
    } catch (error) {
      console.error('Erro ao fazer parse do JSON:', text);
      throw new Error('Resposta inválida do servidor');
    }
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'GET',
      headers: this.getHeaders(options.headers),
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request
   */
  async post(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'POST',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request com FormData (para upload de arquivos)
   */
  async postFormData(endpoint, formData, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'POST',
      headers: this.getHeaders(options.headers, true), // true indica FormData
      body: formData,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * PUT request com FormData (para atualização com upload de arquivos)
   */
  async putFormData(endpoint, formData, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PUT',
      headers: this.getHeaders(options.headers, true), // true indica FormData
      body: formData,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request com FormData e callback de progresso (usa XMLHttpRequest)
   * @param {string} endpoint - Endpoint da API
   * @param {FormData} formData - Dados do formulário
   * @param {Function} onProgress - Callback (percentual) => void
   * @param {Object} options - Opções adicionais
   */
  async postFormDataWithProgress(endpoint, formData, onProgress = null, options = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      // Rastreia progresso do upload
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            onProgress(percentComplete);
          }
        });
      }

      // Handler de sucesso
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
            resolve(response);
          } catch (err) {
            reject(new Error('Erro ao processar resposta'));
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            reject(new Error(errorData.message || `Erro HTTP ${xhr.status}`));
          } catch {
            reject(new Error(`Erro HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        }
      });

      // Handler de erro
      xhr.addEventListener('error', () => {
        reject(new Error('Erro de rede ao enviar arquivo'));
      });

      // Handler de timeout
      xhr.addEventListener('timeout', () => {
        reject(new Error('Timeout ao enviar arquivo'));
      });

      // Configura e envia
      xhr.open('POST', this.buildUrl(endpoint));
      
      // Adiciona headers (exceto Content-Type, que o browser define automaticamente)
      const token = authService.getToken();
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
      
      // Adiciona headers customizados
      if (options.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
          if (key.toLowerCase() !== 'content-type') {
            xhr.setRequestHeader(key, value);
          }
        });
      }

      xhr.send(formData);
    });
  }

  /**
   * PUT request com FormData e progresso
   */
  putFormDataWithProgress(endpoint, formData, onProgress = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Setup de progresso
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            onProgress(percentComplete);
          }
        });
      }

      // Handler de sucesso
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
            resolve(response);
          } catch (err) {
            reject(new Error('Erro ao processar resposta'));
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            reject(new Error(errorData.message || `Erro HTTP ${xhr.status}`));
          } catch {
            reject(new Error(`Erro HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        }
      });

      // Handler de erro
      xhr.addEventListener('error', () => {
        reject(new Error('Erro de rede ao enviar arquivo'));
      });

      // Handler de timeout
      xhr.addEventListener('timeout', () => {
        reject(new Error('Timeout ao enviar arquivo'));
      });

      // Configura e envia
      xhr.open('PUT', this.buildUrl(endpoint));
      
      // Adiciona headers (exceto Content-Type, que é definido automaticamente para FormData)
      const headers = this.getHeaders({}, true);
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          if (key.toLowerCase() !== 'content-type') {
            xhr.setRequestHeader(key, value);
          }
        });
      }

      xhr.send(formData);
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PUT',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PATCH',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'DELETE',
      headers: this.getHeaders(options.headers),
      ...options,
    });

    return this.handleResponse(response);
  }
}

// Instância singleton do cliente
export const apiClient = new ApiClient(API_BASE_URL);
