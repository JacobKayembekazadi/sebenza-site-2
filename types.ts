
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum Language {
  EN = 'en',
  FR = 'fr',
  PT = 'pt'
}

export interface IndustryData {
  id: string;
  title: string;
  icon: string;
  features: string[];
  description: string;
}

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}
