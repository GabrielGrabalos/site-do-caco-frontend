const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000') + '/api';

class ContentService {
  async getDashboard() {
    const response = await fetch(`${API_BASE_URL}/public/home`);
    if (!response.ok) throw new Error('Falha ao carregar dashboard');
    return response.json();
  }

  async getNewsList(page = 1, limit = 10) {
    const response = await fetch(`${API_BASE_URL}/news?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Falha ao carregar notícias');
    return response.json();
  }

  async getNewsBySlug(slug) {
    const response = await fetch(`${API_BASE_URL}/public/news/${slug}`);
    if (!response.ok) throw new Error('Falha ao carregar notícia');
    return response.json();
  }

  async getManualTree() {
    const response = await fetch(`${API_BASE_URL}/manual/tree`);
    if (!response.ok) throw new Error('Falha ao carregar árvore do manual');
    return response.json();
  }

  async getManualArticle(id) {
    const response = await fetch(`${API_BASE_URL}/manual/articles/${id}`);
    if (!response.ok) throw new Error('Falha ao carregar artigo');
    return response.json();
  }

  async submitFeedback(articleId, helpful, comment = '') {
    const response = await fetch(`${API_BASE_URL}/article-feedback/articles/${articleId}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isHelpful: helpful, comment }),
    });
    if (!response.ok) throw new Error('Falha ao enviar feedback');
    return response.json();
  }

  async getCalendarEvents(year, month) {
    const response = await fetch(`${API_BASE_URL}/events/calendar?year=${year}&month=${month}`);
    if (!response.ok) throw new Error('Falha ao carregar eventos');
    return response.json();
  }

  async getEvent(id) {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) throw new Error('Falha ao carregar evento');
    return response.json();
  }

  async getExams() {
    const response = await fetch(`${API_BASE_URL}/exams`);
    if (!response.ok) throw new Error('Falha ao carregar provas');
    return response.json();
  }

  async getStickers(token) {
    const response = await fetch(`${API_BASE_URL}/stickers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Falha ao carregar figurinhas');
    return response.json();
  }

  async redeemSticker(code, token) {
    const response = await fetch(`${API_BASE_URL}/stickers/redeem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Falha ao resgatar código');
    }
    return response.json();
  }
}

export const contentService = new ContentService();
