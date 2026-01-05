import { useState, useEffect, useMemo } from 'react';
import { contentService } from '@/shared/services/contentService';

export function useExamBankVM() {
  const [allExams, setAllExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = async () => {
    try {
      setLoading(true);
      const data = await contentService.getExams();
      setAllExams(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtragem em memória
  const filteredExams = useMemo(() => {
    if (!searchQuery.trim()) return allExams;

    const query = searchQuery.toLowerCase();
    return allExams.filter((exam) =>
      exam.subject.toLowerCase().includes(query)
    );
  }, [allExams, searchQuery]);

  // Agrupar por disciplina
  const examsBySubject = useMemo(() => {
    const grouped = {};
    filteredExams.forEach((exam) => {
      if (!grouped[exam.subject]) {
        grouped[exam.subject] = [];
      }
      grouped[exam.subject].push(exam);
    });

    // Ordenar cada disciplina por tipo e depois por ano/semestre
    Object.keys(grouped).forEach((subject) => {
      grouped[subject].sort((a, b) => {
        if (a.type !== b.type) {
          const order = { P1: 1, P2: 2, P3: 3, FINAL: 4 };
          return order[a.type] - order[b.type];
        }
        if (a.year !== b.year) return b.year - a.year;
        return b.semester - a.semester;
      });
    });

    return grouped;
  }, [filteredExams]);

  return {
    examsBySubject,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  };
}
