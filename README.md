# Nivora Career Point

> A modern, responsive career and education consultancy website built for clear enquiries, trusted communication, and easy deployment.

[![Live-ready](https://img.shields.io/badge/Deployment-Netlify--ready-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![Built with](https://img.shields.io/badge/Built%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-E34F26)](https://github.com/nivoracareerpoint/nivora-career-point)

## Overview

Nivora Career Point is a static, mobile-responsive website created for a career and education consultancy. The site gives students, job seekers, employers, and general visitors a simple way to understand the service and submit an enquiry.

The project is intentionally lightweight: no framework, backend, database, or build process is required. It can be deployed directly through Netlify and maintained easily through GitHub.

## Highlights

- Clean, responsive design for desktop, tablet, and mobile
- Dedicated pages for admissions, jobs, employers, and general contact enquiries
- Netlify Forms integration with spam honeypot protection
- Accessible mobile navigation and form feedback
- SEO essentials including canonical URLs, robots.txt, and sitemap.xml
- Security-focused Netlify response headers
- Simple static architecture with fast deployment and low maintenance

## Website Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Homepage and primary introduction |
| `about.html` | Consultancy overview |
| `admissions.html` | Student admission enquiry form |
| `jobs.html` | Job seeker enquiry form |
| `employers.html` | Employer and recruitment requirement form |
| `contact.html` | General contact enquiry form |
| `privacy.html` | Privacy policy template for final review |
| `terms.html` | Terms and conditions template for final review |
| `css/style.css` | Complete website styling and responsive layout |
| `js/main.js` | Navigation and form interaction logic |
| `netlify.toml` | Netlify publish configuration and security headers |
| `robots.txt` | Search-engine crawling guidance |
| `sitemap.xml` | Search-engine page discovery |

## Forms and Enquiries

All four enquiry forms use Netlify Forms. No custom backend is needed.

After deployment:

1. Open the Netlify site dashboard.
2. Go to **Forms** to view submissions.
3. Configure email notifications if enquiries should be forwarded to the business inbox.
4. Test each form once from the live website before sharing it with clients.

## Deploy on Netlify

This repository is configured for a static Netlify deployment.

**Recommended settings:**

- Build command: leave blank
- Publish directory: `.`
- Branch: `main`

With GitHub connected to Netlify, every update pushed to `main` can trigger a fresh deployment automatically.

## Local Preview

Because this is a static website, it can be previewed without installing dependencies. Open `index.html` in a browser, or use any simple local static server for a closer production-style preview.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Before Final Client Handover

- Review and replace the template wording in `privacy.html` and `terms.html` with approved legal content.
- Confirm the final business email, phone number, and WhatsApp details.
- Connect the approved custom domain in Netlify.
- Submit test enquiries from the live site and verify they appear in Netlify Forms.
- Check the site on mobile and desktop before sharing the final link.

## Project Principles

This website keeps the front-end simple, professional, and maintainable. It avoids invented college listings, job listings, guarantees, pricing, or business claims until the client provides verified information.

## Credits

Built for **Nivora Career Point** with a focus on responsive design, clear user journeys, and reliable static deployment.
