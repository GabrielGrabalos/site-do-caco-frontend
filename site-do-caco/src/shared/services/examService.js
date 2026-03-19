import { apiClient } from './apiClient';

export const examService = {
  // Public (Exam Bank)
  getPublicSubjectsAll: async () => {
    return apiClient.get('public/exams/subjects/all');
  },

  getPublicYears: async () => {
    return apiClient.get('public/exams/years');
  },

  getPublicExams: async ({ year, professorId, subjectCode, page = 0, size = 20, sort = 'year,desc' } = {}) => {
    const params = new URLSearchParams();

    if (year !== undefined && year !== null) params.set('year', String(year));
    if (professorId) params.set('professorId', String(professorId));
    if (subjectCode) params.set('subjectCode', String(subjectCode));

    params.set('page', String(page));
    params.set('size', String(size));
    params.set('sort', String(sort));

    return apiClient.get(`public/exams?${params.toString()}`);
  },

  getPublicProfessors: async ({ name, page = 0, size = 20, sort = 'name' } = {}) => {
    const params = new URLSearchParams();

    if (name && name.trim()) params.set('name', name.trim());
    params.set('page', String(page));
    params.set('size', String(size));
    params.set('sort', String(sort));

    return apiClient.get(`public/exams/professors?${params.toString()}`);
  },

  // Subjects
  getSubjects: async () => {
    return apiClient.get('admin/exams/subjects');
  },

  createSubject: async (subjectData) => {
    return apiClient.post('admin/exams/subjects', subjectData);
  },

  deleteSubject: async (subjectCode) => {
    return apiClient.delete(`admin/exams/subjects/${subjectCode}`);
  },

  // Exams
  getExamsBySubject: async (subjectCode) => {
    return apiClient.get(`admin/exams/subject/${subjectCode}`);
  },

  createExam: async (examData) => {
    // examData pode conter professorId (opcional)
    return apiClient.post('admin/exams', examData);
  },

  updateExam: async (examId, examData) => {
    // examData pode conter professorId e/ou removeProfessor (opcional)
    return apiClient.put(`admin/exams/${examId}`, examData);
  },

  deleteExam: async (examId) => {
    return apiClient.delete(`admin/exams/${examId}`);
  }
};
