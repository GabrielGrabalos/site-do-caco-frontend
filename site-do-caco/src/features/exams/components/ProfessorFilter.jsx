import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

/**
 * Combobox de professor somente-leitura para a página pública.
 * Sem opções de criação/edição/exclusão.
 * Implementa scroll infinito para carregar mais professores.
 * Suporta busca por nome com debounce.
 */
export function ProfessorFilter({ 
  professors, 
  selectedProfessorId, 
  onSelect, 
  onLoadMore,
  hasMoreProfessors,
  loadingMore,
  onSearch
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const debounceTimeoutRef = useRef(null);

  const selectedProfessor = professors.find((p) => p.id === selectedProfessorId) || null;

  // Debounce search - chama onSearch após 500ms de inatividade
  const handleSearchChange = (value) => {
    setSearch(value);
    
    // Limpa timeout anterior
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (value.trim()) {
      setIsSearching(true);
      debounceTimeoutRef.current = setTimeout(() => {
        onSearch?.(value);
      }, 500);
    } else {
      // Se vazio, carrega lista padrão
      onSearch?.('');
      setIsSearching(false);
    }
  };

  // Limpar debounce ao desmontar
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  // Atualiza isSearching quando loadingMore muda
  useEffect(() => {
    if (!loadingMore) {
      setIsSearching(false);
    }
  }, [loadingMore]);

  // Reseta busca quando filtro de professor é alterado
  useEffect(() => {
    if (!selectedProfessorId) {
      setSearch('');
    }
  }, [selectedProfessorId]);

  const filtered = professors.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Detecta scroll ao fim da lista para carregar mais
  useEffect(() => {
    const handleScroll = (e) => {
      if (!listRef.current || loadingMore) return;
      
      const list = listRef.current;
      const isAtBottom = list.scrollHeight - list.scrollTop <= list.clientHeight + 5;
      
      if (isAtBottom && hasMoreProfessors) {
        onLoadMore?.();
      }
    };

    const list = listRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => list.removeEventListener('scroll', handleScroll);
    }
  }, [hasMoreProfessors, loadingMore, onLoadMore]);

  const handleSelect = (professor) => {
    onSelect(professor.id === selectedProfessorId ? null : professor.id);
    // Não fecha o dropdown - permite múltiplas seleções
    setSearch('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onSelect(null);
  };

  if (professors.length === 0) return null;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none transition-colors shadow-sm"
      >
        <span
          className={
            selectedProfessor
              ? 'text-gray-900 dark:text-gray-100 font-medium'
              : 'text-gray-500 dark:text-gray-400'
          }
        >
          {selectedProfessor ? selectedProfessor.name : 'Todos os professores'}
        </span>
        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
          {selectedProfessor && (
            <span
              role="button"
              onClick={handleClear}
              className="p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={13} />
            </span>
          )}
          <ChevronDown
            size={13}
            className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <div className="p-2 border-b dark:border-gray-700 relative">
            <div className="flex items-center relative">
              {search && (
                <Search size={14} className="absolute left-2.5 text-gray-400 pointer-events-none" />
              )}
              <Input
                autoFocus
                placeholder="Buscar professor..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={`h-8 text-sm ${search ? 'pl-7 pr-7' : ''}`}
                onClick={(e) => e.stopPropagation()}
              />
              {isSearching && (
                <div className="absolute right-2.5 flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
          <ul ref={listRef} className="max-h-48 overflow-y-auto py-1">
            {filtered.length === 0 && !isSearching ? (
              <li className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500 text-center">
                Nenhum professor encontrado
              </li>
            ) : (
              <>
                {filtered.map((professor) => (
                  <li
                    key={professor.id}
                    onClick={() => handleSelect(professor)}
                    className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
                      selectedProfessorId === professor.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {professor.name}
                  </li>
                ))}
                {loadingMore && (
                  <li className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500 text-center flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin" />
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
