import { useNavigate } from 'react-router-dom';
import { Search, X, Loader2, FileText, Calendar, Newspaper } from 'lucide-react';
import { useHeaderSearch } from '@/shared/hooks/useHeaderSearch';
import { Input } from '@/components/ui/input';
import { useRef, useEffect } from 'react';

export function HeaderSearchBar() {
  const navigate = useNavigate();
  const { query, results, loading, isOpen, handleQueryChange, closeDropdown, clearSearch } = useHeaderSearch();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  const handleResultClick = (result) => {
    let path = '/';
    
    switch (result.type) {
      case 'news':
        path = `/noticias/${result.id}`;
        break;
      case 'manual':
        path = `/manual?page=${result.slug || result.id}`;
        break;
      case 'event':
        path = `/eventos/${result.id}`;
        break;
      default:
        path = '/';
    }

    navigate(path);
    clearSearch();
    inputRef.current?.blur();
  };

  const getIcon = (type) => {
    switch (type) {
      case 'news':
        return <Newspaper className="h-4 w-4 text-blue-500" />;
      case 'manual':
        return <FileText className="h-4 w-4 text-green-500" />;
      case 'event':
        return <Calendar className="h-4 w-4 text-purple-500" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <div className="relative w-full max-w-xl" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Buscar notícias, eventos, manual..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-9 pr-9"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
        )}
        {query && !loading && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown de Resultados */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-popover border rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-3 hover:bg-accent text-left transition-colors flex items-start gap-3"
                >
                  <div className="mt-1">{getIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-medium">
                        {result.label}
                      </span>
                    </div>
                    <p className="font-medium text-sm truncate">
                      {result.title}
                    </p>
                    {result.excerpt && (
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {result.excerpt}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              Nenhum resultado encontrado
            </div>
          )}
        </div>
      )}
    </div>
  );
}
