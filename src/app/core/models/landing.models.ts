export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  title: string;
  description: string;
}

export type ModuleId = 'dashboard' | 'pos' | 'inventory' | 'customers' | 'billing';

export interface ModuleFeature {
  id: ModuleId;
  tab: string;
  title: string;
  description: string;
  points: string[];
}

export interface AiFeature {
  title: string;
  description: string;
}

export interface AiMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
