export class Event {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.description = data.description;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.location = data.location;
    this.coverImage = data.coverImage;
    this.type = data.type; // 'CACO', 'IC', 'FERIADO'
    this.importance = data.importance; // 'MAJOR', 'MINOR'
    this.status = data.status; // 'SCHEDULED', 'HAPPENING', 'ENDED'
    this.galleryItems = data.galleryItems || [];
  }

  static fromDTO(dto) {
    return new Event({
      ...dto,
      galleryItems: dto.galleryItems || []
    });
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => Event.fromDTO(dto));
  }

  clone(updates = {}) {
    return new Event({ ...this, ...updates });
  }

  // Propriedades computadas
  get isMajor() {
    return this.importance === 'MAJOR';
  }

  get isMinor() {
    return this.importance === 'MINOR';
  }

  get isScheduled() {
    return this.status === 'SCHEDULED';
  }

  get isHappening() {
    return this.status === 'HAPPENING';
  }

  get isEnded() {
    return this.status === 'ENDED';
  }

  get isCacoEvent() {
    return this.type === 'CACO';
  }

  get isIcEvent() {
    return this.type === 'IC';
  }

  get isHoliday() {
    return this.type === 'FERIADO';
  }

  get hasCoverImage() {
    return !!this.coverImage;
  }

  get galleryImageUrls() {
    return this.galleryItems
      .filter(item => item.type === 'IMAGE')
      .map(item => item.mediaUrl);
  }

  get formattedStartDate() {
    return this.formatDateTime(this.startDate);
  }

  get formattedEndDate() {
    return this.formatDateTime(this.endDate);
  }

  get durationInHours() {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.round((end - start) / (1000 * 60 * 60));
  }

  // Método auxiliar para formatação
  formatDateTime(dateTime) {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Validação
  isValid() {
    return this.title && 
           this.startDate && 
           this.endDate && 
           new Date(this.startDate) < new Date(this.endDate);
  }

  // Para formulários
  toFormData() {
    const formData = new FormData();
    formData.append('title', this.title || '');
    formData.append('slug', this.slug || '');
    formData.append('description', this.description || '');
    formData.append('startDate', this.startDate || '');
    formData.append('endDate', this.endDate || '');
    formData.append('location', this.location || '');
    formData.append('type', this.type || 'CACO');
    formData.append('importance', this.importance || 'MINOR');
    formData.append('status', this.status || 'SCHEDULED');
    
    // Para arquivos (coverImage), você precisa lidar separadamente
    return formData;
  }
}