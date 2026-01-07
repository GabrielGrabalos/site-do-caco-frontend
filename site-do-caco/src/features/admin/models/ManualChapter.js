export class ManualChapter {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.order = data.order;
    this.categoryId = data.categoryId;
    this.categoryTitle = data.categoryTitle;
    this.articleCount = data.articleCount || 0;
  }

  static fromDTO(dto) {
    return new ManualChapter(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualChapter.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualChapter({ ...this, ...updates });
  }
}
