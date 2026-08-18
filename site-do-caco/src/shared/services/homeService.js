import { httpClient } from '@/shared/lib/http';

export const homeService = {
  async getDashboard() {
    return httpClient.get('public/home');
  },
};
