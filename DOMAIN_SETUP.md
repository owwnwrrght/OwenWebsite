# Setting Up Your Domain (owen-wright.com)

This guide will help you set up your domain with your portfolio website.

## Hosting Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository named `username.github.io` (replace username with your GitHub username)
2. Push your website files to this repository
3. Go to repository Settings > Pages to enable GitHub Pages
4. Your site will be live at `username.github.io`
5. To use your custom domain (owen-wright.com):
   - Add a file named `CNAME` in your repository with the content: `owen-wright.com`
   - Go to your domain registrar and update DNS settings:
     - Create an A record pointing to GitHub Pages IP addresses:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or create a CNAME record pointing to `username.github.io`

### Option 2: Netlify (Free plan available)

1. Create an account on Netlify (netlify.com)
2. Push your website to a GitHub repository
3. In Netlify:
   - Go to "Sites" > "Add new site" > "Import an existing project"
   - Connect to your GitHub repository
   - Follow the setup instructions
4. To use your custom domain:
   - Go to "Domain settings" > "Add custom domain"
   - Enter `owen-wright.com`
   - Follow the provided DNS instructions
   - Netlify will guide you through the process

### Option 3: Vercel (Free plan available)

1. Create an account on Vercel (vercel.com)
2. Push your website to a GitHub repository
3. In Vercel:
   - Click "New Project"
   - Import your GitHub repository
   - Follow the setup instructions
4. To use your custom domain:
   - Go to "Project Settings" > "Domains"
   - Add your domain `owen-wright.com`
   - Follow the DNS instructions provided

## Domain Name Registrar Configuration

Regardless of which hosting service you choose, you'll need to set up DNS records at your domain registrar:

1. Log in to your domain registrar (where you purchased owen-wright.com)
2. Find the DNS settings or DNS management section
3. Add the appropriate records:
   - If using GitHub Pages: Add A records or a CNAME as described above
   - If using Netlify/Vercel: They will provide specific DNS records to add

## SSL Certificate

All the options above provide free SSL certificates, ensuring your site uses HTTPS. You might need to:

1. Enable SSL in your hosting settings
2. Wait a few hours for the certificate to be issued and activated

## Verification

After setting up your domain:

1. Wait for DNS changes to propagate (can take up to 48 hours)
2. Test your website by visiting owen-wright.com
3. Check that HTTPS is working correctly (look for the lock icon in the browser)