import { apiClient } from './apiClient';

class ContentService {
  async getDashboard() {
    return apiClient.get('public/home');
  }

  async getNewsList(page = 1, limit = 10) {
    return apiClient.get(`public/news?page=${page}&limit=${limit}`);
  }

  async getNewsBySlug(slug) {
    return apiClient.get(`public/news/${slug}`);
  }

  async getManualTree() {
    return apiClient.get('public/manual/tree');
  }

  async getManualArticle(id) {
    return apiClient.get(`public/manual/articles/${id}`);
  }

  async submitFeedback(articleId, helpful, comment = '') {
    return apiClient.post(`article-feedback/articles/${articleId}/feedback`, {
      isHelpful: helpful,
      comment,
    });
  }

  async getCalendarEvents(year, month) {
    return apiClient.get(`public/events/calendar?year=${year}&month=${month}`);
  }

  async getEvent(id) {
    return apiClient.get(`public/events/${id}`);
  }

  async getExams() {
    return apiClient.get('public/exams');
  }

  // ==================== SEARCH ====================

  /**
   * Busca notícias com filtros
   * @param {Object} params - { search, limit }
   * @returns {Promise<Object>} { data: [], total: 0 }
   */
  async getNews(params = {}) {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.limit) queryParams.append('limit', params.limit);
    
    return apiClient.get(`public/news/search?${queryParams.toString()}`);
  }

  /**
   * Busca páginas do manual com filtros
   * @param {Object} params - { search, limit }
   * @returns {Promise<Object>} { data: [], total: 0 }
   */
  async getManualPages(params = {}) {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.limit) queryParams.append('limit', params.limit);
    
    return apiClient.get(`public/manual/search?${queryParams.toString()}`);
  }

  /**
   * Busca eventos com filtros
   * @param {Object} params - { search, limit }
   * @returns {Promise<Object>} { data: [], total: 0 }
   */
  async getEvents(params = {}) {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.limit) queryParams.append('limit', params.limit);
    
    return apiClient.get(`public/events/search?${queryParams.toString()}`);
  }
}

export const contentService = new ContentService();
