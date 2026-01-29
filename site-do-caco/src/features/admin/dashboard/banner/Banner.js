/**
 * Model que representa um Banner do sistema
 * Encapsula dados e validações relacionadas a banners
 */
export class Banner {
  constructor(data) {
    this.id = data.id;
    this.title = data.title || '';
    this.imageUrl = data.imageUrl || '';
    this.targetLink = data.targetLink || '';
    this.active = data.active ?? true;
    this.displayOrder = data.displayOrder ?? 0;
    
    // Propriedades de UI/estado temporário (não persistidas)
    this.isLoading = data.isLoading ?? false;
    this.uploadProgress = data.uploadProgress;
  }

  /**
   * Verifica se o banner está ativo
   */
  get isActive() {
    return this.active === true;
  }

  /**
   * Verifica se o banner está inativo
   */
  get isInactive() {
    return this.active === false;
  }

  /**
   * Valida os dados do banner
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.title?.trim()) {
      errors.push('Título é obrigatório');
    }

    if (this.title && this.title.length > 100) {
      errors.push('Título não pode ter mais de 100 caracteres');
    }

    if (!this.targetLink?.trim()) {
      errors.push('Link de redirecionamento é obrigatório');
    }

    if (this.targetLink && !this.isValidUrl(this.targetLink)) {
      errors.push('Link de redirecionamento deve ser uma URL válida ou caminho relativo');
    }

    if (errors.length > 0) {
      throw new Error(errors.join('; '));
    }

    return true;
  }

  /**
   * Valida se uma string é uma URL válida ou caminho relativo
   */
  isValidUrl(url) {
    // Aceita URLs completas ou caminhos relativos
    if (url.startsWith('/') || url.startsWith('./')) {
      return true;
    }

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Cria uma cópia do banner com propriedades atualizadas
   */
  clone(updates = {}) {
    return new Banner({ ...this, ...updates });
  }

  /**
   * Converte o banner para objeto simples (para envio à API)
   */
  toDTO() {
    return {
      id: this.id,
      title: this.title,
      imageUrl: this.imageUrl,
      targetLink: this.targetLink,
      active: this.active,
      displayOrder: this.displayOrder,
    };
  }

  /**
   * Cria uma instância de Banner a partir de um DTO da API
   */
  static fromDTO(dto) {
    return new Banner(dto);
  }

  /**
   * Cria múltiplas instâncias de Banner a partir de um array de DTOs
   */
  static fromDTOArray(dtos) {
    return dtos.map(dto => Banner.fromDTO(dto));
  }

  /**
   * Cria um banner temporário para upload otimista
   */
  static createTemporary(data) {
    return new Banner({
      id: `temp-${Date.now()}`,
      ...data,
      isLoading: true,
      uploadProgress: 0,
    });
  }
}
