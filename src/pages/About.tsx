import React from 'react';
import { Shield, Target, Users, TrendingUp, Heart, Globe } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Martinez',
      role: 'CEO & Co-Founder',
      bio: 'Former Head of AI Ethics at Goldman Sachs, PhD in Machine Learning from MIT. Passionate about making AI transparent and accountable in financial services.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Zhang',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher with 15+ years in financial technology and ML infrastructure. Built scalable AI systems at Fortune 500 financial institutions.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Head of Research',
      bio: 'Stanford PhD in Explainable AI, former researcher at Microsoft Research. Published 50+ papers on AI interpretability and fairness in lending.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'James Wilson',
      role: 'Head of Compliance',
      bio: 'Former regulatory affairs director at JP Morgan, JD from Harvard Law. Expert in financial services compliance and AI governance frameworks.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Transparency First',
      description: 'We believe every AI decision should be explainable and understandable to the people it affects, especially in financial services.'
    },
    {
      icon: Shield,
      title: 'Compliance by Design',
      description: 'Regulatory compliance isn\'t an afterthought—it\'s built into every feature we create from day one.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We\'re working to make AI more fair and accountable across financial systems worldwide, one institution at a time.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Team Members', value: '45+' },
    { icon: Target, label: 'Accuracy Rate', value: '99.7%' },
    { icon: Shield, label: 'Compliance Standards', value: '12+' },
    { icon: TrendingUp, label: 'Processing Speed', value: '<50ms' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Making AI transparent for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> financial services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're on a mission to solve the black-box problem in ML-based credit decisions, 
            enabling financial institutions to deploy transparent, auditable AI without building predictive models from scratch.
          </p>
        </div>
      </section>

      {/* Problem & Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                The Problem We Solve
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Financial institutions increasingly rely on machine learning for credit decisions, but traditional ML models 
                  operate as "black boxes"—making it impossible to understand why decisions are made. This creates critical 
                  problems in regulated industries where transparency and auditability are not just preferred, but required.
                </p>
                <p>
                  Regulators demand explanations. Customers deserve transparency. Compliance officers need audit trails. 
                  Yet most financial institutions lack the expertise and resources to build explainable AI systems from scratch.
                </p>
                <p>
                  <strong>ExplainScore bridges this gap.</strong> We provide Explainability-as-a-Service, enabling banks and 
                  lenders to understand, audit, and explain their ML decisions without the complexity of building and maintaining 
                  their own explainable AI infrastructure.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from firsthand experience with the challenges of AI transparency in financial services
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                ExplainScore was founded in 2023 by Dr. Sarah Martinez and Michael Zhang, who experienced the AI transparency 
                challenge firsthand while working at major financial institutions. Sarah, as Head of AI Ethics at Goldman Sachs, 
                witnessed the growing regulatory pressure for explainable AI, while Michael, as a Google AI researcher, 
                saw the technical complexity of building these systems.
              </p>
              <p>
                The turning point came during a regulatory audit where a major bank's lending decisions were questioned due to 
                lack of transparency in their ML models. The institution faced potential fines and had to temporarily halt 
                their AI-driven lending program—costing millions in lost opportunities and compliance resources.
              </p>
              <p>
                "We realized that every financial institution would face this same challenge," says Dr. Martinez. 
                "But not every institution has the resources to build world-class explainable AI teams. That's when we 
                decided to democratize AI transparency through our Explainability-as-a-Service platform."
              </p>
              <p>
                Today, ExplainScore serves over 50 financial institutions worldwide, from community banks to global lenders, 
                helping them make transparent, compliant, and auditable AI-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by the industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform powers transparent AI decisions across leading financial institutions worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-shadow">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet our leadership team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines deep expertise in AI, financial services, and regulatory compliance 
              to build the future of transparent AI in lending.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to build transparent AI?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join us in revolutionizing how financial institutions approach AI transparency and compliance. 
            Start your journey toward explainable AI today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}