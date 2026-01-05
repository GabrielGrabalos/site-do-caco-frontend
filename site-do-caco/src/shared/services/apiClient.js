/**
 * Cliente HTTP centralizado para todas as chamadas à API
 */

import { authService } from './authService';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000')+'/api';

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Monta headers padrão para todas as requisições
   */
  getHeaders(customHeaders = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

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

    // Se resposta vazia (204 No Content)
    if (response.status === 204) {
      return null;
    }

    return response.json();
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
