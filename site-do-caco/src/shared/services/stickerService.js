/**
 * Serviço para gerenciar operações de stickers
 * Endpoints: GET /api/public/stickers, POST /api/admin/stickers, etc.
 */

import { apiClient } from './apiClient';

class StickerService {
  /**
   * GET /api/public/stickers
   * Lista todos os stickers usando o endpoint público
   * @returns {Promise<Object>} { allStickers: [], myStickers: [] }
   */
  async getAllStickers() {
    return apiClient.get('public/stickers');
  }

  /**
   * POST /api/admin/stickers
   * Cria um novo sticker com upload de imagem
   * @param {Object} dto - { name, description, originEventId }
   * @param {File} imageFile - Arquivo de imagem
   * @returns {Promise<Object>} Sticker criado
   */
  async createSticker(dto, imageFile) {
    const formData = new FormData();
    
    // Adiciona o DTO como JSON blob
    const dtoBlob = new Blob([JSON.stringify(dto)], {
      type: 'application/json'
    });
    formData.append('dto', dtoBlob);
    
    // Adiciona a imagem
    formData.append('image', imageFile);

    return apiClient.postFormData('admin/stickers', formData);
  }

  /**
   * POST /api/admin/stickers/{stickerId}/codes
   * Gera códigos de resgate para um sticker
   * @param {Long} stickerId - ID do sticker
   * @param {Object} dto - { quantity, oneTimeUse, expiresAt }
   * @returns {Promise<Object>} { stickerId, codes[], ... }
   */
  async generateCodes(stickerId, dto) {
    return apiClient.post(`admin/stickers/${stickerId}/codes`, dto);
  }

  /**
   * GET /api/public/events/upcoming e /api/public/events/past
   * Busca eventos para seleção de sticker
   * @returns {Promise<Array>} Eventos combinados (upcoming + past)
   */
  async getEventsForSelection() {
    const [upcoming, past] = await Promise.all([
      apiClient.get('public/events/upcoming?size=50'),
      apiClient.get('public/events/past?size=20')
    ]);

    // Combina e retorna eventos
    return [
      ...(upcoming.content || []),
      ...(past.content || [])
    ];
  }

  /**
   * GET /api/private/stickers
   * Obtém stickers do usuário autenticado
   * @returns {Promise<Object>} Stickers do usuário
   */
  async getUserStickers() {
    return apiClient.get('private/stickers');
  }

  /**
   * POST /api/private/stickers/redeem
   * Resgata código de sticker
   * @param {string} code - Código a resgatar
   * @returns {Promise<Object>} Resultado do resgate
   */
  async redeemSticker(code) {
    return apiClient.post('private/stickers/redeem', { code });
  }
}

export const stickerService = new StickerService();
