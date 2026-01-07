export class ManualArticle {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.content = data.content;
    this.order = data.order;
    this.chapterId = data.chapterId;
    this.chapterTitle = data.chapterTitle;
    this.categoryId = data.categoryId;
    this.categoryTitle = data.categoryTitle;
    this.helpfulCount = data.helpfulCount || 0;
    this.unhelpfulCount = data.unhelpfulCount || 0;
  }

  static fromDTO(dto) {
    return new ManualArticle(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualArticle.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualArticle({ ...this, ...updates });
  }

  get totalFeedback() {
    return this.helpfulCount + this.unhelpfulCount;
  }

  get helpfulPercentage() {
    if (this.totalFeedback === 0) return 0;
    return Math.round((this.helpfulCount / this.totalFeedback) * 100);
  }
}
