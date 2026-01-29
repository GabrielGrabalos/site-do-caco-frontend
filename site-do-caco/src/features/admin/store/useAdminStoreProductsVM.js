/**
 * ViewModel para gerenciamento de produtos da loja (Admin)
 */

import { useState, useEffect, useCallback } from 'react';
import { storeService } from '@/shared/services/storeService';

/**
 * @typedef {import('@/shared/types/dtos').ProductDetailAdminDTO} ProductDetailAdminDTO
 * @typedef {import('@/shared/types/dtos').ProductVariationDTO} ProductVariationDTO
 */

export function useAdminStoreProductsVM() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Carrega todos os produtos
   */
  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await storeService.getAllProducts();
      setProducts(data);
      return { success: true };
    } catch (err) {
      console.error('Erro ao carregar produtos:', err);
      setError(err.message || 'Erro ao carregar produtos');
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Busca um produto específico por ID
   * @param {string} id
   */
  const getProductById = useCallback(async (id) => {
    try {
      const product = await storeService.getProductById(id);
      return { success: true, data: product };
    } catch (err) {
      console.error('Erro ao buscar produto:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Cria um novo produto (sem imagens - adicione as imagens posteriormente)
   * @param {Object} data - Dados do produto
   */
  const createProduct = useCallback(async (data) => {
    try {
      setIsCreating(true);
      
      // Cria o produto sem imagens
      const newProduct = await storeService.createProduct(data);
      
      setProducts(prev => [...prev, newProduct]);
      return { success: true, data: newProduct };
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Atualiza um produto existente
   * @param {string} id
   * @param {Object} data - Dados atualizados do produto
   */
  const updateProduct = useCallback(async (id, data) => {
    try {
      setIsCreating(true);
      const updatedProduct = await storeService.updateProduct(id, data);
      setProducts(prev =>
        prev.map(product => (product.id === id ? updatedProduct : product))
      );
      return { success: true, data: updatedProduct };
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Remove um produto
   * @param {string} id
   */
  const deleteProduct = useCallback(async (id) => {
    try {
      await storeService.deleteProduct(id);
      setProducts(prev => prev.filter(product => product.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover produto:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Adiciona uma variação a um produto
   * @param {string} productId
   * @param {Object} data - Dados da variação
   */
  const createVariation = useCallback(async (productId, data) => {
    try {
      const newVariation = await storeService.createVariation(productId, data);
      // Atualiza o produto localmente adicionando a variação
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? { ...product, variations: [...product.variations, newVariation] }
            : product
        )
      );
      return { success: true, data: newVariation };
    } catch (err) {
      console.error('Erro ao criar variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Atualiza uma variação
   * @param {string} productId - ID do produto para atualizar localmente
   * @param {string} variationId - ID da variação
   * @param {Object} data - Dados atualizados da variação
   */
  const updateVariation = useCallback(async (productId, variationId, data) => {
    try {
      const updatedVariation = await storeService.updateVariation(variationId, data);
      // Atualiza o produto localmente
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? {
                ...product,
                variations: product.variations.map(v =>
                  v.id === variationId ? updatedVariation : v
                ),
              }
            : product
        )
      );
      return { success: true, data: updatedVariation };
    } catch (err) {
      console.error('Erro ao atualizar variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma variação
   * @param {string} productId - ID do produto para atualizar localmente
   * @param {string} variationId - ID da variação
   */
  const deleteVariation = useCallback(async (productId, variationId) => {
    try {
      await storeService.deleteVariation(variationId);
      // Atualiza o produto localmente removendo a variação
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? {
                ...product,
                variations: product.variations.filter(v => v.id !== variationId),
              }
            : product
        )
      );
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Adiciona uma imagem a um produto existente
   * @param {string} productId
   * @param {File} imageFile
   */
  const addProductImage = useCallback(async (productId, imageFile) => {
    try {
      const image = await storeService.addProductImage(productId, imageFile);
      // Recarrega o produto para atualizar as imagens
      const updatedProduct = await storeService.getProductById(productId);
      setProducts(prev => prev.map(p => p.id === productId ? updatedProduct : p));
      return { success: true, data: image };
    } catch (err) {
      console.error('Erro ao adicionar imagem:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Busca todas as imagens de um produto
   * @param {string} productId
   */
  const getProductImages = useCallback(async (productId) => {
    try {
      const images = await storeService.getProductImages(productId);
      return { success: true, data: images };
    } catch (err) {
      console.error('Erro ao buscar imagens:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma imagem de um produto
   * @param {string} productId
   * @param {string} imageId
   * @param {string} imageUrl - URL da imagem a ser removida
   */
  const deleteProductImage = useCallback(async (productId, imageId, imageUrl) => {
    try {
      await storeService.deleteProductImage(imageId);
      
      // Atualiza o produto localmente removendo a imagem
      if (imageUrl) {
        setProducts(prev =>
          prev.map(product =>
            product.id === productId
              ? { ...product, images: product.images.filter(img => img !== imageUrl) }
              : product
          )
        );
      }
      
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover imagem:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Reordena as imagens de um produto
   * @param {string} productId
   * @param {string[]} imageIds
   * @param {Array<{id: string, url: string, order: number}>} newImagesOrder - Array das imagens na nova ordem
   */
  const reorderProductImages = useCallback(async (productId, imageIds, newImagesOrder) => {
    try {
      await storeService.reorderProductImages(productId, imageIds);
      
      // Atualiza o produto localmente com a nova ordem das imagens
      if (newImagesOrder) {
        const imageUrls = newImagesOrder.map(img => img.url);
        setProducts(prev =>
          prev.map(product =>
            product.id === productId
              ? { ...product, images: imageUrls }
              : product
          )
        );
      }
      
      return { success: true };
    } catch (err) {
      console.error('Erro ao reordenar imagens:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // Carrega produtos ao montar
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    products,
    isLoading,
    isCreating,
    error,
    loadProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductImages,
    addProductImage,
    deleteProductImage,
    reorderProductImages,
    createVariation,
    updateVariation,
    deleteVariation,
  };
}
