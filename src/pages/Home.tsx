import React from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import GradientText from '../components/ui/GradientText';
import Button from '../components/common/Button';
import { siteConfig } from '../config/site';
import { getIcon } from '../utils/icons';

export default function Home() {
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
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="flex items-center"
              >
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-lg font-medium group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 dark:group-hover:bg-dark-700 transition-all duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                Watch demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {siteConfig.stats.map((stat, index) => (
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
            {siteConfig.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-white dark:bg-dark-700 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg dark:group-hover:shadow-dark-900/50 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
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
            {siteConfig.testimonials.map((testimonial, index) => (
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
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              Start free trial
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}