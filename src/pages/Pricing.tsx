import React from 'react';
import { Check, ArrowRight, Mail, Calendar } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free Trial',
      price: 'Free',
      period: '14 days',
      description: 'Perfect for evaluating our explainability platform with your existing models',
      features: [
        'Up to 1,000 explanations',
        'Basic compliance reporting',
        'Email support',
        'Standard API access',
        'Basic security features',
        'Documentation access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Standard',
      price: '$2,500',
      period: '/month',
      description: 'For financial institutions ready to deploy transparent AI at scale',
      features: [
        'Up to 25,000 explanations/month',
        'Advanced compliance reporting',
        'Priority support',
        'Full API access',
        'Enhanced security',
        'Custom model integration',
        'Audit trail generation',
        'Regulatory documentation'
      ],
      popular: true,
      cta: 'Start Free Trial'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the compliance reporting?',
      answer: 'Our compliance reporting includes audit trails, decision explanations, feature importance analysis, and regulatory-ready documentation that meets GDPR, CCPA, and banking regulations.'
    },
    {
      question: 'Do I need to build my own ML models?',
      answer: 'No, ExplainScore provides explainability as a service. You can use our pre-built models or integrate with your existing models without building from scratch.'
    },
    {
      question: 'How quickly can I get started?',
      answer: 'Most customers are up and running within 48 hours. Our team provides white-glove onboarding and integration support.'
    },
    {
      question: 'What security certifications do you have?',
      answer: 'We are SOC 2 Type II certified, GDPR compliant, and follow industry-standard security practices including encryption at rest and in transit.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Simple, transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Start with our free trial, then choose the plan that fits your financial institution's needs. 
            All plans include regulatory-grade compliance and enterprise security.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-500 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Need something more?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We offer customized enterprise plans based on your compliance and volume needs. 
              Contact our sales team to discuss a solution tailored to your lending workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:explainscore@gmail.com?subject=Enterprise Plan Inquiry"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Talk to Sales
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-white transition-all duration-200 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and platform
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join leading financial institutions already using ExplainScore to build transparent, 
            compliant AI systems. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <a
              href="mailto:explainscore@gmail.com?subject=Demo Request"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}