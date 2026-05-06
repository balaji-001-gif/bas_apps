export interface BASApp {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  developer: string;
  version: string;
  changelog?: string;
  rating: number;
  reviewsCount: number;
  downloads: number;
  category: string;
  iconUrl: string;
  screenshots: string[];
  features: string[];
  githubUrl?: string;
  websiteUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type Category = 
  | 'All'
  | 'Productivity'
  | 'Finance'
  | 'HR'
  | 'CRM'
  | 'Manufacturing'
  | 'Retail'
  | 'Education'
  | 'Other';
