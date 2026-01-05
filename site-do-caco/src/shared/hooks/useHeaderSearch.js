import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';
import { debounce } from '@/shared/utils/helpers';

export function useHeaderSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchContent = debounce(async () => {
      setLoading(true);
      try {
        // Buscar em diferentes categorias
        const [newsResults, manualResults, eventsResults] = await Promise.all([
          contentService.getNews({ search: query, limit: 3 }),
          contentService.getManualPages({ search: query, limit: 3 }),
          contentService.getEvents({ search: query, limit: 3 }),
        ]);

        const combinedResults = [
          ...newsResults.data.map(item => ({ ...item, type: 'news', label: 'Notícia' })),
          ...manualResults.data.map(item => ({ ...item, type: 'manual', label: 'Manual' })),
          ...eventsResults.data.map(item => ({ ...item, type: 'event', label: 'Evento' })),
        ];

        setResults(combinedResults);
        setIsOpen(combinedResults.length > 0);
      } catch (error) {
        console.error('Erro ao buscar:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    searchContent();
  }, [query]);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return {
    query,
    results,
    loading,
    isOpen,
    handleQueryChange,
    closeDropdown,
    clearSearch,
  };
}
