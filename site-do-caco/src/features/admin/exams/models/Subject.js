/**
 * Model que representa uma disciplina (matéria)
 */
export class Subject {
  constructor(data) {
    this.subjectCode = data.subjectCode || '';
    this.name = data.name || '';
  }

  /**
   * Valida os dados da disciplina
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.subjectCode?.trim()) {
      errors.push('Código da disciplina é obrigatório');
    }

    if (this.subjectCode && !/^[A-Z0-9]+$/.test(this.subjectCode)) {
      errors.push('Código deve conter apenas letras maiúsculas e números');
    }

    if (!this.name?.trim()) {
      errors.push('Nome da disciplina é obrigatório');
    }

    if (this.name && this.name.length > 100) {
      errors.push('Nome não pode ter mais de 100 caracteres');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    return true;
  }

  /**
   * Clona a disciplina com novas propriedades
   */
  clone(updates = {}) {
    return new Subject({ ...this, ...updates });
  }

  /**
   * Converte para objeto simples (para enviar à API)
   */
  toDTO() {
    return {
      subjectCode: this.subjectCode,
      name: this.name,
    };
  }

  /**
   * Cria instância a partir de DTO da API
   */
  static fromDTO(dto) {
    return new Subject(dto);
  }

  /**
   * Cria array de instâncias a partir de array de DTOs
   */
  static fromDTOArray(dtoArray) {
    return dtoArray.map(dto => Subject.fromDTO(dto));
  }
}
