// Email configuration checker utility
export const checkEmailConfig = () => {
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
  const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL;

  const config = {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    publicKey: EMAILJS_PUBLIC_KEY,
    contactEmail: CONTACT_EMAIL,
    demoEmail: DEMO_EMAIL,
    isConfigured: !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY),
    missing: [] as string[]
  };

  if (!EMAILJS_SERVICE_ID) config.missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_TEMPLATE_ID) config.missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!EMAILJS_PUBLIC_KEY) config.missing.push('VITE_EMAILJS_PUBLIC_KEY');

  return config;
};

export const logEmailConfig = () => {
  const config = checkEmailConfig();
  
  console.group('📧 Email Configuration Status');
  console.log('Configured:', config.isConfigured);
  
  if (config.isConfigured) {
    console.log('✅ All required EmailJS variables are set');
    console.log('Service ID:', config.serviceId ? '✓ Set' : '✗ Missing');
    console.log('Template ID:', config.templateId ? '✓ Set' : '✗ Missing');
    console.log('Public Key:', config.publicKey ? '✓ Set' : '✗ Missing');
    console.log('Contact Email:', config.contactEmail || 'Using default');
    console.log('Demo Email:', config.demoEmail || 'Using default');
  } else {
    console.warn('❌ EmailJS not fully configured');
    console.log('Missing variables:', config.missing);
    console.log('Please follow the setup guide in EMAIL_SETUP.md');
  }
  
  console.groupEnd();
  
  return config;
}; 