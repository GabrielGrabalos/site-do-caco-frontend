import { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ProfessorFilter } from './ProfessorFilter';

const EXAM_TYPES = [
  { value: 'P1',     label: 'P1',     rgb: '37, 99, 235' },
  { value: 'P2',     label: 'P2',     rgb: '5, 150, 105' },
  { value: 'P3',     label: 'P3',     rgb: '124, 58, 237' },
  { value: 'EXAME',  label: 'EXAME',  rgb: '220, 38, 38' },
  { value: 'SUB',    label: 'SUB',    rgb: '234, 88, 12' },
  { value: 'OUTROS', label: 'OUTROS', rgb: '75, 85, 99' },
];

// One RGB string per group — determines prefix pill colour
const GROUP_COLORS = [
  '37, 99, 235',    // blue-600
  '5, 150, 105',    // emerald-600
  '124, 58, 237',   // violet-600
  '225, 29, 72',    // rose-600
  '245, 158, 11',   // amber-500
  '8, 145, 178',    // cyan-600
  '219, 39, 119',   // pink-600
  '79, 70, 229',    // indigo-600
  '13, 148, 136',   // teal-600
  '234, 88, 12',    // orange-600
];

// Rich palette that individual subject pills cycle through
const PILL_PALETTE = [
  '37, 99, 235',    // blue-600
  '219, 39, 119',   // pink-600
  '5, 150, 105',    // emerald-600
  '245, 158, 11',   // amber-500
  '124, 58, 237',   // violet-600
  '8, 145, 178',    // cyan-600
  '220, 38, 38',    // red-600
  '13, 148, 136',   // teal-600
  '79, 70, 229',    // indigo-600
  '234, 88, 12',    // orange-600
  '22, 163, 74',    // green-600
  '225, 29, 72',    // rose-600
  '14, 165, 233',   // sky-500
  '202, 138, 4',    // yellow-600
  '147, 51, 234',   // purple-600
  '20, 184, 166',   // teal-500
  '249, 115, 22',   // orange-500
  '59, 130, 246',   // blue-500
  '168, 85, 247',   // purple-400
  '16, 185, 129',   // emerald-500
];

export function ExamFilters({
  subjects,
  professors,
  selectedSubject,
  setSelectedSubject,
  selectedProfessorId,
  setSelectedProfessorId,
  selectedYear,
  setSelectedYear,
  selectedType,
  setSelectedType,
  availableYears,
  clearFilters,
  hasActiveFilters,
  activeFilterCount,
}) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedPrefix, setExpandedPrefix] = useState(null);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const yearRef = useRef(null);

  // Group subjects by 2-letter prefix, sorted numerically within each group
  const subjectGroups = useMemo(() => {
    const groups = {};
    subjects.forEach((subject) => {
      const prefix = subject.subjectCode.slice(0, 2).toUpperCase();
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push(subject);
    });
    Object.values(groups).forEach((group) => {
      group.sort((a, b) => {
        const numA = parseInt(a.subjectCode.slice(2)) || 0;
        const numB = parseInt(b.subjectCode.slice(2)) || 0;
        return numA - numB;
      });
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [subjects]);

  // Close year dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (yearRef.current && !yearRef.current.contains(e.target))
        setYearDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Auto-expand the prefix group of the currently selected subject
  useEffect(() => {
    if (selectedSubject !== 'all') {
      setExpandedPrefix(selectedSubject.slice(0, 2).toUpperCase());
    }
  }, [selectedSubject]);

  const getGroupRgb = (index) => GROUP_COLORS[index % GROUP_COLORS.length];

  // Each pill gets a colour offset by group so adjacent groups don't repeat the same sequence
  const getPillRgb = (groupIndex, pillIndex) =>
    PILL_PALETTE[(groupIndex * 4 + pillIndex) % PILL_PALETTE.length];

  const handlePrefixClick = (prefix) => {
    setExpandedPrefix((prev) => (prev === prefix ? null : prefix));
  };

  const handleSubjectClick = (subjectCode) => {
    setSelectedSubject(subjectCode === selectedSubject ? 'all' : subjectCode);
  };

  const expandedGroupIndex = subjectGroups.findIndex(([p]) => p === expandedPrefix);
  const expandedSubjects = subjectGroups[expandedGroupIndex]?.[1] || [];
  const expandedRgb = expandedGroupIndex >= 0 ? getGroupRgb(expandedGroupIndex) : null;

  return (
    <div className="mb-6">
      {/* ── Toggle bar ─────────────────────────────────────── */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all select-none ${
            filtersOpen
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400'
          }`}
        >
          <SlidersHorizontal size={15} />
          <span>Filtros</span>
          {activeFilterCount > 0 && (
            <span
              className={`min-w-[18px] h-[18px] text-[11px] font-bold rounded-full flex items-center justify-center px-1 ${
                filtersOpen ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
              }`}
            >
              {activeFilterCount}
            </span>
          )}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${filtersOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 border-2 border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <X size={13} />
            Limpar filtros
          </button>
        )}
      </div>

      {/* ── Filter panel ───────────────────────────────────── */}
      {filtersOpen && (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/70 p-4 shadow-sm space-y-4">

          {/* ── Subject ── */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Disciplina
            </p>

            {/* Prefix pills */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => { setSelectedSubject('all'); setExpandedPrefix(null); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                  selectedSubject === 'all'
                    ? 'bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Todas
              </button>

              {subjectGroups.map(([prefix, groupSubjects], index) => {
                const rgb = getGroupRgb(index);
                const isExpanded = expandedPrefix === prefix;
                const hasSelected = groupSubjects.some((s) => s.subjectCode === selectedSubject);
                const active = hasSelected || isExpanded;

                return (
                  <button
                    key={prefix}
                    onClick={() => handlePrefixClick(prefix)}
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1 transition-all hover:scale-105 hover:shadow-sm"
                    style={
                      active
                        ? { backgroundColor: `rgb(${rgb})`, color: 'white' }
                        : { backgroundColor: `rgba(${rgb}, 0.12)`, color: `rgb(${rgb})` }
                    }
                  >
                    {prefix}
                    <span className="text-[10px] opacity-70">{groupSubjects.length}</span>
                    <ChevronDown
                      size={9}
                      className={`transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Expanded subject pills — accent-bordered panel */}
            {expandedPrefix && expandedSubjects.length > 0 && (
              <div
                className="mt-2.5 pl-3 pr-2 py-2.5 rounded-r-xl rounded-bl-xl flex flex-wrap gap-1.5"
                style={{
                  borderLeft: `3px solid rgb(${expandedRgb})`,
                  background: `linear-gradient(to right, rgba(${expandedRgb}, 0.08), rgba(${expandedRgb}, 0.02))`,
                }}
              >
                {expandedSubjects.map((subject, pillIndex) => {
                  const isSelected = selectedSubject === subject.subjectCode;
                  const pillRgb = getPillRgb(expandedGroupIndex, pillIndex);
                  return (
                    <button
                      key={subject.subjectCode}
                      onClick={() => handleSubjectClick(subject.subjectCode)}
                      title={subject.name}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold transition-all hover:scale-[1.07] hover:shadow-md active:scale-100"
                      style={
                        isSelected
                          ? {
                              backgroundColor: `rgb(${pillRgb})`,
                              color: 'white',
                              boxShadow: `0 2px 8px rgba(${pillRgb}, 0.4)`,
                            }
                          : {
                              backgroundColor: `rgba(${pillRgb}, 0.15)`,
                              color: `rgb(${pillRgb})`,
                            }
                      }
                    >
                      {subject.subjectCode}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-gray-100 dark:border-gray-700/60" />

          {/* ── Type · Year · Professor — all in one row ── */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-start">

            {/* Type pills */}
            <div className="flex-1 min-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                Tipo de prova
              </p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                    selectedType === 'all'
                      ? 'bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
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
                      className="px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 hover:shadow-sm"
                      style={
                        isSelected
                          ? { backgroundColor: `rgb(${type.rgb})`, color: 'white' }
                          : { backgroundColor: `rgba(${type.rgb}, 0.15)`, color: `rgb(${type.rgb})` }
                      }
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Year dropdown */}
            <div className="shrink-0 w-36">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                Ano
              </p>
              <div className="relative" ref={yearRef}>
                <button
                  onClick={() => setYearDropdownOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-xs font-medium bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none transition-colors"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {selectedYear === 'all' ? 'Todos' : selectedYear}
                  </span>
                  <ChevronDown
                    size={13}
                    className={`text-gray-400 transition-transform ${yearDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {yearDropdownOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    <button
                      onClick={() => { setSelectedYear('all'); setYearDropdownOpen(false); }}
                      className={`w-full px-3 py-1.5 text-xs text-left transition-colors ${
                        selectedYear === 'all'
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      Todos os anos
                    </button>
                    {availableYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => { setSelectedYear(String(year)); setYearDropdownOpen(false); }}
                        className={`w-full px-3 py-1.5 text-xs text-left transition-colors ${
                          selectedYear === String(year)
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Professor combobox */}
            {professors && professors.length > 0 && (
              <div className="shrink-0 w-48">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                  Professor
                </p>
                <ProfessorFilter
                  professors={professors}
                  selectedProfessorId={selectedProfessorId}
                  onSelect={setSelectedProfessorId}
                />
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
