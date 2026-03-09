import { apiClient } from './apiClient';

export const whatsappGroupService = {
  getAll: async () => {
    return apiClient.get('admin/whatsapp-groups');
  },

  create: async (data) => {
    return apiClient.post('admin/whatsapp-groups', data);
  },

  update: async (id, data) => {
    return apiClient.put(`admin/whatsapp-groups/${id}`, data);
  },

  remove: async (id) => {
    return apiClient.delete(`admin/whatsapp-groups/${id}`);
  },
};
