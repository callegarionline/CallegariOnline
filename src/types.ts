export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  applications: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  type: string;
  area: string;
  challenge: string;
  solution: string;
  result: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  initials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  imageUrl: string;
}

export interface RegionCoverage {
  region: string;
  states: string[];
  description: string;
  highlightCities: string[];
}

export interface BudgetFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  cityState: string;
  demandType: string;
  description: string;
  howCanWeHelp: string;
}
