import { ContactFormData, DemoFormData } from '../types';
import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'explainscore@gmail.com';
const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL || 'explainscore@gmail.com';

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending contact email:', formData);
    
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Please set up environment variables.');
      console.warn('Missing:', {
        serviceId: !EMAILJS_SERVICE_ID,
        templateId: !EMAILJS_TEMPLATE_ID,
        publicKey: !EMAILJS_PUBLIC_KEY
      });
      return false;
    }

    // Send real email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: CONTACT_EMAIL,
        subject: 'New Contact Form Submission'
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', result);
    return result.status === 200;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

export const sendDemoEmail = async (formData: DemoFormData): Promise<boolean> => {
  try {
    console.log('Sending demo request email:', formData);
    
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Please set up environment variables.');
      console.warn('Missing:', {
        serviceId: !EMAILJS_SERVICE_ID,
        templateId: !EMAILJS_TEMPLATE_ID,
        publicKey: !EMAILJS_PUBLIC_KEY
      });
      return false;
    }

    // Send real email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message,
        to_email: DEMO_EMAIL,
        subject: 'New Demo Request'
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Demo email sent successfully:', result);
    return result.status === 200;
  } catch (error) {
    console.error('Error sending demo email:', error);
    return false;
  }
}; 