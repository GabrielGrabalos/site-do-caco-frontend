import { httpClient } from '@/shared/lib/http';

export const manualService = {
  // Categories
  getCategories: async () => {
    return httpClient.get('public/manual/categories');
  },

  createCategory: async (categoryData) => {
    return httpClient.post('admin/manual/categories', categoryData);
  },

  updateCategory: async (id, categoryData) => {
    return httpClient.put(`admin/manual/categories/${id}`, categoryData);
  },

  deleteCategory: async (id) => {
    return httpClient.delete(`admin/manual/categories/${id}`);
  },

  reorderCategories: async (categoryIds) => {
    return httpClient.put('admin/manual/categories/r/reorder', { categoryIds });
  },

  // Chapters
  getChaptersByCategory: async (categoryId) => {
    return httpClient.get(`public/manual/chapters/category/${categoryId}`);
  },

  createChapter: async (chapterData) => {
    return httpClient.post('admin/manual/chapters', chapterData);
  },

  updateChapter: async (id, chapterData) => {
    return httpClient.put(`admin/manual/chapters/${id}`, chapterData);
  },

  deleteChapter: async (id) => {
    return httpClient.delete(`admin/manual/chapters/${id}`);
  },

  reorderChapters: async (categoryId, chapterIds) => {
    return httpClient.put('admin/manual/chapters/r/reorder', { categoryId, chapterIds });
  },

  // Articles
  getArticlesByChapter: async (chapterId) => {
    return httpClient.get(`public/manual/articles/chapter/${chapterId}`);
  },

  createArticle: async (articleData) => {
    return httpClient.post('admin/manual/articles', articleData);
  },

  updateArticle: async (id, articleData) => {
    return httpClient.put(`admin/manual/articles/${id}`, articleData);
  },

  deleteArticle: async (id) => {
    return httpClient.delete(`admin/manual/articles/${id}`);
  },

  reorderArticles: async (chapterId, articleIds) => {
    return httpClient.put('admin/manual/articles/r/reorder', { chapterId, articleIds });
  },

  getArticleFeedbacks: async (articleId, page = 0, size = 100) => {
    return httpClient.get(`admin/manual/articles/${articleId}/feedback?page=${page}&size=${size}`);
  }
};
