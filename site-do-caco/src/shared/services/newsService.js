import { apiClient } from './apiClient';

class NewsService {
  // ==================== PUBLIC ENDPOINTS ====================

  /**
   * Lista paginada de notícias públicas
   * @param {number} page - Número da página (começa em 0)
   * @param {number} size - Tamanho da página
   * @param {string} sort - Ordenação (ex: "publishedAt,desc")
   * @returns {Promise<Object>} Response com paginação Spring
   */
  async getNewsList(page = 0, size = 10, sort = 'publishedAt,desc') {
    return apiClient.get(`public/news?page=${page}&size=${size}&sort=${sort}`);
  }

  /**
   * Detalhe de uma notícia pelo slug
   * @param {string} slug - Slug da notícia
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async getNewsBySlug(slug) {
    return apiClient.get(`public/news/${slug}`);
  }

  // ==================== EDITOR ENDPOINTS ====================

  /**
   * Criar notícia (Editor, Admin, SuperAdmin)
   * @param {Object|FormData} data - Formulário com titulo, slug, summary, content, coverImage (File)
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async createNews(data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.postFormData('editor/news', data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.postFormData('editor/news', formData);
  }

  /**
   * Editar notícia (somente autor ou admin)
   * @param {number} id - ID da notícia
   * @param {Object|FormData} data - Formulário com titulo, slug, summary, content, coverImage (File), removeCoverImage
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async updateNews(id, data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.putFormData(`editor/news/${id}`, data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    
    if (data.removeCoverImage) {
      formData.append('removeCoverImage', 'true');
    } else if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.putFormData(`editor/news/${id}`, formData);
  }

  /**
   * Deletar notícia (somente autor ou admin)
   * @param {number} id - ID da notícia
   * @returns {Promise<void>}
   */
  async deleteNews(id) {
    return apiClient.delete(`editor/news/${id}`);
  }

  // ==================== ADMIN ENDPOINTS ====================

  /**
   * Criar notícia como admin (qualquer notícia)
   * @param {FormData} data - FormData com titulo, slug, summary, content, coverImage (File), removeCoverImage
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async createNewsAsAdmin(data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.postFormData('admin/news', data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.postFormData('admin/news', formData);
  }

  /**
   * Editar qualquer notícia como admin
   * @param {number} id - ID da notícia
   * @param {FormData} data - FormData com titulo, slug, summary, content, coverImage (File), removeCoverImage
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async updateNewsAsAdmin(id, data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.putFormData(`admin/news/${id}`, data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    
    if (data.removeCoverImage) {
      formData.append('removeCoverImage', 'true');
    } else if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.putFormData(`admin/news/${id}`, formData);
  }

  /**
   * Deletar qualquer notícia como admin
   * @param {number} id - ID da notícia
   * @returns {Promise<void>}
   */
  async deleteNewsAsAdmin(id) {
    return apiClient.delete(`admin/news/${id}`);
  }

  /**
   * Lista paginada de notícias para admin (todas as notícias)
   * @param {number} page - Número da página (começa em 0)
   * @param {number} size - Tamanho da página
   * @param {string} sort - Ordenação (ex: "publishedAt,desc")
   * @returns {Promise<Object>} Response com paginação Spring
   */
  async getNewsListAdmin(page = 0, size = 10, sort = 'publishedAt,desc') {
    return apiClient.get(`admin/news?page=${page}&size=${size}&sort=${sort}`);
  }

  /**
   * Obter notícia pelo ID para edição (admin)
   * @param {number} id - ID da notícia
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async getNewsById(id) {
    return apiClient.get(`admin/news/${id}`);
  }

  /**
   * Obter notícia pelo slug para edição (editor/próprio)
   * @param {string} slug - Slug da notícia
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async getNewsDetailBySlug(slug) {
    return apiClient.get(`editor/news/${slug}`);
  }

  /**
   * Obter notícia pelo ID para edição (editor/próprio)
   * @param {string} slug - Slug da notícia
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async getNewsDetailById(slug) {
    return apiClient.get(`editor/news/${slug}`);
  }

  /**
   * Listar notícias do editor autenticado
   * @param {number} page - Número da página (começa em 0)
   * @param {number} size - Tamanho da página
   * @param {string} sort - Ordenação (ex: "publishedAt,desc")
   * @returns {Promise<Object>} Response com paginação Spring
   */
  async getEditorNews(page = 0, size = 10, sort = 'publishedAt,desc') {
    return apiClient.get(`editor/news?page=${page}&size=${size}&sort=${sort}`);
  }

  /**
   * Criar notícia (Editor)
   * @param {Object|FormData} data - Formulário com titulo, slug, summary, content, coverImage (File)
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async createEditorNews(data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.postFormData('editor/news', data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.postFormData('editor/news', formData);
  }

  /**
   * Editar notícia do editor
   * @param {number} id - ID da notícia
   * @param {Object|FormData} data - Formulário com titulo, slug, summary, content, coverImage (File), removeCoverImage
   * @returns {Promise<Object>} NewsDetailDTO
   */
  async updateEditorNews(id, data) {
    // Se já é um FormData, envia diretamente
    if (data instanceof FormData) {
      return apiClient.putFormData(`editor/news/${id}`, data);
    }
    
    // Caso contrário, constrói um novo FormData
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('summary', data.summary);
    formData.append('content', data.content);
    
    if (data.removeCoverImage) {
      formData.append('removeCoverImage', 'true');
    } else if (data.coverImage) {
      formData.append('coverImage', data.coverImage);
    }

    return apiClient.putFormData(`editor/news/${id}`, formData);
  }

  /**
   * Deletar notícia do editor
   * @param {number} id - ID da notícia
   * @returns {Promise<void>}
   */
  async deleteEditorNews(id) {
    return apiClient.delete(`editor/news/${id}`);
  }

  /**
   * Buscar notícias com filtros
   * @param {Object} params - { search, limit }
   * @returns {Promise<Object>} { data: [], total: 0 }
   */
  async searchNews(params = {}) {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.limit) queryParams.append('limit', params.limit);
    
    return apiClient.get(`public/news/search?${queryParams.toString()}`);
  }
}

export const newsService = new NewsService();

