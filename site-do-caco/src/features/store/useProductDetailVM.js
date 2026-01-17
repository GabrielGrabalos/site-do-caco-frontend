import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storeService } from '@/shared/services/storeService';

export function useProductDetailVM() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [slug]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await storeService.getPublicProductBySlug(slug);
      setProduct(data);
      
      // Seleciona a primeira variação disponível, se houver
      if (data.variations && data.variations.length > 0) {
        const firstAvailable = data.variations.find(v => v.available);
        setSelectedVariation(firstAvailable || data.variations[0]);
      }
    } catch (err) {
      if (err.message?.includes('404')) {
        setError('Produto não encontrado');
      } else {
        setError(err.message || 'Erro ao carregar produto');
      }
    } finally {
      setLoading(false);
    }
  };

  const selectVariation = (variation) => {
    setSelectedVariation(variation);
  };

  const nextImage = () => {
    if (product?.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (product?.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getTotalPrice = () => {
    if (!product) return 0;
    const basePrice = product.price || 0;
    const variationPrice = selectedVariation?.additionalPrice || 0;
    return basePrice + variationPrice;
  };

  const goBack = () => {
    navigate('/loja');
  };

  return {
    product,
    selectedVariation,
    currentImageIndex,
    loading,
    error,
    selectVariation,
    nextImage,
    previousImage,
    goToImage,
    getTotalPrice,
    goBack,
  };
}
