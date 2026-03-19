import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

/**
 * Combobox de professor somente-leitura para a página pública.
 * Sem opções de criação/edição/exclusão.
 */
export function ProfessorFilter({ professors, selectedProfessorId, onSelect }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const selectedProfessor = professors.find((p) => p.id === selectedProfessorId) || null;

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

  const handleSelect = (professor) => {
    onSelect(professor.id === selectedProfessorId ? null : professor.id);
    setOpen(false);
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
          <div className="p-2 border-b dark:border-gray-700">
            <Input
              autoFocus
              placeholder="Buscar professor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-8 text-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <ul className="max-h-48 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500 text-center">
                Nenhum professor encontrado
              </li>
            ) : (
              filtered.map((professor) => (
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
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
