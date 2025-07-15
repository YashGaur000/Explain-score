import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, FileCheck, CheckCircle, Star, Play } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import GradientText from '../components/ui/GradientText';

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Built-in GDPR, CCPA, and banking regulation compliance with automated audit trails and documentation.'
    },
    {
      icon: Zap,
      title: 'Real-time Explanations',
      description: 'Generate instant, human-readable explanations for any ML decision without accessing your models.'
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Reports',
      description: 'Complete documentation and audit trails for every decision, ready for regulatory review.'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '<50ms', label: 'Response Time' },
    { value: '500M+', label: 'Decisions Explained' },
    { value: '50+', label: 'Enterprise Clients' }
  ];

  const testimonials = [
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
  ];

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Transparent AI for{' '}
              <GradientText>Financial Services</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto animate-slide-up">
              Enable compliant, auditable ML lending decisions with our Explainability-as-a-Service platform. 
              No model building required—just transparent AI explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center transform hover:scale-105"
              >
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-lg font-medium group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 dark:group-hover:bg-dark-700 transition-all duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                Watch demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Financial Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our platform provides the transparency and auditability that financial institutions need 
              to deploy ML models with confidence and regulatory approval.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-white dark:bg-dark-700 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg dark:group-hover:shadow-dark-900/50 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Leading Financial Institutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join hundreds of banks and lenders using ExplainScore to build transparent, compliant AI systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-700 hover:shadow-lg dark:hover:shadow-dark-900/50 transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors duration-300" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 ring-2 ring-gray-100 dark:ring-dark-700 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-blue-700 dark:via-purple-700 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient bg-[length:200%_200%]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to make your AI transparent?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join leading financial institutions using ExplainScore to build trust and compliance 
            into their ML decisions. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start free trial
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}