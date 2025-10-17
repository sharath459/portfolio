export interface Experience {
  title: string;
  company: string;
  date: string;
  summary: string;
  details: string[];
}

export interface Project {
  title: string;
  summary: string;
  details: string;
  technologies: string[];
  category: 'Top Project' | 'AI & Automation' | 'Side Project';
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Accolade {
    title: string;
    description: string;
    year: string;
}
