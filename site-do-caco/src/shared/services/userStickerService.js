import { apiClient } from './apiClient';

/**
 * Serviço para gerenciar stickers do usuário
 */
export const userStickerService = {
    /**
     * Resgata um sticker usando código de resgate
     * @param {string} code - Código de resgate (8-12 caracteres)
     * @returns {Promise<{sticker: Object, obtainedAt: string}>}
     */
    async claimSticker(code) {
        const response = await apiClient.post('/user/stickers/claim', { code });
        return response;
    },

    /**
     * Busca stickers do usuário com paginação
     * @param {number} page - Número da página (0-indexed)
     * @param {number} size - Quantidade de itens por página
     * @returns {Promise<{content: Array, totalPages: number, totalElements: number}>}
     */
    async getMyStickers(page = 0, size = 20) {
        const response = await apiClient.get('/user/stickers', {
            params: { page, size }
        });
        return response;
    },
};
