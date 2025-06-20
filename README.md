# First Class Grass - Landing Page

This repository contains the landing page for First Class Grass, a professional lawn service company operating in the Harlowe Point and Pagehurst neighborhoods of Durham, NC.

## Project Overview

First Class Grass provides bi-weekly mowing services with the following pricing tiers:

- Basic Mowing: $30/month
- Mowing + Trimming: $35/month (Main Service)
- Premium Package (includes Precise Edge Trimming): $45/month

## Tech Stack

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Netlify Forms for form handling

## Project Structure

```
first-class-grass-site/
├── index.html                  # Main landing page
├── assets/                     # Static assets
│   ├── images/                 # Image files
│   │   ├── favicon.ico
│   │   └── hero-bg.jpg
│   ├── css/                    # CSS files
│   │   ├── tailwind.css        # Tailwind CSS source
│   │   └── style.css           # Compiled CSS
│   └── js/                     # JavaScript files
│       └── main.js             # Main JavaScript file
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Project dependencies
├── netlify.toml                # Netlify configuration
└── README.md                   # Project documentation
```

## Development

To set up the project for development:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the CSS:
   ```
   npm run build:css
   ```
4. For development with live CSS updates:
   ```
   npm run dev
   ```

## Deployment Checklist

Before deploying to Netlify, ensure you've completed the following steps:

1. **Pre-deployment Verification**

   - [x] Run `npm run build` to generate the production CSS
   - [ ] Test the website locally to ensure all sections display correctly
   - [ ] Verify all links are working properly
   - [ ] Check mobile responsiveness at different viewport sizes
   - [ ] Ensure all images are optimized and loading correctly
   - [ ] Validate HTML for any errors
   - [ ] Check for console errors in the browser developer tools

2. **Netlify Forms Verification**

   - [ ] Confirm all forms have the `data-netlify="true"` attribute
   - [ ] Verify hidden input fields with `name="form-name"` are present
   - [ ] Test form validation functionality
   - [ ] Ensure required fields are properly marked

3. **Deployment Steps**

   **Option 1: Deploy using the Netlify CLI**

   ```
   # Install Netlify CLI if you don't have it
   npm install -g netlify-cli

   # Login to your Netlify account
   netlify login

   # Initialize a new Netlify site
   netlify init

   # Deploy the site
   netlify deploy --prod
   ```

   **Option 2: Deploy using the Netlify web interface**

   - Go to [app.netlify.com](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, etc.)
   - Select the repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.` (root directory)
   - Click "Deploy site"

4. **Post-deployment Tasks**
   - [ ] Verify the deployed site works correctly
   - [ ] Test form submissions on the live site
   - [ ] Check site performance using Netlify analytics
   - [ ] Set up custom domain (if available)

## Custom Domain Setup

To connect a custom domain to your Netlify site:

1. Go to your Netlify site dashboard
2. Navigate to "Domain settings" or "Domain management"
3. Click "Add custom domain"
4. Enter your domain name and follow the verification steps
5. Update your domain's DNS settings:
   - Option 1: Use Netlify DNS (recommended)
     - Update your domain's nameservers to Netlify's nameservers
   - Option 2: Add CNAME/A records at your current DNS provider
     - Add a CNAME record pointing to your Netlify site URL
     - Or add A records pointing to Netlify's load balancer IPs

## Managing Form Submissions

To access and manage form submissions:

1. Log in to your Netlify account
2. Select your site from the dashboard
3. Click on "Forms" in the left navigation menu
4. You'll see a list of all forms on your site and their submissions
5. Click on a form name to view all submissions
6. You can:
   - Export submissions as CSV
   - Set up form notifications via email
   - Connect to third-party services using webhooks

The site has two forms:

- Contact form (`name="contact"`)
- App notification form (`name="app-notification"`)

## Form Handling

The site uses Netlify Forms to handle form submissions. No additional setup is required as the forms are configured with the `data-netlify="true"` attribute in the HTML.

## Contact Information

- Name: Abdur-Rahman Bilal
- Phone: +1 404 548 8241
- Email: firstclassgrass.nc@gmail.com
- Cash App: $arambilal
- Service Area: Harlowe Point & Pagehurst Neighborhoods, Durham, NC 27703

---

## Original Spec Sheet

First Class Grass - App Quick Spec Sheet

⸻

Project: First Class Grass Subscription App

Contact Information
• Name: Abdur-Rahman Bilal
• Phone: +1 404 548 8241
• Email: firstclassgrass.nc@gmail.com
• Cash App: $arambilal

⸻

Service Overview
• Service Provided: Bi-weekly mowing and trimming (twice per month)
• Subscription Price: $35/month
• Add-On: Precise Edge Trimming – $10 (optional)
• Area: Harlowe Point Neighborhood, Durham, NC 27703; Pagehurst Neighborhood, Durham, NC, 27703
• Audience: Harlowe Point & Pagehurst residents only

⸻

Login and Authentication (Phase 2 – Planned)

Two Login Options: 1. Address + Email OTP:
• User chooses their neighborhood (Harlowe Point or Pagehurst)
• Enters house number
• Selects street name from dropdown list
• City (Durham) and Zip Code (27703) locked
• Receives OTP to email for verification 2. Email + Password:
• Traditional sign-up and login
• Address still selected via number and dropdown

Important: Only pre-approved street names available in dropdown.

⸻

Dashboard Features (Phase 1 – Build First)
• See "Next Mow Date"
• Subscription Status (Active / Paused / Canceled)
• Update Payment Method (Stripe via Billing.js)
• Pause/Cancel Subscription
• Notification Center (Service Updates, Delay Notices)

⸻

Payment Integration
• Platform: Stripe (via Billing.js)
• Subscription: Auto-renew monthly unless canceled
• Customer Options: Pause or Cancel via dashboard
• Alternative Payment (temporary): Cash App: $arambilal

⸻

Website Structure (Temporary Landing Site)

Page Details
Home Service introduction, Pricing, "Book Now" CTA
Feedback Simple form for user interest / early feedback
Contact Basic contact info (email, phone)

⸻

Database Structure

Table Fields
Users ID, Name, Email, House Number, Street Name, Neighborhood, City, Zip, Status
Subscriptions ID, User ID, Stripe Customer ID, Status, Plan, Start Date, Next Billing Date
MowSchedules ID, User ID, Next Mow Date, Last Mow Date, Notes
Notifications ID, User ID, Type (Reminder, Delay, Update), Message, Date Sent, Read Status

⸻

Notifications (Email)
• Welcome Email
• Subscription Confirmation
• Monthly Payment Receipt
• Mow Reminder (1 day before)
• Delay Notification
• Pause/Cancel Confirmation

⸻

Technical Notes
• Frontend: HTML/CSS/JS or React
• Backend: Node.js/Express
• Database: Supabase, Firebase, or SQL
• Hosting: Netlify, Vercel, or Render

⸻

Visual & UI Notes
• Pricing tiers:
• Mowing Only: $30/month
• Mowing + Trimming: $35/month (Main Service)
• Precise Edge Trimming: +$10
• Mobile-first design
• Easy-to-use dashboard and form layout
• Email + Street Dropdown system for address targeting
