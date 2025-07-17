import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import { siteConfig } from '../config/site';
import { sendContactEmail, sendDemoEmail } from '../utils/email';
import { ContactFormData, DemoFormData } from '../types';

export default function Contact() {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  // const [demoForm, setDemoForm] = useState<DemoFormData>({
  //   name: '',
  //   email: '',
  //   company: '',
  //   phone: '',
  //   preferredDate: '',
  //   preferredTime: '',
  //   message: ''
  // });

  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  // const [demoStatus, setDemoStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    setContactStatus('idle');

    try {
      const success = await sendContactEmail(contactForm);
      if (success) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setContactStatus('error');
      }
    } catch (error) {
      setContactStatus('error');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  // const handleDemoSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsDemoSubmitting(true);
  //   setDemoStatus('idle');

  //   try {
  //     const success = await sendDemoEmail(demoForm);
  //     if (success) {
  //       setDemoStatus('success');
  //       setDemoForm({
  //         name: '',
  //         email: '',
  //         company: '',
  //         phone: '',
  //         preferredDate: '',
  //         preferredTime: '',
  //         message: ''
  //       });
  //     } else {
  //       setDemoStatus('error');
  //     }
  //   } catch (error) {
  //     setDemoStatus('error');
  //   } finally {
  //     setIsDemoSubmitting(false);
  //   }
  // };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  // const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setDemoForm({
  //     ...demoForm,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to make your AI transparent? We're here to help you get started with 
            explainable AI for your financial institution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
              
              {contactStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {contactStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="Your full name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
                
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="your.email@company.com"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
                
                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Tell us about your AI explainability needs..."
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                  rows={6}
                />
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isContactSubmitting}
                  className="w-full flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-2">Get in touch with our team</p>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Monday - Friday, 9AM - 6PM IST</p>
                    <p className="text-blue-600 font-medium">{siteConfig.phone}</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Quick Actions */}
              {/* <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}?subject=Enterprise Plan Inquiry`}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Talk to Sales
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      const demoSection = document.getElementById('demo-form');
                      demoSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Scheduling Section
      <section id="demo-form" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a Demo
            </h2>
            <p className="text-xl text-gray-600">
              Book a personalized demo to see how ExplainScore can help your organization
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {demoStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                Demo request sent successfully! We'll contact you to confirm the schedule.
              </div>
            )}
            
            {demoStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                Failed to send demo request. Please try again or contact us directly.
              </div>
            )}
            
            <form onSubmit={handleDemoSubmit} className="grid md:grid-cols-2 gap-6">
              <Input
                id="demo-name"
                name="name"
                type="text"
                label="Full Name"
                placeholder="Your full name"
                value={demoForm.name}
                onChange={handleDemoChange}
                required
              />
              
              <Input
                id="demo-email"
                name="email"
                type="email"
                label="Email"
                placeholder="your.email@company.com"
                value={demoForm.email}
                onChange={handleDemoChange}
                required
              />
              
              <Input
                id="demo-company"
                name="company"
                type="text"
                label="Company"
                placeholder="Your company name"
                value={demoForm.company}
                onChange={handleDemoChange}
                required
              />
              
              <Input
                id="demo-phone"
                name="phone"
                type="tel"
                label="Phone"
                placeholder="Your phone number"
                value={demoForm.phone}
                onChange={handleDemoChange}
                required
              />
              
              <Input
                id="demo-date"
                name="preferredDate"
                type="date"
                label="Preferred Date"
                value={demoForm.preferredDate}
                onChange={handleDemoChange}
                required
              />
              
              <Input
                id="demo-time"
                name="preferredTime"
                type="time"
                label="Preferred Time"
                value={demoForm.preferredTime}
                onChange={handleDemoChange}
                required
              />
              
              <div className="md:col-span-2">
                <Textarea
                  id="demo-message"
                  name="message"
                  label="Additional Information"
                  placeholder="Tell us about your specific needs or questions..."
                  value={demoForm.message}
                  onChange={handleDemoChange}
                  rows={4}
                />
              </div>
              
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isDemoSubmitting}
                  className="w-full flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {isDemoSubmitting ? 'Scheduling...' : 'Schedule Demo'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to frequently asked questions
            </p>
          </div>
          
          <div className="space-y-6">
            {siteConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}