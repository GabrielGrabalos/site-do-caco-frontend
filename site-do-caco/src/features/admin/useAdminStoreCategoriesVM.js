/**
 * ViewModel para gerenciamento de categorias da loja (Admin)
 */

import { useState, useEffect, useCallback } from 'react';
import { storeService } from '@/shared/services/storeService';

/**
 * @typedef {import('@/shared/types/dtos').StoreCategoryDTO} StoreCategoryDTO
 */

export function useAdminStoreCategoriesVM() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Carrega todas as categorias
   */
  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await storeService.getAllCategories();
      setCategories(data);
      // Seleciona a primeira categoria por padrão
      if (data.length > 0 && !selectedCategory) {
        setSelectedCategory(data[0]);
      }
      return { success: true };
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
      setError(err.message || 'Erro ao carregar categorias');
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  /**
   * Seleciona uma categoria
   * @param {StoreCategoryDTO} category
   */
  const selectCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  /**
   * Cria uma nova categoria
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.slug
   */
  const createCategory = useCallback(async (data) => {
    try {
      setIsCreating(true);
      const newCategory = await storeService.createCategory(data);
      setCategories(prev => [...prev, newCategory]);
      // Seleciona a nova categoria
      setSelectedCategory(newCategory);
      return { success: true, data: newCategory };
    } catch (err) {
      console.error('Erro ao criar categoria:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Atualiza uma categoria existente
   * @param {string} id
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.slug
   */
  const updateCategory = useCallback(async (id, data) => {
    try {
      const updatedCategory = await storeService.updateCategory(id, data);
      setCategories(prev =>
        prev.map(cat => (cat.id === id ? updatedCategory : cat))
      );
      return { success: true, data: updatedCategory };
    } catch (err) {
      console.error('Erro ao atualizar categoria:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma categoria
   * @param {string} id
   */
  const deleteCategory = useCallback(async (id) => {
    try {
      await storeService.deleteCategory(id);
      setCategories(prev => prev.filter(cat => cat.id !== id));
      // Se a categoria removida era a selecionada, seleciona a primeira
      if (selectedCategory?.id === id) {
        const remaining = categories.filter(cat => cat.id !== id);
        setSelectedCategory(remaining.length > 0 ? remaining[0] : null);
      }
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover categoria:', err);
      return { success: false, error: err.message };
    }
  }, [selectedCategory, categories]);

  /**
   * Reordena as categorias
   * @param {string[]} categoryIds - Array de IDs na nova ordem
   */
  const reorderCategories = useCallback(async (categoryIds) => {
    try {
      await storeService.reorderCategories(categoryIds);
      // Reordena localmente
      const reordered = categoryIds.map((id, index) => {
        const cat = categories.find(c => c.id === id);
        return { ...cat, order: index };
      });
      setCategories(reordered);
      return { success: true };
    } catch (err) {
      console.error('Erro ao reordenar categorias:', err);
      return { success: false, error: err.message };
    }
  }, [categories]);

  // Carrega categorias ao montar
  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return {
    categories,
    selectedCategory,
    isLoading,
    isCreating,
    error,
    loadCategories,
    selectCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
  };
}
