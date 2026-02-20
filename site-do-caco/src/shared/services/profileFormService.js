import { apiClient } from './apiClient';

class ProfileFormService {
  /**
   * Submete o formulário de perfil (só pode ser chamado uma vez)
   * @param {{ course: string, otherCourseName?: string, entryYear: number }} data
   * @returns {Promise<{ course: string, otherCourseName: string|null, entryYear: number }>}
   */
  async submitProfileForm(data) {
    return apiClient.post('user/profile-form', data);
  }

  /**
   * Retorna o perfil já preenchido do usuário autenticado.
   * @returns {Promise<{ course: string, otherCourseName: string|null, entryYear: number }>}
   */
  async getProfileForm() {
    return apiClient.get('user/profile-form');
  }
}

export const profileFormService = new ProfileFormService();
