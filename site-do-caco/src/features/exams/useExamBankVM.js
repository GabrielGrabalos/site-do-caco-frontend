import { useState, useEffect, useRef, useCallback } from 'react';
import { examService } from '@/shared/services/examService';
import { Exam } from '../admin/exams/models/Exam';

const EXAMS_PAGE_SIZE = 20;
const PROFESSORS_PAGE_SIZE = 20;

function normalizePageResponse(response) {
  if (Array.isArray(response)) {
    return {
      content: response,
      last: true,
      first: true,
      number: 0,
      totalPages: 1,
      totalElements: response.length,
      size: response.length,
      numberOfElements: response.length,
      empty: response.length === 0,
    };
  }

  return {
    content: response?.content || [],
    last: Boolean(response?.last),
    first: Boolean(response?.first),
    number: response?.number ?? 0,
    totalPages: response?.totalPages ?? 0,
    totalElements: response?.totalElements ?? 0,
    size: response?.size ?? 0,
    numberOfElements: response?.numberOfElements ?? 0,
    empty: Boolean(response?.empty),
  };
}

function uniqueById(items) {
  const map = new Map();
  items.forEach((item) => {
    if (item?.id) {
      map.set(item.id, item);
    }
  });
  return [...map.values()];
}

export function useExamBankVM() {
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingExams, setLoadingExams] = useState(false);
  const [loadingMoreExams, setLoadingMoreExams] = useState(false);
  const [hasMoreExams, setHasMoreExams] = useState(true);
  const [examsPage, setExamsPage] = useState(0);
  const [hasLoadedExamsOnce, setHasLoadedExamsOnce] = useState(false);

  const [professors, setProfessors] = useState([]);
  const [professorSearch, setProfessorSearch] = useState('');
  const [professorSearchSettledTerm, setProfessorSearchSettledTerm] = useState('');
  const [loadingProfessors, setLoadingProfessors] = useState(false);
  const [loadingMoreProfessors, setLoadingMoreProfessors] = useState(false);
  const [hasMoreProfessors, setHasMoreProfessors] = useState(true);
  const [professorsPage, setProfessorsPage] = useState(0);

  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Filtros
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProfessorId, setSelectedProfessorId] = useState(null);

  const examsRequestIdRef = useRef(0);
  const professorsRequestIdRef = useRef(0);
  const professorSearchCycleRef = useRef(0);

  const fetchExamsPage = useCallback(async ({ page, append, applyTypeFilter = true }) => {
    const requestId = ++examsRequestIdRef.current;
    const selectedYearValue = selectedYear !== 'all' ? parseInt(selectedYear, 10) : undefined;

    const response = await examService.getPublicExams({
      year: selectedYearValue,
      professorId: selectedProfessorId || undefined,
      subjectCode: selectedSubject !== 'all' ? selectedSubject : undefined,
      page,
      size: EXAMS_PAGE_SIZE,
      sort: 'year,desc',
    });

    // Requisição antiga, ignora resultado
    if (requestId !== examsRequestIdRef.current) {
      return;
    }

    const normalized = normalizePageResponse(response);
    let mapped = Exam.fromDTOArray(normalized.content || []);

    if (applyTypeFilter && selectedType !== 'all') {
      mapped = mapped.filter((exam) => exam.type === selectedType);
    }

    const dedupedMapped = uniqueById(mapped);

    setExams((prev) => {
      if (!append) return dedupedMapped;
      return uniqueById([...prev, ...dedupedMapped]);
    });
    setExamsPage(normalized.number ?? page);
    setHasMoreExams(!normalized.last);
  }, [selectedYear, selectedProfessorId, selectedSubject, selectedType]);

  const loadInitialData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [subjectsData, yearsData] = await Promise.all([
        examService.getPublicSubjectsAll(),
        examService.getPublicYears(),
      ]);

      setSubjects(subjectsData);
      setAvailableYears((yearsData || []).sort((a, b) => b - a));
      setInitialized(true);
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  }, []);

  const reloadExams = useCallback(async () => {
    try {
      setLoadingExams(true);
      setError(null);
      setExams([]);
      setExamsPage(0);
      setHasMoreExams(true);
      await fetchExamsPage({ page: 0, append: false, applyTypeFilter: true });
    } catch (err) {
      setError(err.message || 'Erro ao carregar provas');
      setExams([]);
      setHasMoreExams(false);
    } finally {
      setLoadingExams(false);
      setHasLoadedExamsOnce(true);
    }
  }, [fetchExamsPage]);

  const loadMoreExams = useCallback(async () => {
    if (!initialized || loadingExams || loadingMoreExams || !hasMoreExams) return;

    try {
      setLoadingMoreExams(true);
      await fetchExamsPage({ page: examsPage + 1, append: true, applyTypeFilter: true });
    } catch {
      // Falha pontual de paginação não deve derrubar toda a tela.
    } finally {
      setLoadingMoreExams(false);
    }
  }, [initialized, loadingExams, loadingMoreExams, hasMoreExams, fetchExamsPage, examsPage]);

  const fetchProfessorsPage = useCallback(async ({ page, append, searchTerm }) => {
    const requestId = ++professorsRequestIdRef.current;

    const response = await examService.getPublicProfessors({
      name: searchTerm || undefined,
      page,
      size: PROFESSORS_PAGE_SIZE,
      sort: 'name',
    });

    if (requestId !== professorsRequestIdRef.current) {
      return;
    }

    const normalized = normalizePageResponse(response);
    const content = normalized.content || [];

    setProfessors((prev) => {
      if (!append) {
        if (!selectedProfessorId) return content;

        const alreadyIncluded = content.some((p) => p.id === selectedProfessorId);
        if (alreadyIncluded) return content;

        const selectedFromPrev = prev.find((p) => p.id === selectedProfessorId);
        return selectedFromPrev ? [selectedFromPrev, ...content] : content;
      }

      const merged = [...prev];
      const existingIds = new Set(prev.map((p) => p.id));

      content.forEach((professor) => {
        if (!existingIds.has(professor.id)) {
          merged.push(professor);
        }
      });

      return merged;
    });

    setProfessorsPage(normalized.number ?? page);
    setHasMoreProfessors(!normalized.last);
  }, [selectedProfessorId]);

  const reloadProfessors = useCallback(async (searchTerm, cycleId) => {
    try {
      setHasMoreProfessors(true);
      await fetchProfessorsPage({ page: 0, append: false, searchTerm });

      if (cycleId === professorSearchCycleRef.current) {
        setProfessorSearchSettledTerm(searchTerm || '');
        setLoadingProfessors(false);
      }
    } catch {
      if (cycleId !== professorSearchCycleRef.current) return;
      setProfessors([]);
      setHasMoreProfessors(false);
      setProfessorSearchSettledTerm(searchTerm || '');
      setLoadingProfessors(false);
    }
  }, [fetchProfessorsPage]);

  const loadMoreProfessors = useCallback(async () => {
    if (loadingProfessors || loadingMoreProfessors || !hasMoreProfessors) return;

    try {
      setLoadingMoreProfessors(true);
      await fetchProfessorsPage({
        page: professorsPage + 1,
        append: true,
        searchTerm: professorSearch,
      });
    } finally {
      setLoadingMoreProfessors(false);
    }
  }, [loadingProfessors, loadingMoreProfessors, hasMoreProfessors, fetchProfessorsPage, professorsPage, professorSearch]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  useEffect(() => {
    if (!initialized) return;
    reloadExams();
  }, [initialized, reloadExams]);

  useEffect(() => {
    if (!initialized) return;

    const cycleId = ++professorSearchCycleRef.current;
    setLoadingProfessors(true);

    const timeout = setTimeout(() => {
      reloadProfessors(professorSearch, cycleId);
    }, 250);

    return () => clearTimeout(timeout);
  }, [initialized, professorSearch, reloadProfessors]);

  const clearFilters = () => {
    setSelectedSubject('all');
    setSelectedYear('all');
    setSelectedType('all');
    setSelectedProfessorId(null);
  };

  const activeFilterCount = [
    selectedSubject !== 'all',
    selectedYear !== 'all',
    selectedType !== 'all',
    selectedProfessorId !== null,
  ].filter(Boolean).length;

  return {
    subjects,
    exams,
    loading,
    loadingExams,
    loadingMoreExams,
    hasMoreExams,
    loadMoreExams,
    hasLoadedExamsOnce,
    error,

    professors,
    professorSearchSettledTerm,
    loadingProfessors,
    loadingMoreProfessors,
    hasMoreProfessors,
    loadMoreProfessors,
    setProfessorSearch,

    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    selectedProfessorId,
    setSelectedProfessorId,
    availableYears,
    clearFilters,
    hasActiveFilters: activeFilterCount > 0,
    activeFilterCount,
  };
}
