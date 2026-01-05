import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '@/shared/services/contentService';

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
      const data = await contentService.getNewsBySlug(slug);
      setArticle(data);
    } catch (err) {
      setError(err.message);
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
