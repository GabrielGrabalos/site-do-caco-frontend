import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Exam } from '../admin/models/Exam';

export function useExamBankVM() {
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Lista de anos disponíveis (de 2000 até o ano atual)
  const currentYear = new Date().getFullYear();
  const yearCount = currentYear - 2000 + 1;
  const availableYears = Array.from({ length: yearCount }, (_, i) => currentYear - i);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [exams, selectedSubject, selectedYear, selectedType]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [subjectsData, examsData] = await Promise.all([
        apiClient.get('public/exams/subjects'),
        apiClient.get('public/exams'),
      ]);

      setSubjects(subjectsData);
      setExams(Exam.fromDTOArray(examsData));
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...exams];

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(exam => exam.subjectCode === selectedSubject);
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(exam => exam.year === parseInt(selectedYear));
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(exam => exam.type === selectedType);
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
  };

  return {
    subjects,
    exams: filteredExams,
    loading,
    error,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    availableYears,
    clearFilters,
    hasActiveFilters: selectedSubject !== 'all' || selectedYear !== 'all' || selectedType !== 'all',
  };
}
