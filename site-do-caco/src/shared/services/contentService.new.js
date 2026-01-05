/**
 * Serviço de conteúdo usando o apiClient centralizado
 * Agora todas as chamadas usam o cliente HTTP configurado com token automático
 */

import { apiClient } from './apiClient';

class ContentService {
  // ============= DASHBOARD =============
  
  /**
   * Busca dados do dashboard (banners, warnings, latest news)
   * @returns {Promise<import('../types/dtos').DashboardDTO>}
   */
  async getDashboard() {
    return apiClient.get('dashboard');
  }

  // ============= BANNERS =============
  
  /**
   * Lista todos os banners
   * @returns {Promise<import('../types/dtos').BannerDTO[]>}
   */
  async getBanners() {
    return apiClient.get('banners');
  }

  /**
   * Cria um novo banner (requer ADMIN)
   * @param {import('../types/dtos').CreateBannerDTO} data
   * @returns {Promise<import('../types/dtos').BannerDTO>}
   */
  async createBanner(data) {
    return apiClient.post('banners', data);
  }

  /**
   * Atualiza um banner (requer ADMIN)
   * @param {string} id - UUID do banner
   * @param {import('../types/dtos').CreateBannerDTO} data
   * @returns {Promise<import('../types/dtos').BannerDTO>}
   */
  async updateBanner(id, data) {
    return apiClient.put(`banners/${id}`, data);
  }

  /**
   * Remove um banner (requer ADMIN)
   * @param {string} id - UUID do banner
   */
  async deleteBanner(id) {
    return apiClient.delete(`banners/${id}`);
  }

  /**
   * Reordena banners (requer ADMIN)
   * @param {import('../types/dtos').ReorderBannersDTO} data
   */
  async reorderBanners(data) {
    return apiClient.put('banners/reorder', data);
  }

  // ============= WARNINGS =============
  
  /**
   * Lista avisos ativos
   * @returns {Promise<import('../types/dtos').WarningDTO[]>}
   */
  async getWarnings() {
    return apiClient.get('warnings');
  }

  /**
   * Cria um novo aviso (requer ADMIN)
   * @param {import('../types/dtos').CreateWarningDTO} data
   * @returns {Promise<import('../types/dtos').WarningDTO>}
   */
  async createWarning(data) {
    return apiClient.post('warnings', data);
  }

  /**
   * Atualiza um aviso (requer ADMIN)
   * @param {string} id - UUID do aviso
   * @param {import('../types/dtos').UpdateWarningDTO} data
   * @returns {Promise<import('../types/dtos').WarningDTO>}
   */
  async updateWarning(id, data) {
    return apiClient.put(`warnings/${id}`, data);
  }

  /**
   * Remove um aviso (requer ADMIN)
   * @param {string} id - UUID do aviso
   */
  async deleteWarning(id) {
    return apiClient.delete(`warnings/${id}`);
  }

  // ============= NEWS =============
  
  /**
   * Lista notícias com paginação
   * @param {Object} params
   * @param {number} [params.page=0] - Página (começa em 0)
   * @param {number} [params.size=10] - Tamanho da página
   * @param {string} [params.search] - Termo de busca
   * @returns {Promise<{content: import('../types/dtos').NewsSummaryDTO[], totalPages: number, totalElements: number}>}
   */
  async getNews(params = {}) {
    const queryParams = new URLSearchParams({
      page: params.page || 0,
      size: params.size || 10,
      ...(params.search && { search: params.search }),
    });
    return apiClient.get(`news?${queryParams}`);
  }

  /**
   * Busca notícia por slug
   * @param {string} slug
   * @returns {Promise<Object>} Notícia completa
   */
  async getNewsBySlug(slug) {
    return apiClient.get(`news/${slug}`);
  }

  /**
   * Cria uma notícia (requer ADMIN)
   * @param {import('../types/dtos').CreateNewsDTO} data
   * @returns {Promise<Object>}
   */
  async createNews(data) {
    return apiClient.post('news', data);
  }

  /**
   * Atualiza uma notícia (requer ADMIN)
   * @param {string} id - UUID da notícia
   * @param {import('../types/dtos').UpdateNewsDTO} data
   * @returns {Promise<Object>}
   */
  async updateNews(id, data) {
    return apiClient.put(`news/${id}`, data);
  }

  /**
   * Remove uma notícia (requer ADMIN)
   * @param {string} id - UUID da notícia
   */
  async deleteNews(id) {
    return apiClient.delete(`news/${id}`);
  }

  // ============= USER PROFILE =============
  
  /**
   * Busca perfil do usuário autenticado
   * @returns {Promise<import('../types/dtos').UserResponseDTO>}
   */
  async getProfile() {
    return apiClient.get('user/me');
  }

  /**
   * Atualiza perfil do usuário
   * @param {import('../types/dtos').UpdateProfileDTO} data
   * @returns {Promise<import('../types/dtos').UserResponseDTO>}
   */
  async updateProfile(data) {
    return apiClient.put('user/profile', data);
  }

  // ============= PLACEHOLDER METHODS (manter compatibilidade) =============
  
  async getManualPages(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return { data: [], total: 0 };
  }

  async getEvents(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return { data: [], total: 0 };
  }

  async getCalendarEvents(year, month) {
    // TODO: Implementar quando backend tiver endpoint
    return [];
  }

  async getExams(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return [];
  }
}

export const contentService = new ContentService();
