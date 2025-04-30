
export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'research' | 'academics' | 'students' | 'campus';
  date: string;
  image: string;
  featured?: boolean;
}

export interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  month: string;
  day: string;
}
