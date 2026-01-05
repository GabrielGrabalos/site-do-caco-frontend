// Dashboard Types
export const DashboardData = {
  banners: [],
  warnings: [],
  latestNews: [],
};

// News Types
export const NewsArticle = {
  id: '',
  slug: '',
  title: '',
  summary: '',
  content: '',
  imageUrl: '',
  publishedAt: '',
  author: '',
};

// Manual Types
export const ManualSection = {
  id: '',
  title: '',
  children: [],
  articles: [],
};

export const ManualArticle = {
  id: '',
  title: '',
  content: '',
  sectionId: '',
  path: [],
};

// Event Types
export const CalendarEvent = {
  id: '',
  title: '',
  description: '',
  start: '',
  end: '',
  type: 'MINOR' | 'MAJOR',
  action: 'MODAL' | 'PAGE',
  location: '',
  imageUrl: '',
  status: 'UPCOMING' | 'ONGOING' | 'ENDED',
  gallery: [],
};

// Exam Types
export const Exam = {
  id: '',
  subject: '',
  type: 'P1' | 'P2' | 'P3' | 'FINAL',
  year: 0,
  semester: 0,
  fileUrl: '',
};

// Sticker Types
export const Sticker = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY',
  eventId: '',
};

export const UserSticker = {
  stickerId: '',
  acquiredAt: '',
  eventName: '',
};
