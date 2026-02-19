/**
 * Model class para Sticker
 * Abstração das DTOs do backend com métodos úteis
 */

export class Sticker {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
    this.originEventId = data.originEventId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.version = data.version;
  }

  /**
   * Converte DTO backend para instância Sticker
   */
  static fromDTO(dto) {
    return new Sticker({
      id: dto.id,
      name: dto.name,
      description: dto.description || null,
      imageUrl: dto.imageUrl,
      originEventId: dto.originEventId || null,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt || null,
      version: dto.version,
    });
  }

  /**
   * Converte array de DTOs para array de instâncias
   */
  static fromDTOArray(dtos) {
    return Array.isArray(dtos) ? dtos.map(dto => Sticker.fromDTO(dto)) : [];
  }

  /**
   * Retorna objeto para envio via API
   * Exclude campos de sistema (id, createdAt, updatedAt, version)
   */
  toDTO() {
    return {
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      originEventId: this.originEventId,
    };
  }

  /**
   * Formata data de criação em formato legível
   */
  get formattedCreatedAt() {
    if (!this.createdAt) return '-';
    return new Date(this.createdAt).toLocaleDateString('pt-BR');
  }

  /**
   * Retorna data formatada ou null
   */
  get formattedUpdatedAt() {
    if (!this.updatedAt) return null;
    return new Date(this.updatedAt).toLocaleDateString('pt-BR');
  }

  /**
   * Verifica se sticker foi recentemente modificado
   */
  get isRecent() {
    if (!this.updatedAt) return false;
    const diff = Date.now() - new Date(this.updatedAt).getTime();
    return diff < 24 * 60 * 60 * 1000; // 24 horas
  }
}
