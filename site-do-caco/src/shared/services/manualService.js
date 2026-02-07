import { apiClient } from './apiClient';

export const manualService = {
  // Categories
  getCategories: async () => {
    return apiClient.get('public/manual/categories');
  },

  createCategory: async (categoryData) => {
    return apiClient.post('admin/manual/categories', categoryData);
  },

  updateCategory: async (id, categoryData) => {
    return apiClient.put(`admin/manual/categories/${id}`, categoryData);
  },

  deleteCategory: async (id) => {
    return apiClient.delete(`admin/manual/categories/${id}`);
  },

  reorderCategories: async (categoryIds) => {
    return apiClient.put('admin/manual/categories/r/reorder', { categoryIds });
  },

  // Chapters
  getChaptersByCategory: async (categoryId) => {
    return apiClient.get(`public/manual/chapters/category/${categoryId}`);
  },

  createChapter: async (chapterData) => {
    return apiClient.post('admin/manual/chapters', chapterData);
  },

  updateChapter: async (id, chapterData) => {
    return apiClient.put(`admin/manual/chapters/${id}`, chapterData);
  },

  deleteChapter: async (id) => {
    return apiClient.delete(`admin/manual/chapters/${id}`);
  },

  reorderChapters: async (categoryId, chapterIds) => {
    return apiClient.put('admin/manual/chapters/r/reorder', { categoryId, chapterIds });
  },

  // Articles
  getArticlesByChapter: async (chapterId) => {
    return apiClient.get(`public/manual/articles/chapter/${chapterId}`);
  },

  createArticle: async (articleData) => {
    return apiClient.post('admin/manual/articles', articleData);
  },

  updateArticle: async (id, articleData) => {
    return apiClient.put(`admin/manual/articles/${id}`, articleData);
  },

  deleteArticle: async (id) => {
    return apiClient.delete(`admin/manual/articles/${id}`);
  },

  reorderArticles: async (chapterId, articleIds) => {
    return apiClient.put('admin/manual/articles/r/reorder', { chapterId, articleIds });
  },

  getArticleFeedbacks: async (articleId, page = 0, size = 100) => {
    return apiClient.get(`admin/manual/articles/${articleId}/feedback?page=${page}&size=${size}`);
  }
};
