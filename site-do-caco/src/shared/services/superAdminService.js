/**
 * Serviço para operações exclusivas do Super Admin
 * Base URL: /api/super-admin
 */

import { apiClient } from './apiClient';

class SuperAdminService {
  /**
   * GET /api/super-admin/users
   * Lista todos os usuários paginado
   * @param {number} page - Número da página (default: 0)
   * @param {number} size - Tamanho da página (default: 10)
   * @param {string} sort - Ordenação (default: 'createdAt,desc')
   * @returns {Promise<Object>} Page<UserResponseDTO>
   */
  async getUsers(page = 0, size = 10, sort = 'createdAt,desc') {
    return apiClient.get(
      `super-admin/users?page=${page}&size=${size}&sort=${encodeURIComponent(sort)}`
    );
  }

  /**
   * GET /api/super-admin/users/{userId}
   * Retorna detalhes de um usuário específico
   * @param {string} userId - UUID do usuário
   * @returns {Promise<Object>} UserResponseDTO
   */
  async getUserById(userId) {
    return apiClient.get(`super-admin/users/${userId}`);
  }

  /**
   * PUT /api/super-admin/users/{userId}/role
   * Altera o role de um usuário
   * @param {string} userId - UUID do usuário
   * @param {string} role - Novo role: 'STUDENT' | 'EDITOR' | 'ADMIN'
   * @returns {Promise<Object>} UserResponseDTO
   */
  async changeUserRole(userId, role) {
    return apiClient.put(`super-admin/users/${userId}/role`, { role });
  }

  /**
   * PUT /api/super-admin/users/{userId}/suspend
   * Suspende a conta de um usuário
   * @param {string} userId - UUID do usuário
   * @returns {Promise<Object>} UserResponseDTO
   */
  async suspendUser(userId) {
    return apiClient.put(`super-admin/users/${userId}/suspend`);
  }

  /**
   * PUT /api/super-admin/users/{userId}/unsuspend
   * Reativa a conta de um usuário suspenso
   * @param {string} userId - UUID do usuário
   * @returns {Promise<Object>} UserResponseDTO
   */
  async unsuspendUser(userId) {
    return apiClient.put(`super-admin/users/${userId}/unsuspend`);
  }
}

export const superAdminService = new SuperAdminService();
