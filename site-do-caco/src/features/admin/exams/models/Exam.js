/**
 * Model que representa uma prova
 */
export class Exam {
  constructor(data) {
    this.id = data.id;
    // Backend retorna subject como objeto, extraímos o subjectCode
    this.subjectCode = data.subject?.subjectCode || data.subjectCode || '';
    this.year = data.year;
    this.type = data.type; // 'P1', 'P2', 'P3', 'EXAME', 'TESTINHO', 'SUB', 'OUTROS'
    // Backend usa fileUrl, mantemos como pdfUrl internamente
    this.pdfUrl = data.fileUrl || data.pdfUrl || '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : null;
    // Professor vinculado (pode ser null)
    this.professor = data.professor || null; // { id, name }
  }

  /**
   * Retorna o rótulo formatado do tipo de prova
   */
  get typeLabel() {
    const labels = {
      'P1': 'P1',
      'P2': 'P2',
      'P3': 'P3',
      'EXAME': 'EXAME',
      'TESTINHO': 'Testinho',
      'SUB': 'SUB',
      'OUTROS': 'OUTROS',
    };
    return labels[this.type] || this.type;
  }

  /**
   * Retorna uma descrição formatada da prova
   */
  get description() {
    return `${this.typeLabel} - ${this.year}`;
  }

  /**
   * Valida os dados da prova
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.subjectCode?.trim()) {
      errors.push('Código da disciplina é obrigatório');
    }

    if (!this.year) {
      errors.push('Ano é obrigatório');
    }

    if (this.year && (this.year < 1900 || this.year > 2100)) {
      errors.push('Ano inválido');
    }

    if (!this.type) {
      errors.push('Tipo de prova é obrigatório');
    }

    const validTypes = ['P1', 'P2', 'P3', 'EXAME', 'TESTINHO', 'SUB', 'OUTROS'];
    if (this.type && !validTypes.includes(this.type)) {
      errors.push('Tipo de prova inválido');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    return true;
  }

  /**
   * Clona a prova com novas propriedades
   */
  clone(updates = {}) {
    return new Exam({ ...this, ...updates });
  }

  /**
   * Converte para objeto simples (para enviar à API)
   */
  toDTO() {
    return {
      subjectCode: this.subjectCode,
      year: this.year,
      type: this.type,
      fileUrl: this.pdfUrl, // Backend espera fileUrl
      professorId: this.professor?.id || null,
    };
  }

  /**
   * Cria instância a partir de DTO da API
   */
  static fromDTO(dto) {
    return new Exam(dto);
  }

  /**
   * Cria array de instâncias a partir de array de DTOs
   */
  static fromDTOArray(dtoArray) {
    return dtoArray.map(dto => Exam.fromDTO(dto));
  }
}
