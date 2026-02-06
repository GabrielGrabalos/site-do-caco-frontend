import { apiClient } from './apiClient';

export const examService = {
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
    return apiClient.post('admin/exams', examData);
  },

  updateExam: async (examId, examData) => {
    return apiClient.put(`admin/exams/${examId}`, examData);
  },

  deleteExam: async (examId) => {
    return apiClient.delete(`admin/exams/${examId}`);
  }
};
