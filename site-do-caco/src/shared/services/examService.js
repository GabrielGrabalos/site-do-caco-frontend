import { apiClient } from './apiClient';

export const examService = {
  // Subjects
  getSubjects: async () => {
    return apiClient.get('admin/exams/subjects/all');
  },

  createSubject: async (subjectData) => {
    return apiClient.post('admin/exams/subjects', subjectData);
  },

  deleteSubject: async (subjectCode) => {
    return apiClient.delete(`admin/exams/subjects/${subjectCode}`);
  },

  // Exams - Public (Get filter options)
  /**
   * Lista todos os anos disponíveis nos exames
   * @returns {Promise<Array>} Array de anos disponíveis
   */
  getAvailableYears: async () => {
    return apiClient.get('public/exams/years');
  },

  /**
   * Lista professores disponíveis nos exames com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Page de professores
   */
  getAvailableProfessors: async (page = 0, size = 20) => {
    return apiClient.get(`public/exams/professors?page=${page}&size=${size}`);
  },

  /**
   * Busca professores por nome (case-insensitive)
   * @param {string} name - Texto para buscar no nome (parcial)
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @param {string} sort - Ordenação (padrão: 'name,asc')
   * @returns {Promise<Object>} Page de professores encontrados
   */
  searchProfessors: async (name, page = 0, size = 20, sort = 'name,asc') => {
    return apiClient.get(`public/exams/professors?name=${encodeURIComponent(name)}&page=${page}&size=${size}&sort=${encodeURIComponent(sort)}`);
  },

  // Exams - Public (Pageable with filters)
  /**
   * Lista paginada de exames públicos com filtros
   * @param {Object} filters - Filtros aplicados
   * @param {number} filters.page - Número da página (padrão: 0)
   * @param {number} filters.size - Tamanho da página (padrão: 20)
   * @param {string} filters.sort - Ordenação (padrão: 'year,desc')
   * @param {number} filters.year - Filtro por ano (opcional)
   * @param {string} filters.professorId - Filtro por ID do professor (opcional)
   * @param {string} filters.subjectCode - Filtro por código da disciplina (opcional)
   * @returns {Promise<Object>} Page de exames
   */
  getExamsWithFilters: async (filters = {}) => {
    const {
      page = 0,
      size = 20,
      sort = 'year,desc',
      year = null,
      professorId = null,
      subjectCode = null,
    } = filters;

    const params = new URLSearchParams();
    params.append('page', page);
    params.append('size', size);
    params.append('sort', sort);

    if (year !== null) params.append('year', year);
    if (professorId !== null) params.append('professorId', professorId);
    if (subjectCode !== null) params.append('subjectCode', subjectCode);

    return apiClient.get(`public/exams?${params.toString()}`);
  },

  /**
   * Lista paginada de exames públicos
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @param {string} sort - Ordenação (padrão: 'year,desc')
   * @returns {Promise<Object>} Page de exames
   */
  getExams: async (page = 0, size = 20, sort = 'year,desc') => {
    return apiClient.get(`public/exams?page=${page}&size=${size}&sort=${encodeURIComponent(sort)}`);
  },

  /**
   * Lista paginada de exames por disciplina
   * @param {string} subjectCode - Código da disciplina
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @param {string} sort - Ordenação (padrão: 'year,desc')
   * @returns {Promise<Object>} Page de exames
   */
  getExamsBySubjectPaginated: async (subjectCode, page = 0, size = 20, sort = 'year,desc') => {
    return apiClient.get(`public/exams/subject/${subjectCode}?page=${page}&size=${size}&sort=${encodeURIComponent(sort)}`);
  },

  // Exams - Admin
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
