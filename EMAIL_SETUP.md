# Email Setup Guide

To enable actual email sending functionality, you need to set up EmailJS.

## Current Status
The email service has been fixed and will now properly attempt to send emails when configured. If environment variables are missing, it will return `false` instead of simulating success.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Contact Form Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it "Contact Form"
4. Use this template:

```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This is a new contact form submission from the ExplainScore website.
```

5. Note down the **Template ID**

### Demo Request Template
1. Create another template named "Demo Request"
2. Use this template:

```
Subject: New Demo Request from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Additional Information: {{message}}

This is a new demo request from the ExplainScore website.
```

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Create Environment File

1. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```

2. Add your EmailJS credentials to the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_CONTACT_EMAIL=your_contact_email@example.com
   VITE_DEMO_EMAIL=your_demo_email@example.com
   ```

## Step 6: Test Email Functionality

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the Contact page
3. Fill out and submit the contact form
4. Check your email inbox for the message
5. Check the browser console for any error messages

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured" warning in console**
   - Make sure you've created the `.env` file
   - Verify all environment variables are set correctly
   - Restart your development server after creating the `.env` file

2. **"Failed to send message" error**
   - Check that your EmailJS service is properly configured
   - Verify your email templates have the correct variable names
   - Check the browser console for specific error messages

3. **Environment variables not loading**
   - Make sure the `.env` file is in the project root (same level as `package.json`)
   - Restart your development server
   - Check that variable names start with `VITE_`

4. **EmailJS service errors**
   - Verify your email service is active in EmailJS dashboard
   - Check that your email provider credentials are correct
   - Ensure your email templates are published

### Debug Information:
The email service now logs detailed information to the console:
- When attempting to send emails
- What environment variables are missing
- Success/failure status of email sending

## Alternative Email Services

If you prefer not to use EmailJS, you can also integrate with:
- SendGrid
- Mailgun
- AWS SES
- Your own backend API

Just update the `sendContactEmail` and `sendDemoEmail` functions in `src/utils/email.ts` accordingly.

## Development vs Production

- **Development**: Uses environment variables from `.env` file
- **Production**: Make sure to set the same environment variables in your hosting platform (Vercel, Netlify, etc.) 