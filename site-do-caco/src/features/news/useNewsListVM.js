import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';

export function useNewsListVM() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNews();
  }, [page]);

  const loadNews = async () => {
    try {
      setLoading(true);
      const data = await contentService.getNewsList(page, 10);
      
      if (page === 1) {
        setNews(data.items);
      } else {
        setNews(prev => [...prev, ...data.items]);
      }
      
      setHasMore(data.hasMore);
    } catch (err) {
      setError(err.message);
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
