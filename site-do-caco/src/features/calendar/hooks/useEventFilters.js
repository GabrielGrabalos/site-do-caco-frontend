import { useState, useMemo } from 'react';

/**
 * Hook para gerenciar filtros de eventos
 */
export function useEventFilters(events) {
  const [filters, setFilters] = useState({
    type: null,
    importance: null,
    status: null,
    searchTerm: '',
  });

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Filtro por tipo
      if (filters.type && event.type !== filters.type) {
        return false;
      }

      // Filtro por importância
      if (filters.importance && event.importance !== filters.importance) {
        return false;
      }

      // Filtro por status
      if (filters.status && event.status !== filters.status) {
        return false;
      }

      // Filtro por termo de busca
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesTitle = event.title?.toLowerCase().includes(searchLower);
        const matchesDescription = event.description?.toLowerCase().includes(searchLower);
        const matchesLocation = event.location?.toLowerCase().includes(searchLower);
        
        if (!matchesTitle && !matchesDescription && !matchesLocation) {
          return false;
        }
      }

      return true;
    });
  }, [events, filters]);

  const clearFilters = () => {
    setFilters({
      type: null,
      importance: null,
      status: null,
      searchTerm: '',
    });
  };

  const setSearchTerm = (term) => {
    setFilters((prev) => ({ ...prev, searchTerm: term }));
  };

  return {
    filters,
    setFilters,
    filteredEvents,
    clearFilters,
    setSearchTerm,
    hasActiveFilters: filters.type || filters.importance || filters.status || filters.searchTerm,
  };
}
