/**
 * Serviço para gerenciar eventos
 */

import { httpClient } from '@/shared/lib/http';

class EventService {
  // ==================== ENDPOINTS PÚBLICOS ====================

  /**
   * Lista eventos de um mês específico (inclui 7 dias antes/depois)
   * @param {Object} params - Parâmetros de busca
   * @param {number} params.year - Ano (opcional, usa atual se não informado)
   * @param {number} params.month - Mês 1-12 (opcional, usa atual se não informado)
   * @param {string} params.date - Data específica YYYY-MM-DD (opcional)
   * @param {number} params.page - Número da página (padrão: 0)
   * @param {number} params.size - Tamanho da página (padrão: 100)
   * @returns {Promise<Object>} Eventos do mês
   */
  async getEventsByMonth(params = {}) {
    const queryParams = new URLSearchParams();
    
    if (params.year) queryParams.append('year', params.year);
    if (params.month) queryParams.append('month', params.month);
    if (params.date) queryParams.append('date', params.date);
    queryParams.append('page', params.page || 0);
    queryParams.append('size', params.size || 100);
    
    return httpClient.get(`public/events/month?${queryParams.toString()}`);
  }

  /**
   * Lista eventos futuros com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos futuros
   */
  async getUpcomingEvents(page = 0, size = 20) {
    return httpClient.get(`public/events/upcoming?page=${page}&size=${size}`);
  }

  /**
   * Lista eventos passados com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos passados
   */
  async getPastEvents(page = 0, size = 20) {
    return httpClient.get(`public/events/past?page=${page}&size=${size}`);
  }

  /**
   * Busca evento por ID
   * @param {string} eventId - ID do evento
   * @returns {Promise<Object>} Detalhes completos do evento (EventResponseDTO)
   */
  async getEventById(eventId) {
    return httpClient.get(`public/events/${eventId}`);
  }

  /**
   * Busca evento por slug
   * @param {string} slug - Slug do evento
   * @returns {Promise<Object>} Detalhes completos do evento (EventResponseDTO)
   */
  async getEventBySlug(slug) {
    return httpClient.get(`public/events/slug/${slug}`);
  }

  // ==================== ENDPOINTS PRIVADOS (Autenticação Requerida) ====================

  /**
   * Salva/atualiza participação do usuário no evento
   * @param {string} eventId - ID do evento
   * @param {string} status - Status de participação (INTERESTED, GOING, NOT_GOING)
   * @returns {Promise<Object>} Dados da participação
   */
  async saveParticipation(eventId, status) {
    return httpClient.post(`private/user/events/${eventId}/save`, { status });
  }

  /**
   * Remove participação do usuário no evento
   * @param {string} eventId - ID do evento
   * @returns {Promise<void>}
   */
  async removeParticipation(eventId) {
    return httpClient.delete(`private/user/events/${eventId}/save`);
  }

  /**
   * Lista eventos salvos pelo usuário com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos salvos
   */
  async getSavedEvents(page = 0, size = 20) {
    return httpClient.get(`private/user/events/saved?page=${page}&size=${size}`);
  }

  /**
   * Busca detalhes da participação do usuário em um evento específico
   * @param {string} eventId - ID do evento
   * @returns {Promise<Object>} Detalhes da participação
   */
  async getUserParticipationDetails(eventId) {
    return httpClient.get(`private/user/events/${eventId}/details`);
  }

  /**
   * Atualiza status de participação do usuário
   * @param {string} eventId - ID do evento
   * @param {string} status - Novo status (INTERESTED, GOING, NOT_GOING)
   * @returns {Promise<Object>} Participação atualizada
   */
  async updateParticipationStatus(eventId, status) {
    return httpClient.put(`private/user/events/${eventId}/status`, { status });
  }

  // ==================== ENDPOINTS ADMINISTRATIVOS (Papel ADMIN Requerido) ====================

  /**
   * Cria novo evento (admin)
   * @param {FormData} formData - Dados do evento incluindo possível imagem
   * @returns {Promise<Object>} Evento criado
   */
  async createEvent(formData) {
    return httpClient.postFormData('admin/events', formData);
  }

  /**
   * Atualiza evento existente (admin)
   * @param {string} eventId - ID do evento
   * @param {FormData} formData - Dados atualizados incluindo possível imagem
   * @returns {Promise<Object>} Evento atualizado
   */
  async updateEvent(eventId, formData) {
    return httpClient.putFormData(`admin/events/${eventId}`, formData);
  }

  /**
   * Exclui evento (admin)
   * @param {string} eventId - ID do evento
   * @returns {Promise<void>}
   */
  async deleteEvent(eventId) {
    return httpClient.delete(`admin/events/${eventId}`);
  }

  /**
   * Cria item de galeria para um evento (admin)
   * @param {string} eventId - ID do evento
   * @param {FormData} formData - Dados do item (image|mediaUrl, type, caption)
   * @returns {Promise<Object>} Item criado
   */
  async createGalleryItem(eventId, formData) {
    return httpClient.postFormData(`admin/events/${eventId}/gallery`, formData);
  }

  /**
   * Atualiza apenas a legenda de um item da galeria (admin)
   * @param {string} eventId - ID do evento
   * @param {string} itemId - ID do item da galeria
   * @param {{caption: string | null}} data - Novo conteúdo da legenda
   * @returns {Promise<Object>} Item atualizado
   */
  async updateGalleryItemCaption(eventId, itemId, data) {
    return httpClient.put(`admin/events/${eventId}/gallery/${itemId}`, data);
  }

  /**
   * Exclui item da galeria de um evento (admin)
   * @param {string} eventId - ID do evento
   * @param {string} itemId - ID do item da galeria
   * @returns {Promise<void>}
   */
  async deleteGalleryItem(eventId, itemId) {
    return httpClient.delete(`admin/events/${eventId}/gallery/${itemId}`);
  }
}

export const eventService = new EventService();
