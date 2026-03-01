import { useState, useEffect } from 'react';
import { newsService } from '@/shared/services/newsService';

export function useNewsListVM() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNews();
  }, [page]);

  const loadNews = async () => {
    try {
      setLoading(true);
      const response = await newsService.getNewsList(page, 10);
      
      // Spring Pageable response structure
      const items = response.content || response.items || response.data || [];
      
      if (page === 0) {
        setNews(items);
      } else {
        setNews(prev => [...prev, ...items]);
      }
      
      // Check if there are more pages
      setHasMore(!response.last);
    } catch (err) {
      setError(err.message || 'Erro ao carregar notícias');
      console.error('Erro ao carregar notícias:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return {
    news,
    loading,
    error,
    hasMore,
    loadMore,
  };
}

