# ABC Clinic — Official Website Project (Dhanbad, Jharkhand)

> **Deliverables included in this repository:**
> - **Interactive Preview App (`/src`)**: Full multi-page React + Vite preview faithfully implementing the ABC Clinic design system.
> - **Standalone HTML5 / CSS3 / Vanilla JS Website (`/abc-clinic/`)**: Zero-dependency static project ready to extract and deploy.
> - **Downloadable Archive (`/ABC-Clinic-Website.zip` & `/public/ABC-Clinic-Website.zip`)**: Ready-to-extract ZIP of the complete `abc-clinic/` website.

---

## 1. Project Overview

This project delivers a complete, responsive healthcare website framework for **ABC Clinic** in **Dhanbad, Jharkhand, India**, reconstructed from the measured visual design tokens (`DESIGN.md`) using the `Manrope` type scale, `#025EC1` primary medical blue, `#213245` dark slate headings, `#F5F9FE` surface tints, `#01264D → #013874` deep navy accents, pill CTA buttons (`border-radius: 50px`), `12px` card radii, and smooth CSS + IntersectionObserver transitions.

---

## 2. Technologies Used

- **Standalone Static Package (`abc-clinic/`)**: Semantic HTML5, Modular CSS3 (`style.css`, `components.css`, `animations.css`, `responsive.css`), Vanilla JavaScript (`navigation.js`, `animations.js`, `forms.js`, `main.js`), and SVG visual placeholders.
- **Interactive Preview (`/src`)**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide icons.

---

## 3. Project Folder Structure (`abc-clinic/`)

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
│   │   ├── logo/logo-placeholder.svg
│   │   ├── hero/hero-image-placeholder.svg
│   │   ├── doctors/doctor-image-placeholder.svg
│   │   ├── clinic/clinic-image-placeholder.svg
│   │   └── placeholders/medical-image-placeholder.svg
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

Extract `ABC-Clinic-Website.zip` to a local folder. No build step is required for the standalone HTML5/CSS3/JS website inside `abc-clinic/`.

---

## 5. Local Development Instructions

- **Static site**: Open `abc-clinic/index.html` in a browser or serve `abc-clinic/` via `python3 -m http.server 8080` or `npx serve abc-clinic`.
- **Interactive preview**: Run `npm install` and `npm run dev` from the repository root (runs on port `3000`).

---

## 6. How to Replace the Logo

Replace `abc-clinic/assets/images/logo/logo-placeholder.svg` (and `LogoPlaceholder` in `src/components/PlaceholderVisual.tsx`) with ABC Clinic's final SVG or PNG logo, update the `alt` text, and remove the `[LOGO_PLACEHOLDER]` label.

---

## 7. How to Replace Images

Swap the SVG files in `abc-clinic/assets/images/` for verified clinic photography:
- `[HERO_IMAGE]` → `assets/images/hero/`
- `[CLINIC_IMAGE]` → `assets/images/clinic/`
- `[DOCTOR_IMAGE]` → `assets/images/doctors/`
- `[MEDICAL_IMAGE]` → `assets/images/placeholders/`

---

## 8. How to Update Clinic Information

Replace every uppercase bracketed placeholder across `abc-clinic/` and `src/data/clinicData.ts`:
- `[PHONE]`, `[EMAIL]`, `[HOURS]`, `[FULL_ADDRESS]`, `[CLINIC_ADDRESS]`, `[WHATSAPP_NUMBER]`
- `[LOGO_PLACEHOLDER]`, `[HERO_IMAGE]`, `[CLINIC_IMAGE]`, `[DOCTOR_IMAGE]`, `[MEDICAL_IMAGE]`
- `[DOCTOR_NAME]`, `[DOCTOR_QUALIFICATION]`, `[DOCTOR_EXPERIENCE]`
- `[SERVICES]`, `[STATISTIC_VALUE]`, `[TESTIMONIAL_PLACEHOLDER]`, `[PATIENT_NAME_01..04]`
- `[CLINIC_HISTORY_PLACEHOLDER]`, `[MAP_EMBED_PLACEHOLDER]`, `[UPDATE_DATE]`
- `[INSTAGRAM_URL]`, `[FACEBOOK_URL]`, `[YOUTUBE_URL]`, `[LINKEDIN_URL]`

---

## 9. How to Update Services

Update service entries in `abc-clinic/index.html`, `abc-clinic/pages/services.html`, `abc-clinic/pages/appointment.html` (select options), and `src/data/clinicData.ts`.

---

## 10. How to Update Contact Details

Update click-to-call `tel:[PHONE]`, `mailto:[EMAIL]`, WhatsApp URLs (`https://wa.me/[WHATSAPP_NUMBER]`), hours (`[HOURS]`), and address (`[FULL_ADDRESS], Dhanbad, Jharkhand`) in header bars, contact sections, appointment sidebars, and footers.

---

## 11. How to Customize Colors

Modify CSS variables in `abc-clinic/css/style.css` (and `src/index.css`) under `:root`.

---

## 12. How to Modify Animations

Adjust reveal classes in `abc-clinic/css/animations.css` and IntersectionObserver thresholds in `abc-clinic/js/animations.js`. Reduced motion preferences are automatically respected.

---

## 13. How to Configure Forms

Forms validate all fields client-side and explicitly notify users that no backend delivery is attached yet. Connect `abc-clinic/js/forms.js` (or `src/components/Forms.tsx`) to your chosen form processor or secure backend API before launch.

---

## 14. Deployment Preparation Notes

Before going live, replace all bracketed tokens, compress real images to WebP/JPEG, add verified Google Maps embed code in `pages/contact.html`, connect form delivery over HTTPS, and verify links across mobile (`375px`) and desktop (`1440px–1920px`) viewports.
