import { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ProfessorFilter } from './ProfessorFilter';

// ── Constants ────────────────────────────────────────────────────────────────

const EXAM_TYPES = [
  { value: 'P1',     label: 'P1',     rgb: '37, 99, 235' },
  { value: 'P2',     label: 'P2',     rgb: '5, 150, 105' },
  { value: 'P3',     label: 'P3',     rgb: '124, 58, 237' },
  { value: 'EXAME',  label: 'Exame',  rgb: '220, 38, 38' },
  { value: 'TESTINHO', label: 'Testinho', rgb: '14, 116, 144' },
  { value: 'SUB',    label: 'Sub',    rgb: '234, 88, 12' },
  { value: 'OUTROS', label: 'Outros', rgb: '75, 85, 99' },
];

// Color assigned to each subject-group prefix pill
const GROUP_COLORS = [
  '37, 99, 235',   '5, 150, 105',  '124, 58, 237', '225, 29, 72',
  '245, 158, 11',  '8, 145, 178',  '219, 39, 119', '79, 70, 229',
  '13, 148, 136',  '234, 88, 12',
];

// Richer palette cycling per pill inside an expanded group
const PILL_PALETTE = [
  '37, 99, 235',  '219, 39, 119', '5, 150, 105',  '245, 158, 11',
  '124, 58, 237', '8, 145, 178',  '220, 38, 38',  '13, 148, 136',
  '79, 70, 229',  '234, 88, 12',  '22, 163, 74',  '225, 29, 72',
  '14, 165, 233', '202, 138, 4',  '147, 51, 234', '20, 184, 166',
  '249, 115, 22', '59, 130, 246', '168, 85, 247', '16, 185, 129',
];

// ── Small helpers ─────────────────────────────────────────────────────────────

const groupRgb  = (i) => GROUP_COLORS[i % GROUP_COLORS.length];
const pillRgb   = (gi, pi) => PILL_PALETTE[(gi * 4 + pi) % PILL_PALETTE.length];
const pillStyle = (rgb, active) =>
  active
    ? { backgroundColor: `rgb(${rgb})`, color: 'white' }
    : { backgroundColor: `rgba(${rgb}, 0.15)`, color: `rgb(${rgb})` };

const getSubjectPrefix = (subjectCode = '') => {
  const normalized = String(subjectCode).trim().toUpperCase();

  if (!normalized) return '#';

  const match = normalized.match(/^[^\d\s]+/);
  if (match && match[0]) return match[0];

  return normalized;
};

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-gray-100 dark:border-gray-700/60" />;
}

// ── Main component ────────────────────────────────────────────────────────────

export function ExamFilters({
  subjects,
  professors,
  professorSearchSettledTerm,
  loadingProfessors,
  loadingMoreProfessors,
  hasMoreProfessors,
  loadMoreProfessors,
  setProfessorSearch,
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
  const [filtersOpen, setFiltersOpen]       = useState(false);
  const [expandedPrefix, setExpandedPrefix] = useState(null);
  const [yearOpen, setYearOpen]             = useState(false);
  const yearRef = useRef(null);

  // Group + sort subjects by alpha prefix before first number or whitespace
  const subjectGroups = useMemo(() => {
    const map = {};
    subjects.forEach((s) => {
      const prefix = getSubjectPrefix(s.subjectCode);
      (map[prefix] ??= []).push(s);
    });
    Object.values(map).forEach((g) =>
      g.sort((a, b) => a.subjectCode.localeCompare(b.subjectCode, 'pt-BR'))
    );
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [subjects]);

  // Close year dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (yearRef.current && !yearRef.current.contains(e.target)) setYearOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Auto-expand the group that contains the active subject
  useEffect(() => {
    if (selectedSubject !== 'all')
      setExpandedPrefix(getSubjectPrefix(selectedSubject));
  }, [selectedSubject]);

  const expandedIdx      = subjectGroups.findIndex(([p]) => p === expandedPrefix);
  const expandedSubjects = subjectGroups[expandedIdx]?.[1] ?? [];
  const expandedRgb      = expandedIdx >= 0 ? groupRgb(expandedIdx) : null;

  return (
    <div className="mb-6">
      {/* Toggle bar */}
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
            <span className={`min-w-[18px] h-[18px] text-[11px] font-bold rounded-full flex items-center justify-center px-1 ${
              filtersOpen ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
            }`}>
              {activeFilterCount}
            </span>
          )}
          <ChevronDown size={14} className={`transition-transform duration-200 ${filtersOpen ? 'rotate-180' : ''}`} />
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

      {/* Filter panel */}
      {filtersOpen && (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/70 p-5 md:p-6 shadow-sm space-y-6">

          {/* Disciplina */}
          <div>
            <SectionLabel>Disciplina</SectionLabel>

            <div className="flex flex-wrap gap-2">
              {/* "Todas" pill */}
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

              {/* Prefix pills */}
              {subjectGroups.map(([prefix, groupSubjects], idx) => {
                const rgb        = groupRgb(idx);
                const isExpanded = expandedPrefix === prefix;
                const hasSelected = groupSubjects.some((s) => s.subjectCode === selectedSubject);
                const active     = hasSelected || isExpanded;
                return (
                  <button
                    key={prefix}
                    onClick={() => setExpandedPrefix((prev) => (prev === prefix ? null : prefix))}
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1 transition-all hover:scale-105 hover:shadow-sm"
                    style={active
                      ? { backgroundColor: `rgb(${rgb})`, color: 'white' }
                      : { backgroundColor: `rgba(${rgb}, 0.12)`, color: `rgb(${rgb})` }
                    }
                  >
                    {prefix}
                    <span className="text-[10px] opacity-70">{groupSubjects.length}</span>
                    <ChevronDown size={9} className={`transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Expanded subject pills */}
            {expandedPrefix && expandedSubjects.length > 0 && (
              <div
                className="mt-3 p-3.5 rounded-xl flex flex-wrap gap-2"
                style={{
                  background:  `rgba(${expandedRgb}, 0.06)`,
                  boxShadow:   `inset 0 0 0 1px rgba(${expandedRgb}, 0.18)`,
                }}
              >
                {expandedSubjects.map((subject, pi) => {
                  const rgb        = pillRgb(expandedIdx, pi);
                  const isSelected = selectedSubject === subject.subjectCode;
                  return (
                    <button
                      key={subject.subjectCode}
                      onClick={() => setSelectedSubject(subject.subjectCode === selectedSubject ? 'all' : subject.subjectCode)}
                      title={subject.name}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold transition-all hover:scale-[1.07] hover:shadow-md active:scale-100"
                      style={isSelected
                        ? { backgroundColor: `rgb(${rgb})`, color: 'white', boxShadow: `0 2px 8px rgba(${rgb}, 0.4)` }
                        : { backgroundColor: `rgba(${rgb}, 0.15)`, color: `rgb(${rgb})` }
                      }
                    >
                      {subject.subjectCode}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <Divider />

          {/* Tipo de prova */}
          <div>
            <SectionLabel>Tipo de prova</SectionLabel>
            <div className="flex flex-wrap gap-2">
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
              {EXAM_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className="px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 hover:shadow-sm"
                  style={pillStyle(type.rgb, selectedType === type.value)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <Divider />

          {/* Ano + Professor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Ano */}
            <div>
              <SectionLabel>Ano</SectionLabel>
              <div className="relative" ref={yearRef}>
                <button
                  onClick={() => setYearOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none transition-colors"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {selectedYear === 'all' ? 'Todos os anos' : selectedYear}
                  </span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${yearOpen ? 'rotate-180' : ''}`} />
                </button>
                {yearOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {[{ label: 'Todos os anos', value: 'all' }, ...availableYears.map((y) => ({ label: String(y), value: String(y) }))].map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => { setSelectedYear(value); setYearOpen(false); }}
                        className={`w-full px-3 py-2 text-sm text-left transition-colors ${
                          selectedYear === value
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Professor */}
            <div>
              <SectionLabel>Professor</SectionLabel>
              <ProfessorFilter
                professors={professors}
                professorSearchSettledTerm={professorSearchSettledTerm}
                loading={loadingProfessors}
                loadingMore={loadingMoreProfessors}
                hasMore={hasMoreProfessors}
                onLoadMore={loadMoreProfessors}
                onSearchChange={setProfessorSearch}
                selectedProfessorId={selectedProfessorId}
                onSelect={setSelectedProfessorId}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
