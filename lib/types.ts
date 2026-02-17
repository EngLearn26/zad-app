
export interface Section {
  id: string;
  title: string;
  type?: string; // "intro", "hadith", "maqid"
  content?: string;
  matn?: string;
  fawaid?: string[];
  sharh?: string;
  desc?: string;
  bookLink?: string;
  videoLink?: string;
}

export interface CourseInfo {
  title: string;
  desc: string;
  bookLink?: string;
  videoLink?: string;
}

export interface CourseData {
  info: CourseInfo;
  content: Section[];
}