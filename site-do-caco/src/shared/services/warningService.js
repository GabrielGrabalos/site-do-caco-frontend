/**
 * Serviço para gerenciamento de Warnings (Avisos)
 */

import { apiClient } from './apiClient';

class WarningService {
  /**
   * Busca todos os avisos ativos
   */
  async getActiveWarnings() {
    return apiClient.get('/admin/warnings/active');
  }

  /**
   * Busca todos os avisos (admin)
   */
  async getAllWarnings() {
    return apiClient.get('/admin/warnings');
  }

  /**
   * Busca um aviso por ID (admin)
   */
  async getWarningById(id) {
    return apiClient.get(`/admin/warnings/${id}`);
  }

  /**
   * Cria um novo aviso (admin)
   * @param {Object} createDTO - { markdownText, severityLevel, startsAt, expiresAt }
   */
  async createWarning(createDTO) {
    return apiClient.post('/admin/warnings', createDTO);
  }

  /**
   * Atualiza um aviso (admin)
   */
  async updateWarning(id, updateDTO) {
    return apiClient.put(`/admin/warnings/${id}`, updateDTO);
  }

  /**
   * Exclui um aviso (admin)
   */
  async deleteWarning(id) {
    return apiClient.delete(`/admin/warnings/${id}`);
  }
}

// Instância singleton do serviço
export const warningService = new WarningService();
