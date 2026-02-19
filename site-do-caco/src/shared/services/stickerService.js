/**
 * Serviço para gerenciar operações de stickers
 * Endpoints: GET /api/public/stickers, POST /api/admin/stickers, etc.
 */

import { apiClient } from './apiClient';

class StickerService {
  /**
   * GET /api/public/stickers
   * Lista todos os stickers usando o endpoint público
   * @param {number} page - Número da página (default: 0)
   * @param {number} size - Tamanho da página (default: 100)
   * @returns {Promise<Object>} Page<StickerPublicDTO>
   */
  async getAllStickers(page = 0, size = 100) {
    return apiClient.get(`public/stickers?page=${page}&size=${size}`);
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
    
    // Adiciona campos do DTO diretamente ao FormData
    formData.append('name', dto.name);
    
    if (dto.description) {
      formData.append('description', dto.description);
    }
    
    // Adiciona a imagem (obrigatória)
    formData.append('image', imageFile);
    
    // Adiciona originEventId se fornecido
    if (dto.originEventId) {
      formData.append('originEventId', dto.originEventId);
    }

    return apiClient.postFormData('admin/stickers', formData);
  }

  /**
   * PUT /api/admin/stickers/{stickerId}
   * Atualiza um sticker existente
   * @param {string} stickerId - UUID do sticker
   * @param {Object} dto - { name, description, originEventId }
   * @param {File} [imageFile] - Arquivo de imagem (opcional)
   * @returns {Promise<Object>} Sticker atualizado
   */
  async updateSticker(stickerId, dto, imageFile) {
    const formData = new FormData();
    
    // Adiciona campos do DTO diretamente ao FormData
    formData.append('name', dto.name);
    
    if (dto.description !== undefined) {
      formData.append('description', dto.description || '');
    }
    
    // Adiciona a imagem se fornecida (opcional na edição)
    if (imageFile) {
      formData.append('image', imageFile);
    }
    
    // Adiciona originEventId (pode ser null para desassociar)
    if (dto.originEventId !== undefined) {
      formData.append('originEventId', dto.originEventId || '');
    }

    return apiClient.putFormData(`admin/stickers/${stickerId}`, formData);
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
   * GET /api/admin/stickers/{stickerId}/codes
   * Lista todos os códigos de redemption do sticker
   * @param {string} stickerId - UUID do sticker
   * @returns {Promise<Array>} Lista de RedemptionCodeDTO
   */
  async getStickerCodes(stickerId) {
    return apiClient.get(`admin/stickers/${stickerId}/codes`);
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
   * @param {number} page - Número da página (default: 0)
   * @param {number} size - Tamanho da página (default: 100)
   * @returns {Promise<Object>} Page<StickerPublicDTO>
   */
  async getUserStickers(page = 0, size = 100) {
    return apiClient.get(`private/stickers?page=${page}&size=${size}`);
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
