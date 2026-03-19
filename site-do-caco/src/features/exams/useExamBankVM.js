import { useState, useEffect, useMemo } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Exam } from '../admin/exams/models/Exam';

export function useExamBankVM() {
  const [subjects, setSubjects] = useState([]);
  const [allExams, setAllExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtros
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProfessorId, setSelectedProfessorId] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [allExams, selectedSubject, selectedYear, selectedType, selectedProfessorId]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [subjectsData, examsData] = await Promise.all([
        apiClient.get('public/exams/subjects'),
        apiClient.get('public/exams'),
      ]);

      setSubjects(subjectsData);
      setAllExams(Exam.fromDTOArray(examsData));
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  // Extrai professores únicos dos exames (sem chamada extra ao backend)
  const professors = useMemo(() => {
    const profMap = new Map();
    allExams.forEach((exam) => {
      if (exam.professor) profMap.set(exam.professor.id, exam.professor);
    });
    return [...profMap.values()].sort((a, b) =>
      a.name.localeCompare(b.name, 'pt-BR')
    );
  }, [allExams]);

  // Anos derivados dos exames reais (não intervalo fixo)
  const availableYears = useMemo(
    () => [...new Set(allExams.map((e) => e.year))].sort((a, b) => b - a),
    [allExams]
  );

  const applyFilters = () => {
    let filtered = [...allExams];

    if (selectedSubject !== 'all') {
      filtered = filtered.filter((exam) => exam.subjectCode === selectedSubject);
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter((exam) => exam.year === parseInt(selectedYear));
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((exam) => exam.type === selectedType);
    }

    if (selectedProfessorId !== null) {
      filtered = filtered.filter((exam) => exam.professor?.id === selectedProfessorId);
    }

    // Ordena por ano (mais recente primeiro) e depois por tipo
    filtered.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return a.type.localeCompare(b.type);
    });

    setFilteredExams(filtered);
  };

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
    exams: filteredExams,
    loading,
    error,
    professors,
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
