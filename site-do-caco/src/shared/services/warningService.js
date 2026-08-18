/**
 * Serviço para gerenciamento de Warnings (Avisos)
 */

import { httpClient } from '@/shared/lib/http';

class WarningService {
  /**
   * Busca todos os avisos ativos
   */
  async getActiveWarnings() {
    return httpClient.get('admin/warnings/active');
  }

  /**
   * Busca todos os avisos (admin)
   */
  async getAllWarnings() {
    return httpClient.get('admin/warnings');
  }

  /**
   * Busca um aviso por ID (admin)
   */
  async getWarningById(id) {
    return httpClient.get(`admin/warnings/${id}`);
  }

  /**
   * Cria um novo aviso (admin)
   * @param {Object} createDTO - { markdownText, severityLevel, startsAt, expiresAt }
   */
  async createWarning(createDTO) {
    return httpClient.post('admin/warnings', createDTO);
  }

  /**
   * Atualiza um aviso (admin)
   */
  async updateWarning(id, updateDTO) {
    return httpClient.put(`admin/warnings/${id}`, updateDTO);
  }

  /**
   * Exclui um aviso (admin)
   */
  async deleteWarning(id) {
    return httpClient.delete(`admin/warnings/${id}`);
  }

  /**
   * Força um aviso a expirar (admin)
   */
  async expireWarning(id) {
    return httpClient.put(`admin/warnings/${id}/expire`);
  }
}
// Instância singleton do serviço
export const warningService = new WarningService();
