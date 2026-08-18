import { httpClient } from '@/shared/lib/http';

export const professorService = {
  getAll: async () => {
    return httpClient.get('admin/professors');
  },

  getById: async (id) => {
    return httpClient.get(`admin/professors/${id}`);
  },

  create: async (data) => {
    return httpClient.post('admin/professors', data);
  },

  update: async (id, data) => {
    return httpClient.put(`admin/professors/${id}`, data);
  },

  delete: async (id) => {
    return httpClient.delete(`admin/professors/${id}`);
  },
};
