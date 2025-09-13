# Email Setup Guide for DevCortex Contact Form

## Overview
Your contact form is now configured to send emails using SMTP. Follow these steps to complete the setup.

## Step 1: Environment Variables Setup

1. **Create a `.env` file** in the root directory of your project
2. **Copy the contents** from `env.example` and update with your email settings:

```bash
# Gmail Setup (Recommended)
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
PORT=3001
```

## Step 2: Gmail SMTP Setup (Recommended)

### Enable 2-Factor Authentication:
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification"

### Generate App Password:
1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "DevCortex Website" as the name
5. Copy the generated 16-character password
6. Use this password as `SMTP_PASS` in your `.env` file

## Step 3: Alternative Email Providers

### Outlook/Hotmail:
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail:
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP:
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
```

## Step 4: Testing Locally

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm run server
   ```

3. **Visit:** `http://localhost:3001`

4. **Test the contact form** by filling it out and submitting

## Step 5: Production Deployment

### For GitHub Pages with Backend:
Since GitHub Pages only serves static files, you'll need a separate backend service:

1. **Deploy backend to Vercel:**
   - Upload your project to GitHub
   - Connect Vercel to your GitHub repo
   - Add environment variables in Vercel dashboard
   - Deploy

2. **Update API endpoint** in `src/components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://your-app.vercel.app/api/contact', {
   ```

### For Full-Stack Hosting (Recommended):
Deploy to platforms like:
- **Vercel** (Recommended for React apps)
- **Netlify** (With serverless functions)
- **Railway** (Full-stack hosting)
- **DigitalOcean App Platform**

## Step 6: Security Considerations

1. **Never commit `.env` file** to version control
2. **Use environment variables** in production
3. **Enable CORS** only for your domain
4. **Add rate limiting** to prevent spam
5. **Validate all form inputs** server-side

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check if 2FA is enabled
   - Verify app password is correct
   - Try generating a new app password

2. **"Connection refused"**
   - Check SMTP host and port
   - Verify firewall settings
   - Try different port (465 for SSL)

3. **Form not submitting**
   - Check browser console for errors
   - Verify API endpoint URL
   - Check CORS configuration

### Testing Email Locally:
```bash
# Install nodemailer test account (for development)
npm install --save-dev nodemailer
```

## Support

If you need help with the setup:
1. Check the browser console for errors
2. Check server logs for SMTP errors
3. Test with a simple email first
4. Contact your hosting provider for SMTP support

## Files Modified:
- ✅ `api/contact.js` - Email sending API
- ✅ `server.js` - Express server setup
- ✅ `src/components/Contact.tsx` - Form with AJAX submission
- ✅ `package.json` - Added server scripts
- ✅ `env.example` - Environment variables template

Your contact form is now ready to send emails! 🎉
