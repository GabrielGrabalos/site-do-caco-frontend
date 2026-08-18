import { httpClient } from '@/shared/lib/http';

export const whatsappGroupService = {
  getAll: async () => {
    return httpClient.get('admin/whatsapp-groups');
  },

  create: async (data) => {
    return httpClient.post('admin/whatsapp-groups', data);
  },

  update: async (id, data) => {
    return httpClient.put(`admin/whatsapp-groups/${id}`, data);
  },

  remove: async (id) => {
    return httpClient.delete(`admin/whatsapp-groups/${id}`);
  },
};
