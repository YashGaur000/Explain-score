export const siteConfig = {
  name: 'ExplainScore',
  description: 'Transparent AI for financial services. Enable compliant, auditable ML lending decisions with our Explainability-as-a-Service platform.',
  url: 'https://explainscore.com',
  email: 'explainscore@gmail.com',
  phone: '+91-9354992219',
  address: {
    street: '123 Financial District',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'United States'
  },
  social: {
    twitter: 'https://twitter.com/explainscore',
    linkedin: 'https://linkedin.com/company/explainscore',
    github: 'https://github.com/explainscore'
  },
  navigation: [
    { name: 'Pricing', href: '/pricing', active: true },
    { name: 'Blog', href: '/blog', active: false },
    { name: 'About', href: '/about', active: true },
    { name: 'Careers', href: '/careers', active: false },
    { name: 'Contact', href: '/contact', active: true }
  ],
  footerLinks: {
    Product: [
      { name: 'Pricing', href: '/pricing', active: true },
      { name: 'API Documentation', href: '#', active: false },
      { name: 'Integrations', href: '#', active: false }
    ],
    Company: [
      { name: 'About', href: '/about', active: true },
      { name: 'Blog', href: '/blog', active: false },
      { name: 'Careers', href: '/careers', active: false },
      { name: 'Contact', href: '/contact', active: true }
    ],
    // Support: [
    //   { name: 'Help Center', href: '#', active: false },
    //   { name: 'Community', href: '#', active: false },
    //   { name: 'Status', href: '#', active: false }
    // ]
  },
  features: [
    {
      icon: 'Shield',
      title: 'Regulatory Compliance',
      description: 'Built-in GDPR, CCPA, and banking regulation compliance with automated audit trails and documentation.'
    },
    {
      icon: 'Zap',
      title: 'Real-time Explanations',
      description: 'Generate instant, human-readable explanations for any ML decision without accessing your models.'
    },
    {
      icon: 'FileCheck',
      title: 'Audit-Ready Reports',
      description: 'Complete documentation and audit trails for every decision, ready for regulatory review.'
    }
  ],
  stats: [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '<50ms', label: 'Response Time' },
    { value: '500M+', label: 'Decisions Explained' },
    { value: '50+', label: 'Enterprise Clients' }
  ],
  testimonials: [
    {
      quote: "ExplainScore transformed how we handle regulatory compliance. What used to take weeks now happens in real-time.",
      author: "Sarah Chen",
      role: "Chief Risk Officer",
      company: "Global Financial Corp",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "The API integration was seamless. We had explainable lending decisions running in production within days.",
      author: "Michael Rodriguez",
      role: "Head of ML Engineering",
      company: "FinTech Solutions",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ],
  faqs: [
    {
      question: "How quickly can we get started?",
      answer: "Most customers are up and running within 48 hours. We provide white-glove onboarding and integration support to ensure a smooth setup process."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we offer custom integrations for enterprise clients. Our team can work with your existing infrastructure to ensure seamless integration with your lending workflow."
    },
    {
      question: "What compliance standards do you support?",
      answer: "We support GDPR, CCPA, and major banking regulations. Our platform generates audit-ready documentation and maintains complete decision trails for regulatory review."
    }
  ]
}; 