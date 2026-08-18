import { apiClient } from './apiClient';

export const homeService = {
  async getDashboard() {
    return apiClient.get('public/home');
  },
};
