import React, { useState } from 'react';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Send } from 'lucide-react';

export default function Careers() {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });

  const jobs = [
    {
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Build and scale our explainable AI infrastructure for financial services. Work with cutting-edge ML technologies to solve real-world transparency challenges.',
      requirements: ['5+ years ML experience', 'Python, TensorFlow/PyTorch', 'Financial services background preferred', 'Experience with model interpretability'],
      salary: '$180k - $250k'
    },
    {
      title: 'Regulatory Compliance Manager',
      department: 'Compliance',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Ensure our platform meets all regulatory requirements for financial institutions across global markets. Shape our compliance strategy.',
      requirements: ['JD or equivalent', 'Financial services compliance experience', 'GDPR/CCPA knowledge', 'Banking regulations expertise'],
      salary: '$150k - $200k'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive user interfaces for our AI explainability platform using modern web technologies. Make complex AI concepts accessible.',
      requirements: ['React/TypeScript expertise', 'UI/UX design skills', 'Experience with data visualization', '3+ years frontend experience'],
      salary: '$130k - $180k'
    },
    {
      title: 'Solutions Engineer',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Help enterprise clients integrate and optimize our explainability services for their specific use cases. Bridge technical and business needs.',
      requirements: ['Technical background', 'Customer-facing experience', 'Financial services knowledge', 'Problem-solving skills'],
      salary: '$120k - $160k'
    },
    {
      title: 'Data Scientist',
      department: 'Research',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Develop cutting-edge explainable AI algorithms for financial applications and publish research. Push the boundaries of AI transparency.',
      requirements: ['PhD in ML/Statistics', 'Research experience', 'Publications in top-tier conferences', 'Python/R expertise'],
      salary: '$160k - $220k'
    }
  ];

  const benefits = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family plus $2,000 annual wellness stipend'
    },
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Market-leading salary with equity participation and performance bonuses up to 25% of base salary'
    },
    {
      icon: '🏖️',
      title: 'Flexible PTO',
      description: 'Unlimited PTO policy with encouraged time off and company-wide breaks during holidays'
    },
    {
      icon: '🎓',
      title: 'Learning & Development',
      description: '$5,000 annual learning budget for conferences, courses, and professional development'
    },
    {
      icon: '🏠',
      title: 'Remote-First',
      description: 'Work from anywhere with quarterly team gatherings and optional office access in major cities'
    },
    {
      icon: '👶',
      title: 'Family Support',
      description: '16 weeks paid parental leave and $1,000 monthly childcare assistance'
    }
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in open communication and making AI decisions understandable to everyone, starting with our own team.',
      icon: '🔍'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we build and deliver to our clients and each other.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work together to solve complex problems and support each other\'s growth and success.',
      icon: '🤝'
    },
    {
      title: 'Impact',
      description: 'We\'re passionate about making financial AI more fair, accountable, and transparent for everyone.',
      icon: '🚀'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    setApplicationData({ name: '', email: '', position: '', message: '' });
  };

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Join the future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI transparency</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Help us build the next generation of explainable AI solutions for financial services. 
            Work with cutting-edge technology while making AI more transparent and accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              View open positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => document.getElementById('why-join')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Why join ExplainScore
            </button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="why-join" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why join ExplainScore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just technology—we're creating a culture of innovation, 
              transparency, and meaningful impact in financial AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits & perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive environment where you can do your best work 
              and make a meaningful impact on the future of AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help shape the future of explainable AI in financial services. 
              We're looking for passionate people to join our mission.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{job.salary}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button 
                      onClick={() => {
                        setApplicationData({ ...applicationData, position: job.title });
                        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full lg:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                    >
                      Apply now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apply to join our team
            </h2>
            <p className="text-xl text-gray-600">
              Don't see your perfect role? We're always looking for talented people. 
              Send us your information and let's start a conversation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={applicationData.name}
                    onChange={handleApplicationChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={applicationData.email}
                    onChange={handleApplicationChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  value={applicationData.position}
                  onChange={handleApplicationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a position or choose "Other"</option>
                  {jobs.map((job) => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={applicationData.message}
                  onChange={handleApplicationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about yourself, your experience, and why you want to join ExplainScore..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join us in revolutionizing how financial institutions approach AI transparency and compliance. 
            Be part of a team that's shaping the future of responsible AI.
          </p>
          <a
            href="mailto:explainscore@gmail.com?subject=Career Inquiry"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}