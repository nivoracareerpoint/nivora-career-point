# Nivora Career Point — Website

A static, mobile-responsive marketing website with three working enquiry forms (Admissions, Jobs, Employers) plus a general Contact form. No backend/database required — built to deploy on Netlify as-is.

## Pages
- `index.html` — Homepage
- `about.html` — About the consultancy
- `admissions.html` — Admission enquiry form
- `jobs.html` — Job seeker enquiry form
- `employers.html` — Employer / recruitment requirement form
- `contact.html` — General contact form
- `privacy.html`, `terms.html` — Legal pages (**template text — have a professional review before publishing**, especially fees/refunds/guarantee sections)

## How the forms work
All four forms use **Netlify Forms** (`data-netlify="true"`). This means:
- No backend code needed — Netlify detects the forms automatically on deploy.
- Every submission appears in your Netlify dashboard under **Site → Forms**.
- You can turn on **email notifications** so every submission also lands in `nivoracareerpoint@gmail.com`:
  Site settings → Forms → Form notifications → Add notification → Email notification → enter your email.
- A spam honeypot field (`bot-field`) is already included on every form.

## Deploying to Netlify (drag-and-drop — easiest, no Git needed)
1. Go to [app.netlify.com](https://app.netlify.com) and log in / sign up.
2. From the dashboard, drag the whole `nivora-site` folder onto the **"Add new site" → "Deploy manually"** area.
3. Netlify gives you a live URL immediately (something like `random-name.netlify.app`).
4. Go to **Site settings → Forms** and turn on email notifications as described above.
5. (Optional) Go to **Domain settings** to connect a custom domain like `nivoracareerpoint.com` once you've bought one.

## Deploying via GitHub (better for future updates)
1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub** → select the repo.
3. Build command: leave blank. Publish directory: `.` (already set in `netlify.toml`).
4. Every future `git push` will auto-redeploy the site.

## Before going fully live — checklist
- [ ] Replace placeholder text in `privacy.html` and `terms.html` after legal review (pricing, refunds, guarantees are intentionally left blank — do not invent these).
- [ ] Add a phone/WhatsApp number once finalized (currently only email is listed, as that's what was confirmed).
- [ ] Buy and connect the `nivoracareerpoint.com` domain (or your final chosen domain) in Netlify.
- [ ] Once you have verified colleges/jobs to list, we can add real listing pages — the current site intentionally avoids inventing institution or job listings, per the "no fake claims" principle in your PRD.

## Later upgrades (not in this version)
Lead-management CRM, counsellor assignment, job approval workflow, candidate/employer portals, AI assistant, WhatsApp automation, payments — these are Phase 2 features from the PRD and were intentionally left out of this website-only build.
