export class ManualCategory {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.order = data.order;
    this.chapterCount = data.chapterCount || 0;
  }

  static fromDTO(dto) {
    return new ManualCategory(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualCategory.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualCategory({ ...this, ...updates });
  }
}
