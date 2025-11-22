# Fixing Gmail API Authentication Scope Error

If you're getting "Request had insufficient authentication scopes" error, follow these steps:

## Option 1: Reconnect Your Gmail Service

1. **Go to EmailJS Dashboard** → **Email Services**
2. **Find your Gmail service** and click on it
3. **Click "Reconnect Service"** or **"Connect Account"**
4. **Sign in to Gmail** when prompted
5. **IMPORTANT:** When Google asks for permissions, make sure to:
   - ✅ Check the box for "Send email on your behalf"
   - ✅ Grant all requested permissions
   - Don't skip any permission screens
6. **Save the service** after reconnecting

## Option 2: Create a New Gmail Service with Proper Scopes

1. **Delete the old Gmail service** in EmailJS dashboard
2. **Add a new Email Service**
3. **Select Gmail**
4. **Connect your Gmail account**
5. **Grant ALL permissions** when prompted (especially "Send email" permission)
6. **Copy the new Service ID** and update your environment files

## Option 3: Use Personal SMTP Instead (More Reliable)

If Gmail OAuth keeps having issues, use Gmail's SMTP directly:

1. **In EmailJS Dashboard** → **Email Services** → **Add New Service**
2. **Select "Gmail" but use SMTP option** (not OAuth)
3. **Enable 2-Step Verification** on your Gmail account: https://myaccount.google.com/security
4. **Create an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "EmailJS" or "Portfolio"
   - Copy the 16-character password
5. **Configure EmailJS service**:
   - Email: your-email@gmail.com
   - Password: Use the App Password (not your regular password)
   - SMTP Server: smtp.gmail.com
   - Port: 465 or 587

## Option 4: Use a Different Email Provider

If Gmail continues to have issues, switch to a more reliable provider for EmailJS:

### **Recommended: Use Outlook/Hotmail (Easier OAuth)**
1. Create a free Outlook account: https://outlook.com
2. In EmailJS, add **Outlook** service
3. Connect and grant permissions
4. Update your Service ID in the code

### **Alternative: Use SendGrid SMTP**
1. Sign up for SendGrid free tier: https://sendgrid.com
2. Create an API key
3. Use SendGrid SMTP in EmailJS
4. More reliable for transactional emails

## After Fixing: Update Your Code

Once you have a working service, update your environment files:

**`src/environments/environment.ts`** and **`environment.prod.ts`**:
```typescript
export const environment = {
  production: false, // true for prod
  emailjs: {
    serviceId: 'service_XXXXXXX',    // Your NEW Service ID
    templateId: 'template_XXXXXXX',   // Your Template ID
    publicKey: 'YOUR_PUBLIC_KEY'      // Your Public Key
  }
};
```

## Test Your Setup

```bash
ng serve
```

1. Go to http://localhost:4200/contact
2. Fill out the form
3. Submit and check for errors in the browser console
4. Check your email inbox for the test message

## Common Mistakes

❌ **Not granting all permissions** during Gmail OAuth
❌ **Using regular Gmail password** instead of App Password
❌ **Skipping the "Send on behalf" permission**
❌ **Service ID not updated** after creating new service

✅ **Grant ALL permissions** when connecting
✅ **Use App Passwords** for SMTP
✅ **Update Service ID** in both environment files
✅ **Test in incognito** to rule out browser cache issues

## Still Having Issues?

Check the **browser console** (F12) for detailed error messages and share them for more specific help.
