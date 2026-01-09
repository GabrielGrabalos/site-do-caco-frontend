import { Button } from '@/components/ui/button';
import { X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const EXAM_TYPES = [
  { value: 'P1', label: 'P1', color: 'bg-blue-600' },
  { value: 'P2', label: 'P2', color: 'bg-green-600' },
  { value: 'P3', label: 'P3', color: 'bg-purple-600' },
  { value: 'EXAME', label: 'EXAME', color: 'bg-red-600' },
  { value: 'SUB', label: 'SUB', color: 'bg-orange-600' },
  { value: 'OUTROS', label: 'OUTROS', color: 'bg-gray-600' },
];

// Gera cores diferentes para as matérias
const SUBJECT_COLORS = [
  'bg-blue-600',
  'bg-green-600',
  'bg-purple-600',
  'bg-pink-600',
  'bg-indigo-600',
  'bg-teal-600',
  'bg-cyan-600',
  'bg-rose-600',
  'bg-amber-600',
  'bg-lime-600',
];

export function ExamFilters({
  subjects,
  selectedSubject,
  setSelectedSubject,
  selectedYear,
  setSelectedYear,
  selectedType,
  setSelectedType,
  availableYears,
  clearFilters,
  hasActiveFilters,
}) {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const yearDropdownRef = useRef(null);

  const getSubjectColor = (index) => {
    return SUBJECT_COLORS[index % SUBJECT_COLORS.length];
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setIsYearDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getYearLabel = () => {
    if (selectedYear === 'all') return 'Todos os anos';
    return selectedYear;
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Filtro de Disciplinas - Tags Coloridas */}
      <div>
        <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Disciplina</label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              selectedSubject === 'all'
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-blue-600/20 text-blue-700 dark:bg-blue-600/30 dark:text-blue-400 hover:bg-blue-600/30 dark:hover:bg-blue-600/40'
            }`}
          >
            Todas
          </button>
          {subjects.map((subject, index) => {
            const color = getSubjectColor(index);
            const isSelected = selectedSubject === subject.subjectCode;
            return (
              <button
                key={subject.subjectCode}
                onClick={() => setSelectedSubject(subject.subjectCode)}
                className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                  isSelected
                    ? `${color} text-white shadow-md scale-105`
                    : `${color}/20 hover:${color}/30`
                }`}
                style={
                  !isSelected
                    ? {
                        color: `rgb(${
                          color.includes('blue')
                            ? '37, 99, 235'
                            : color.includes('green')
                            ? '22, 163, 74'
                            : color.includes('purple')
                            ? '147, 51, 234'
                            : color.includes('pink')
                            ? '219, 39, 119'
                            : color.includes('indigo')
                            ? '99, 102, 241'
                            : color.includes('teal')
                            ? '20, 184, 166'
                            : color.includes('cyan')
                            ? '8, 145, 178'
                            : color.includes('rose')
                            ? '244, 63, 94'
                            : color.includes('amber')
                            ? '217, 119, 6'
                            : '132, 204, 22'
                        })`,
                      }
                    : undefined
                }
                title={`${subject.subjectCode} - ${subject.name}`}
              >
                <span className="font-mono font-semibold">{subject.subjectCode}</span>
                <span className="mx-1">·</span>
                <span className="max-w-[100px] inline-block truncate align-bottom">
                  {subject.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtro de Tipo e Ano - Lado a lado */}
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* Filtro de Tipo - Tags Coloridas */}
        <div className="flex-1">
          <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Tipo de Prova</label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-gray-600 text-white shadow-md scale-105'
                  : 'bg-gray-600/20 text-gray-700 dark:bg-gray-600/30 dark:text-gray-400 hover:bg-gray-600/30 dark:hover:bg-gray-600/40'
              }`}
            >
              Todos
            </button>
            {EXAM_TYPES.map((type) => {
              const isSelected = selectedType === type.value;
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? `${type.color} text-white shadow-md scale-105`
                      : `${type.color}/20 hover:${type.color}/30`
                  }`}
                  style={
                    !isSelected
                      ? {
                          color: type.color.includes('blue')
                            ? 'rgb(37, 99, 235)'
                            : type.color.includes('green')
                            ? 'rgb(22, 163, 74)'
                            : type.color.includes('purple')
                            ? 'rgb(147, 51, 234)'
                            : type.color.includes('red')
                            ? 'rgb(220, 38, 38)'
                            : type.color.includes('orange')
                            ? 'rgb(234, 88, 12)'
                            : 'rgb(75, 85, 99)',
                        }
                      : undefined
                  }
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtro de Ano - Dropdown bonito */}
        <div className="flex items-center gap-3">
          <div className="relative" ref={yearDropdownRef}>
            <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Ano</label>
            <button
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="min-w-[160px] px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors flex items-center justify-between shadow-sm"
            >
              <span className="text-gray-700 dark:text-gray-300">{getYearLabel()}</span>
              <ChevronDown
                size={16}
                className={`text-gray-500 dark:text-gray-400 transition-transform ${
                  isYearDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isYearDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedYear('all');
                    setIsYearDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${
                    selectedYear === 'all'
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Todos os anos
                </button>
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(String(year));
                      setIsYearDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${
                      selectedYear === String(year)
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão de limpar filtros */}
          {hasActiveFilters && (
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs"
              >
                <X size={14} />
                Limpar
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
