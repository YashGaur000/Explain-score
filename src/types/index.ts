export interface NavigationItem {
  name: string;
  href: string;
  active: boolean;
}

export interface FooterLink {
  name: string;
  href: string;
  active: boolean;
}

export interface FooterLinks {
  [key: string]: FooterLink[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  navigation: NavigationItem[];
  footerLinks: FooterLinks;
  features: Feature[];
  stats: Stat[];
  testimonials: Testimonial[];
  faqs: FAQ[];
} 