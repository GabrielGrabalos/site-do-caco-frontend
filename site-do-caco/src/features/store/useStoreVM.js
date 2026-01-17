import { useState, useEffect } from 'react';
import { storeService } from '@/shared/services/storeService';

export function useStoreVM() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carrega categorias inicialmente
  useEffect(() => {
    loadCategories();
  }, []);

  // Carrega produtos quando categoria muda
  useEffect(() => {
    if (selectedCategory) {
      loadProducts(selectedCategory.slug);
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await storeService.getPublicCategories();
      setCategories(data);
      
      // Seleciona a primeira categoria por padrão
      if (data.length > 0) {
        setSelectedCategory(data[0]);
      }
    } catch (err) {
      setError(err.message || 'Erro ao carregar categorias');
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async (categorySlug) => {
    try {
      setError(null);
      const data = await storeService.getPublicProductsByCategory(categorySlug);
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar produtos');
    }
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    selectedCategory,
    products,
    loading,
    error,
    selectCategory,
  };
}
