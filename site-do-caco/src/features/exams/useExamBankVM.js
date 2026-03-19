import { useState, useEffect, useMemo } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { examService } from '@/shared/services/examService';
import { Exam } from '../admin/exams/models/Exam';

const PAGE_SIZE = 12;

// Extrai o código da disciplina (todas as letras antes dos números)
// Ex: "MC102" -> "MC", "f 355" -> "f", "f245" -> "f"
const extractSubjectCode = (subjectName) => {
  if (!subjectName) return '';
  const match = subjectName.match(/^([a-zA-Z\s]+)/);
  return match ? match[1].trim() : '';
};

export function useExamBankVM() {
  const [subjects, setSubjects] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [allExams, setAllExams] = useState([]); // Cache para calcular filtros
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Paginação
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // Filtros opções
  const [availableYears, setAvailableYears] = useState([]);
  const [availableProfessors, setAvailableProfessors] = useState([]);
  const [professorsPage, setProfessorsPage] = useState(0);
  const [professorsTotalPages, setProfessorsTotalPages] = useState(0);
  const [loadingProfessors, setLoadingProfessors] = useState(false);

  // Filtros
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProfessorId, setSelectedProfessorId] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  // Recarrega exames quando página ou filtros mudam
  useEffect(() => {
    loadExamsWithFilters(0); // Reseta para página 0 ao mudar filtros
    // Reseta para página 1 de professores quando filtro é alterado
    setProfessorsPage(0);
  }, [selectedSubject, selectedYear, selectedType, selectedProfessorId]);

  // Recarrega quando a página muda
  useEffect(() => {
    if (currentPage > 0) {
      loadExamsWithFilters(currentPage);
    }
  }, [currentPage]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [subjectsData, yearsData, professorsData] = await Promise.all([
        apiClient.get('public/exams/subjects/all'),
        examService.getAvailableYears(),
        examService.getAvailableProfessors(0, 20),
      ]);

      // Garante que subjects é sempre um array
      const subjectsArray = Array.isArray(subjectsData) ? subjectsData : [];
      setSubjects(subjectsArray);

      // Garante que anos é sempre um array
      const yearsArray = Array.isArray(yearsData) ? yearsData : [];
      setAvailableYears(yearsArray);

      // Processa professores (pode retornar Page ou Array)
      if (professorsData && typeof professorsData === 'object') {
        if (Array.isArray(professorsData)) {
          setAvailableProfessors(professorsData);
          setProfessorsPage(0);
          setProfessorsTotalPages(1);
        } else if (professorsData.content) {
          // É um Page object
          setAvailableProfessors(professorsData.content || []);
          setProfessorsPage(0);
          setProfessorsTotalPages(professorsData.totalPages || 1);
        }
      }

      // Carrega primeira página para gerar cache de filtros
      await loadExamsWithFilters(0);
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
      setSubjects([]);
      setAvailableYears([]);
      setAvailableProfessors([]);
    } finally {
      setLoading(false);
    }
  };

  const loadExamsWithFilters = async (page = 0) => {
    try {
      setLoading(true);
      setError(null);

      // Construir objeto de filtros
      const filters = {
        page,
        size: PAGE_SIZE,
        sort: 'year,desc',
      };

      // Adicionar filtros se selecionados
      if (selectedSubject !== 'all') {
        filters.subjectCode = selectedSubject;
      }
      if (selectedYear !== 'all') {
        filters.year = parseInt(selectedYear);
      }
      if (selectedProfessorId !== null) {
        filters.professorId = selectedProfessorId;
      }

      const response = await examService.getExamsWithFilters(filters);
      
      const exams = Exam.fromDTOArray(response.content || []);
      
      // Aplicar filtro de tipo (client-side apenas para tipo)
      let filtered = exams;
      if (selectedType !== 'all') {
        filtered = exams.filter((exam) => exam.type === selectedType);
      }
      
      setFilteredExams(filtered);
      setAllExams(exams); // Cache para calcular opções de filtros
      setTotalPages(response.totalPages || 0);
      setTotalElements(response.totalElements || 0);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message || 'Erro ao carregar exames');
    } finally {
      setLoading(false);
    }
  };

  // Extrai professores únicos de todos os exames (cache)
  const professorsFromExams = useMemo(() => {
    const profMap = new Map();
    allExams.forEach((exam) => {
      if (exam.professor) profMap.set(exam.professor.id, exam.professor);
    });
    return [...profMap.values()].sort((a, b) =>
      a.name.localeCompare(b.name, 'pt-BR')
    );
  }, [allExams]);

  // Carrega próxima página de professores
  const loadMoreProfessors = async () => {
    if (loadingProfessors || professorsPage >= professorsTotalPages - 1) {
      return; // Já está carregando ou já carregou todas as páginas
    }

    try {
      setLoadingProfessors(true);
      const nextPage = professorsPage + 1;
      const response = await examService.getAvailableProfessors(nextPage, 20);

      const newProfessors = response.content || response;
      setAvailableProfessors((prev) => [...prev, ...newProfessors]);
      setProfessorsPage(nextPage);
      setProfessorsTotalPages(response.totalPages || professorsTotalPages);
    } catch (err) {
      console.error('Erro ao carregar mais professores:', err);
    } finally {
      setLoadingProfessors(false);
    }
  };

  // Busca professores por nome
  const searchProfessors = async (name, page = 0) => {
    if (!name.trim()) {
      // Se a busca está vazia, recarrega todos os professores da primeira página
      try {
        setLoadingProfessors(true);
        const response = await examService.getAvailableProfessors(0, 20);
        
        const professors = response.content || response;
        setAvailableProfessors(professors);
        setProfessorsPage(0);
        setProfessorsTotalPages(response.totalPages || 1);
      } catch (err) {
        console.error('Erro ao carregar professores:', err);
      } finally {
        setLoadingProfessors(false);
      }
      return;
    }

    try {
      setLoadingProfessors(true);
      const response = await examService.searchProfessors(name, page, 20);

      const professors = response.content || response;
      if (page === 0) {
        setAvailableProfessors(professors);
      } else {
        setAvailableProfessors((prev) => [...prev, ...professors]);
      }
      setProfessorsPage(page);
      setProfessorsTotalPages(response.totalPages || 1);
    } catch (err) {
      console.error('Erro ao buscar professores:', err);
    } finally {
      setLoadingProfessors(false);
    }
  };

  // Carrega próxima página de professores (na busca)

  // Tipos de exames disponíveis
  const availableTypes = useMemo(() => {
    const types = [...new Set(filteredExams.map((e) => e.type))];
    return types.sort();
  }, [filteredExams]);

  const clearFilters = () => {
    setSelectedSubject('all');
    setSelectedYear('all');
    setSelectedType('all');
    setSelectedProfessorId(null);
    setCurrentPage(0);
  };

  const activeFilterCount = [
    selectedSubject !== 'all',
    selectedYear !== 'all',
    selectedType !== 'all',
    selectedProfessorId !== null,
  ].filter(Boolean).length;

  const goToPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  return {
    subjects,
    exams: filteredExams,
    loading,
    error,
    professors: availableProfessors,
    loadMoreProfessors,
    searchProfessors,
    loadingProfessors,
    hasMoreProfessors: professorsPage < professorsTotalPages - 1,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    selectedProfessorId,
    setSelectedProfessorId,
    availableYears,
    availableTypes,
    clearFilters,
    hasActiveFilters: activeFilterCount > 0,
    activeFilterCount,
    // Paginação
    currentPage,
    totalPages,
    totalElements,
    goToPage,
    pageSize: PAGE_SIZE,
  };
}
