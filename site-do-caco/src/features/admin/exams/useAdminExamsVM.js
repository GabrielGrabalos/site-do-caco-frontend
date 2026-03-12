import { useState, useEffect } from 'react';
import { examService } from '@/shared/services/examService';
import { professorService } from '@/shared/services/professorService';
import { Subject } from './models/Subject';
import { Exam } from './models/Exam';
import { Professor } from './models/Professor';

export function useAdminExamsVM() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingExams, setLoadingExams] = useState(false);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  const [professors, setProfessors] = useState([]);
  const [loadingProfessors, setLoadingProfessors] = useState(false);

  useEffect(() => {
    loadSubjects();
    loadProfessors();
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
      
      const data = await examService.getSubjects();
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
      
      const data = await examService.getExamsBySubject(subjectCode);
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
      
      const newSubjectDTO = await examService.createSubject(subjectData);
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
      await examService.deleteSubject(subjectCode);
      
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
      
      const newExamDTO = await examService.createExam(examData);
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
      const updatedExamDTO = await examService.updateExam(examId, examData);
      
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
      await examService.deleteExam(examId);
      setExams(prev => prev.filter(e => e.id !== examId));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao excluir prova' 
      };
    }
  };

  // ── Professors ──────────────────────────────────────────────────────────────

  const loadProfessors = async () => {
    try {
      setLoadingProfessors(true);
      const data = await professorService.getAll();
      setProfessors(Professor.fromDTOArray(data));
    } catch {
      // silencia — erros de professor não devem bloquear a página
    } finally {
      setLoadingProfessors(false);
    }
  };

  const createProfessor = async (professorData) => {
    try {
      const dto = await professorService.create(professorData);
      const newProfessor = Professor.fromDTO(dto);
      setProfessors(prev => [...prev, newProfessor]);
      return { success: true, professor: newProfessor };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao criar professorie' };
    }
  };

  const updateProfessor = async (id, professorData) => {
    try {
      const dto = await professorService.update(id, professorData);
      const updated = Professor.fromDTO(dto);
      setProfessors(prev => prev.map(p => p.id === id ? updated : p));
      return { success: true, professor: updated };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao atualizar professorie' };
    }
  };

  const deleteProfessor = async (id) => {
    try {
      await professorService.delete(id);
      setProfessors(prev => prev.filter(p => p.id !== id));
      // Provas vinculadas ficam com professor = null (backend garante)
      setExams(prev => prev.map(e =>
        e.professor?.id === id ? { ...e, professor: null } : e
      ));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao excluir professorie' };
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
    professors,
    loadingProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor,
  };
}
