import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { newsService } from '@/shared/services/newsService';

export function useNewsDetailVM() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const data = await newsService.getNewsBySlug(slug);
      setArticle(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar notícia');
      console.error('Erro ao carregar notícia:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    article,
    loading,
    error,
  };
}

