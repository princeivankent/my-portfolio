# EmailJS Setup Guide

This guide will help you configure EmailJS for your portfolio's contact form.

## Prerequisites

You should have already signed up for EmailJS at [https://www.emailjs.com/](https://www.emailjs.com/)

## Step 1: Get Your EmailJS Credentials

### 1.1 Get your Public Key
1. Log in to your EmailJS dashboard
2. Go to **Account** → **General**
3. Copy your **Public Key** (it looks like: `your_public_key_here`)

### 1.2 Create an Email Service
1. Go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Copy your **Service ID** (it looks like: `service_xxxxxxx`)

### 1.3 Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT:** Configure the template settings:
   - **To Email:** your email (where you want to receive messages)
   - **Reply-To:** `{{reply_to}}` ← This is crucial! When you click reply, it will go to the sender
   - **Subject:** `Portfolio Contact: {{subject}}`
   - **From Name:** Can be "Portfolio Contact Form" or your name

4. Use this **Email Body** template:

```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.
```

5. Make sure these variables are in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{reply_to}}` - Reply-to address (same as from_email)
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body

6. Copy your **Template ID** (it looks like: `template_xxxxxxx`)

## Step 2: Configure Your Application

Update the environment files with your EmailJS credentials:

### Development Environment
Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_xxxxxxx',    // Your Service ID from step 1.2
    templateId: 'template_xxxxxxx',  // Your Template ID from step 1.3
    publicKey: 'your_public_key'     // Your Public Key from step 1.1
  }
};
```

### Production Environment
Edit `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  emailjs: {
    serviceId: 'service_xxxxxxx',    // Your Service ID from step 1.2
    templateId: 'template_xxxxxxx',  // Your Template ID from step 1.3
    publicKey: 'your_public_key'     // Your Public Key from step 1.1
  }
};
```

## Step 3: Test Your Configuration

1. Run your development server:
   ```bash
   ng serve
   ```

2. Navigate to the contact page: `http://localhost:4200/contact`

3. Fill out and submit the test form

4. Check your email inbox for the message

## Troubleshooting

### Email not sending?
- Check the browser console for errors
- Verify your EmailJS credentials are correct
- Make sure your EmailJS service is active
- Check EmailJS dashboard for error logs

### Template variables not working?
- Ensure template variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Variables are case-sensitive

### Rate limits
- EmailJS free tier allows 200 emails/month
- Monitor your usage in the EmailJS dashboard

## Security Notes

- **NEVER commit your real EmailJS credentials to Git**
- Add `src/environments/environment.ts` and `src/environments/environment.prod.ts` to `.gitignore` if they contain real credentials
- For public repositories, use environment variables or GitHub Secrets for production

## Support

For EmailJS-specific issues, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
