/**
 * Serviço para gerenciamento da loja
 * Endpoints para categorias, produtos e variações
 */

import { apiClient } from './apiClient';

/**
 * @typedef {import('../types/dtos').StoreCategoryDTO} StoreCategoryDTO
 * @typedef {import('../types/dtos').ProductSummaryDTO} ProductSummaryDTO
 * @typedef {import('../types/dtos').ProductDetailDTO} ProductDetailDTO
 * @typedef {import('../types/dtos').ProductDetailAdminDTO} ProductDetailAdminDTO
 * @typedef {import('../types/dtos').ProductVariationDTO} ProductVariationDTO
 * @typedef {import('../types/dtos').CreateStoreCategoryDTO} CreateStoreCategoryDTO
 * @typedef {import('../types/dtos').UpdateStoreCategoryDTO} UpdateStoreCategoryDTO
 * @typedef {import('../types/dtos').CreateProductDTO} CreateProductDTO
 * @typedef {import('../types/dtos').UpdateProductDTO} UpdateProductDTO
 * @typedef {import('../types/dtos').CreateProductVariationDTO} CreateProductVariationDTO
 * @typedef {import('../types/dtos').UpdateProductVariationDTO} UpdateProductVariationDTO
 */

class StoreService {
    // ============= ADMIN - CATEGORIAS =============

    /**
     * Busca todas as categorias (admin)
     * @returns {Promise<StoreCategoryDTO[]>}
     */
    async getAllCategories() {
        return await apiClient.get('/admin/store/categories');
    }

    /**
     * Cria uma nova categoria
     * @param {CreateStoreCategoryDTO} data
     * @returns {Promise<StoreCategoryDTO>}
     */
    async createCategory(data) {
        return await apiClient.post('/admin/store/categories', data);
    }

    /**
     * Atualiza uma categoria
     * @param {string} id - UUID da categoria
     * @param {UpdateStoreCategoryDTO} data
     * @returns {Promise<StoreCategoryDTO>}
     */
    async updateCategory(id, data) {
        return await apiClient.put(`/admin/store/categories/${id}`, data);
    }

    /**
     * Remove uma categoria
     * @param {string} id - UUID da categoria
     * @returns {Promise<void>}
     */
    async deleteCategory(id) {
        return await apiClient.delete(`/admin/store/categories/${id}`);
    }

    /**
     * Reordena categorias
     * @param {string[]} categoryIds - Array de IDs na ordem desejada
     * @returns {Promise<void>}
     */
    async reorderCategories(categoryIds) {
        return await apiClient.post('/admin/store/categories/reorder', categoryIds);
    }

    // ============= ADMIN - PRODUTOS =============

    /**
     * Busca todos os produtos (admin)
     * @returns {Promise<ProductDetailAdminDTO[]>}
     */
    async getAllProducts() {
        return await apiClient.get('/admin/store/products');
    }

    /**
     * Busca detalhes de um produto (admin)
     * @param {string} id - UUID do produto
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async getProductById(id) {
        return await apiClient.get(`/admin/store/products/${id}`);
    }

    /**
     * Cria um novo produto com imagens
     * @param {Object} data - Dados do produto
     * @param {File[]} imageFiles - Array de arquivos de imagem
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async createProduct(data) {
        return await apiClient.post('/admin/store/products', data);
    }

    /**
     * Atualiza um produto com novas imagens
     * @param {string} id - UUID do produto
     * @param {Object} data - Dados atualizados do produto
     * @param {File[]} imageFiles - Array de novos arquivos de imagem
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async updateProduct(id, data) {
        return await apiClient.put(`/admin/store/products/${id}`, data);
    }

    /**
     * Remove um produto
     * @param {string} id - UUID do produto
     * @returns {Promise<void>}
     */
    async deleteProduct(id) {
        return await apiClient.delete(`/admin/store/products/${id}`);
    }

    // ============= IMAGENS DO PRODUTO =============

    /**
     * Adiciona uma imagem ao produto
     * @param {string} productId - UUID do produto
     * @param {File} imageFile - Arquivo de imagem
     * @returns {Promise<Object>} Dados da imagem criada
     */
    async addProductImage(productId, imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        return await apiClient.postFormData(`/admin/store/products/${productId}/images`, formData);
    }

    /**
     * Lista todas as imagens do produto
     * @param {string} productId - UUID do produto
     * @returns {Promise<Array>} Lista de imagens
     */
    async getProductImages(productId) {
        return await apiClient.get(`/admin/store/products/${productId}/images`);
    }

    /**
     * Remove uma imagem específica
     * @param {string} imageId - UUID da imagem
     * @returns {Promise<void>}
     */
    async deleteProductImage(imageId) {
        return await apiClient.delete(`/admin/store/images/${imageId}`);
    }

    /**
     * Reordena as imagens do produto
     * @param {string} productId - UUID do produto
     * @param {string[]} imageIds - Array de IDs na ordem desejada
     * @returns {Promise<void>}
     */
    async reorderProductImages(productId, imageIds) {
        return await apiClient.post(`/admin/store/products/${productId}/images/reorder`, imageIds);
    }

    // ============= ADMIN - VARIAÇÕES =============

    /**
     * Adiciona uma variação a um produto
     * @param {string} productId - UUID do produto
     * @param {CreateProductVariationDTO} data
     * @returns {Promise<ProductVariationDTO>}
     */
    async createVariation(productId, data) {
        return await apiClient.post(`/admin/store/products/${productId}/variations`, data);
    }

    /**
     * Atualiza uma variação
     * @param {string} variationId - UUID da variação
     * @param {UpdateProductVariationDTO} data
     * @returns {Promise<ProductVariationDTO>}
     */
    async updateVariation(variationId, data) {
        return await apiClient.put(`/admin/store/variations/${variationId}`, data);
    }

    /**
     * Remove uma variação
     * @param {string} variationId - UUID da variação
     * @returns {Promise<void>}
     */
    async deleteVariation(variationId) {
        return await apiClient.delete(`/admin/store/variations/${variationId}`);
    }

    // ============= PÚBLICOS =============

    /**
     * Busca todas as categorias (público)
     * @returns {Promise<StoreCategoryDTO[]>}
     */
    async getPublicCategories() {
        return await apiClient.get('/public/store/categories');
    }

    /**
     * Busca produtos de uma categoria por slug (público)
     * @param {string} categorySlug
     * @returns {Promise<ProductSummaryDTO[]>}
     */
    async getPublicProductsByCategory(categorySlug) {
        return await apiClient.get(`/public/store/categories/${categorySlug}/products`);
    }

    /**
     * Busca detalhes de um produto por slug (público)
     * @param {string} productSlug
     * @returns {Promise<ProductDetailDTO>}
     */
    async getPublicProductBySlug(productSlug) {
        return await apiClient.get(`/public/store/products/slug/${productSlug}`);
    }

    /**
     * Busca produtos por palavra-chave (público)
     * @param {string} keyword
     * @returns {Promise<ProductSummaryDTO[]>}
     */
    async searchPublicProducts(keyword) {
        return await apiClient.get(`/public/store/search?keyword=${encodeURIComponent(keyword)}`);
    }
}

export const storeService = new StoreService();
export default storeService;
