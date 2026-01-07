import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Subject } from './models/Subject';
import { Exam } from './models/Exam';

export function useAdminExamsVM() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingExams, setLoadingExams] = useState(false);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      loadExams(selectedSubject.subjectCode);
    }
  }, [selectedSubject]);

  const loadSubjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await apiClient.get('admin/exams/subjects');
      const subjectInstances = Subject.fromDTOArray(data);
      setSubjects(subjectInstances);
      
      // Seleciona a primeira matéria automaticamente se houver
      if (subjectInstances.length > 0 && !selectedSubject) {
        setSelectedSubject(subjectInstances[0]);
      }
    } catch (err) {
      setError(err.message || 'Erro ao carregar disciplinas');
    } finally {
      setLoading(false);
    }
  };

  const loadExams = async (subjectCode) => {
    try {
      setLoadingExams(true);
      setError(null);
      
      const data = await apiClient.get(`admin/exams/subject/${subjectCode}`);
      const examInstances = Exam.fromDTOArray(data);
      setExams(examInstances);
    } catch (err) {
      setError(err.message || 'Erro ao carregar provas');
    } finally {
      setLoadingExams(false);
    }
  };

  const createSubject = async (subjectData) => {
    try {
      setCreating(true);
      
      const newSubjectDTO = await apiClient.post('admin/exams/subjects', subjectData);
      const newSubject = Subject.fromDTO(newSubjectDTO);
      
      setSubjects(prev => [...prev, newSubject]);
      setSelectedSubject(newSubject);
      
      return { success: true, subject: newSubject };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao criar disciplina' 
      };
    } finally {
      setCreating(false);
    }
  };

  const deleteSubject = async (subjectCode) => {
    try {
      await apiClient.delete(`admin/exams/subjects/${subjectCode}`);
      
      setSubjects(prev => prev.filter(s => s.subjectCode !== subjectCode));
      
      // Se a matéria deletada estava selecionada, seleciona outra
      if (selectedSubject?.subjectCode === subjectCode) {
        const remainingSubjects = subjects.filter(s => s.subjectCode !== subjectCode);
        setSelectedSubject(remainingSubjects.length > 0 ? remainingSubjects[0] : null);
        setExams([]);
      }
      
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao excluir disciplina' 
      };
    }
  };

  const createExam = async (examData) => {
    try {
      setCreating(true);
      
      const newExamDTO = await apiClient.post('admin/exams', examData);
      const newExam = Exam.fromDTO(newExamDTO);
      
      setExams(prev => [...prev, newExam]);
      
      return { success: true, exam: newExam };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao criar prova' 
      };
    } finally {
      setCreating(false);
    }
  };

  const updateExam = async (examId, examData) => {
    try {
      const updatedExamDTO = await apiClient.put(
        `admin/exams/${examId}`, 
        examData
      );
      
      const updatedExam = Exam.fromDTO(updatedExamDTO);
      setExams(current => 
        current.map(e => e.id === examId ? updatedExam : e)
      );
      
      return { success: true, exam: updatedExam };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao atualizar prova' 
      };
    }
  };

  const deleteExam = async (examId) => {
    try {
      await apiClient.delete(`admin/exams/${examId}`);
      setExams(prev => prev.filter(e => e.id !== examId));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao excluir prova' 
      };
    }
  };

  return {
    subjects,
    selectedSubject,
    setSelectedSubject,
    exams,
    loading,
    loadingExams,
    error,
    creating,
    createSubject,
    deleteSubject,
    createExam,
    updateExam,
    deleteExam,
  };
}
