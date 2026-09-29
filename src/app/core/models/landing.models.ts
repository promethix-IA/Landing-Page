export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  label: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: string;
}

export interface ModuleFeature {
  title: string;
  description: string;
  points: string[];
  accent?: string;
}

export interface AiFeature {
  title: string;
  description: string;
  example?: string;
}

export interface AiMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface IntegrationItem {
  title: string;
  subtitle: string;
  status: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface SecurityItem {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
