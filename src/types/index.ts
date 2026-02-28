export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  thumbnail: string;
  heroImage: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}
