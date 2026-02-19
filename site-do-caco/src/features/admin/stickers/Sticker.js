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
    this.originEvent = data.originEvent; // EventSummaryDTO ou null
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  /**
   * Converte DTO backend para instância Sticker
   * @param {StickerPublicDTO|StickerAdminDTO} dto - DTO do backend
   * @returns {Sticker}
   */
  static fromDTO(dto) {
    return new Sticker({
      id: dto.id,
      name: dto.name,
      description: dto.description || null,
      imageUrl: dto.imageUrl,
      originEvent: dto.originEvent || null, // EventSummaryDTO
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt || null,
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
   * Exclude campos de sistema (id, createdAt)
   */
  toDTO() {
    return {
      name: this.name,
      description: this.description,
      originEventId: this.originEvent?.id || null,
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
   * Formata data de atualização em formato legível
   */
  get formattedUpdatedAt() {
    if (!this.updatedAt) return null;
    return new Date(this.updatedAt).toLocaleDateString('pt-BR');
  }

  /**
   * Verifica se sticker foi recentemente criado ou atualizado (últimas 24h)
   */
  get isRecent() {
    const dateToCheck = this.updatedAt || this.createdAt;
    if (!dateToCheck) return false;
    const diff = Date.now() - new Date(dateToCheck).getTime();
    return diff < 24 * 60 * 60 * 1000; // 24 horas
  }

  /**
   * Retorna ID do evento de origem ou null
   */
  get originEventId() {
    return this.originEvent?.id || null;
  }

  /**
   * Retorna título do evento de origem ou null
   */
  get originEventTitle() {
    return this.originEvent?.title || null;
  }
}
