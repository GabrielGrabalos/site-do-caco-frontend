import { apiClient } from './apiClient';

export const professorService = {
  getAll: async () => {
    return apiClient.get('admin/professors');
  },

  getById: async (id) => {
    return apiClient.get(`admin/professors/${id}`);
  },

  create: async (data) => {
    return apiClient.post('admin/professors', data);
  },

  update: async (id, data) => {
    return apiClient.put(`admin/professors/${id}`, data);
  },

  delete: async (id) => {
    return apiClient.delete(`admin/professors/${id}`);
  },
};
