# ABC Clinic — Official Website Project (Dhanbad, Jharkhand)

## 1. Project Overview

This project provides a complete, multi-page, responsive healthcare website framework for **ABC Clinic** in **Dhanbad, Jharkhand, India**.

The visual system, layout rhythm, typography scale (`Manrope`), color palette (`#025EC1`, `#213245`, `#59616B`, `#F5F9FE`, `#01264D`, `#013874`), pill button structure, card styling, and smooth motion transitions are independently reconstructed from the measured reference design tokens (`DESIGN.md`) with all proprietary branding, copy, and media replaced by clean ABC Clinic placeholders.

---

## 2. Technologies Used

### Standalone Static Package (`abc-clinic/`)
- **HTML5**: Semantic document landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) and accessible form labels.
- **CSS3**: Centralized `:root` custom properties, CSS Grid & Flexbox layouts, responsive media queries (`576px`, `768px`, `992px`, `1200px`, `1400px`), and `prefers-reduced-motion` support.
- **Vanilla JavaScript (ES5/ES6 compatible)**: Zero external JS dependencies; modular scripts for sticky navigation, mobile drawer, IntersectionObserver scroll reveals, testimonial slider, service filtering, and client-side form validation.
- **Google Fonts**: `Manrope` (`400`, `500`, `600`, `700`, `800`).

### Interactive Preview Application (Workspace Root)
- **React 19 + TypeScript + Vite + Tailwind CSS v4**: Mirrors the exact same ABC Clinic multi-page design system for interactive preview and testing.

---

## 3. Project Folder Structure

```text
abc-clinic/
├── index.html
├── README.md
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── doctors.html
│   ├── contact.html
│   └── appointment.html
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   │   └── logo-placeholder.svg
│   │   ├── hero/
│   │   │   └── hero-image-placeholder.svg
│   │   ├── doctors/
│   │   │   └── doctor-image-placeholder.svg
│   │   ├── clinic/
│   │   │   └── clinic-image-placeholder.svg
│   │   └── placeholders/
│   │       └── medical-image-placeholder.svg
│   ├── icons/
│   └── fonts/
├── css/
│   ├── style.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── navigation.js
    ├── animations.js
    └── forms.js
```

---

## 4. Installation Instructions

1. Download and extract **`ABC-Clinic-Website.zip`** to any directory on your computer.
2. No build tools, package managers, or compilers are required to run the standalone `abc-clinic/` website.

---

## 5. Local Development Instructions

### Option A — Direct Browser Open
Open `abc-clinic/index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option B — Local HTTP Server (Recommended)
Run a lightweight local server from inside the extracted `abc-clinic/` folder:

```bash
# Using Python 3
python3 -m http.server 8080

# OR using Node.js
npx serve .
```

Then open `http://localhost:8080` in your browser.

---

## 6. How to Replace the Logo

1. Export ABC Clinic's final logo as SVG (recommended) or transparent PNG (`240×240px` or horizontal lockup).
2. Save it into `assets/images/logo/` (for example, `abc-clinic-logo.svg`).
3. Replace `assets/images/logo/logo-placeholder.svg` across `index.html` and `pages/*.html`, update the `alt` attribute to `"ABC Clinic Logo"`, and remove the `<span class="brand-link__token">[LOGO_PLACEHOLDER]</span>` element.

---

## 7. How to Replace Images

Replace the placeholder SVGs in `assets/images/` with optimized `.webp` or `.jpg` photographs (keep images under `250 KB` for fast page loads):

| Placeholder Token | Current File | Recommended Aspect Ratio |
|---|---|---|
| `[HERO_IMAGE]` | `assets/images/hero/hero-image-placeholder.svg` | `16:10` or `4:3` landscape (`1400×950px`) |
| `[CLINIC_IMAGE]` | `assets/images/clinic/clinic-image-placeholder.svg` | `4:3` landscape (`1000×750px`) |
| `[DOCTOR_IMAGE]` | `assets/images/doctors/doctor-image-placeholder.svg` | `4:3` or `1:1` portrait (`800×800px`) |
| `[MEDICAL_IMAGE]` | `assets/images/placeholders/medical-image-placeholder.svg` | `4:3` landscape (`1000×750px`) |

Update the corresponding `<img src="...">` paths and descriptive `alt` text in `index.html` and `pages/*.html`.

---

## 8. How to Update Clinic Information

Search the project folder for every uppercase bracketed placeholder listed below and replace with verified ABC Clinic details:

- `[PHONE]` — Official clinic phone number (also update `tel:[PHONE]` links).
- `[EMAIL]` — Official clinic email address (also update `mailto:[EMAIL]` links).
- `[HOURS]` — Confirmed operating hours (e.g., `Mon–Sat, 9:00 AM – 7:00 PM`).
- `[FULL_ADDRESS]` / `[CLINIC_ADDRESS]` — Street address and landmark in Dhanbad, Jharkhand.
- `[WHATSAPP_NUMBER]` — Clinic WhatsApp number with country code (digits only, e.g., `9198XXXXXXXX`).
- `[LOGO_PLACEHOLDER]` — Remove once the official logo is installed.
- `[DOCTOR_NAME]` — Verified doctor name(s).
- `[DOCTOR_QUALIFICATION]` — Verified medical degree(s) (e.g., MBBS, MD, MS).
- `[DOCTOR_EXPERIENCE]` — Verified clinical practice duration.
- `[SERVICES]` — Finalized list of clinical specialties and treatments.
- `[STATISTIC_VALUE]` — Verified clinic statistics (do not publish unverified numbers).
- `[TESTIMONIAL_PLACEHOLDER]` & `[PATIENT_NAME_01..04]` — Consented patient reviews.
- `[CLINIC_HISTORY_PLACEHOLDER]` — Approved clinic background narrative in `pages/about.html`.
- `[MAP_EMBED_PLACEHOLDER]` — Verified Google Maps embed iframe in `pages/contact.html`.
- `[INSTAGRAM_URL]`, `[FACEBOOK_URL]`, `[YOUTUBE_URL]`, `[LINKEDIN_URL]` — Official social links.
- `[UPDATE_DATE]` — Dates for published health articles or announcements.

---

## 9. How to Update Services

1. Edit the service cards in `index.html` (homepage preview grid) and `pages/services.html` (full filterable catalog).
2. Each card in `pages/services.html` uses a `data-service-card="consultations|diagnostics|specialized|telemedicine"` attribute connected to the top filter tabs (`[data-service-filters]`).
3. Also update the `<select id="appt-service">` options inside `pages/appointment.html` so patients can choose from the exact finalized list of services.

---

## 10. How to Update Contact Details

Update phone, email, WhatsApp, operating hours, and address in:
- Top information bar in `index.html` and `pages/*.html`.
- Contact section in `index.html` and `pages/contact.html`.
- Sidebar visiting details in `pages/appointment.html`.
- Footer contact column and floating WhatsApp button across all HTML files.

---

## 11. How to Customize Colors

All visual tokens are centralized inside `css/style.css` under `:root`:

```css
:root {
  --color-primary: #025EC1;
  --color-dark: #213245;
  --color-text: #59616B;
  --color-white: #FFFFFF;
  --color-light: #F5F9FE;
  --color-navy-dark: #01264D;
  --color-navy-secondary: #013874;
  --color-red-accent: #ED2E27;
}
```

Adjusting these CSS custom properties updates buttons, headings, surfaces, borders, and footer gradients site-wide.

---

## 12. How to Modify Animations

- Reveal transitions and timing curves live in `css/animations.css`.
- IntersectionObserver thresholds and trigger margins are configured in `js/animations.js`.
- Button and card hover transitions use `--transition-fast` (`0.2s`), `--transition-standard` (`0.3s`), and `--transition-slow` (`0.6s`) defined in `css/style.css`.
- All animations automatically respect `@media (prefers-reduced-motion: reduce)`.

---

## 13. How to Configure Forms

Both forms (`pages/contact.html`, `index.html`, and `pages/appointment.html`) currently implement **client-side validation only** in `js/forms.js`. Submissions are **not stored or emailed** until you connect a backend.

To enable live form delivery:
1. Choose a form backend (e.g., Formspree, Web3Forms, Netlify Forms, or a custom Node.js / PHP / Express API route).
2. Inside `js/forms.js`, replace the client-only confirmation block with a `fetch('https://your-endpoint.example/api/submit', { method: 'POST', ... })` call sending serialized `FormData` or JSON.
3. Add server-side validation, spam protection (honeypot/reCAPTCHA), and HTTPS before collecting patient information.

---

## 14. Deployment Preparation Notes

Before publishing ABC Clinic's website live:
1. Search the codebase for `[` and verify zero bracketed placeholders remain.
2. Replace all SVG placeholder graphics with verified, compressed clinic photography.
3. Verify `<title>` and `<meta name="description">` on every page accurately reflect ABC Clinic's verified medical services.
4. Test all `tel:`, `mailto:`, and WhatsApp links on iOS and Android devices.
5. Configure HTTPS/SSL on your hosting provider (Netlify, Vercel, Cloudflare Pages, cPanel, or Apache/Nginx) and verify mobile responsiveness across `375px` to `1920px`.
