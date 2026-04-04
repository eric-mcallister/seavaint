# Seavaint Health — project notes

Vue 3 + Vite single-page app for the healthcare homepage. Styling uses Tailwind CSS v4 (`@tailwindcss/vite`) with custom theme colors in `src/assets/main.css`.
---

## Components (what each file does)

### Shell & routing

| File | Purpose |
|------|---------|
| `src/App.vue` | Root shell: renders only `<router-view />` so all pages flow through Vue Router. |
| `src/main.js` | App bootstrap: creates the Vue app, registers the router, imports global styles (`src/assets/main.css`). |
| `src/router/index.js` | Defines routes. Currently a single route: `/` → `HomeView`. |
| `src/views/HomeView.vue` | **Home page layout.** Stacks the fixed header, scrollable main (all section components in order), and footer. Uses a flex column with `min-h-screen` so the footer sits at the bottom on short viewports. |

### Layout (`src/components/layout/`)

| File | Purpose |
|------|---------|
| `AppHeader.vue` | **Top navigation:** brand wordmark, anchor links (Home, About, Services, team/FAQs, Contact), primary CTA “Book Appointment”. Fixed with glass-style background (`glass-nav` in CSS). |
| `AppFooter.vue` | **Site footer:** brand block, short tagline, Navigation and Legal link columns, social icon links, copyright. Section id `contact` for in-page `#contact` links. |

### Home sections (`src/components/home/`)

| File | Purpose |
|------|---------|
| `HeroSection.vue` | **Above-the-fold hero:** full-width background image, gradient overlay, eyebrow label, main headline (California virtual care), supporting paragraph, “Learn More” and “Our Services” actions. |
| `AboutSection.vue` | **About block** (`id="about"`): two-column layout with heading, two descriptive paragraphs, image grid, and stat cards (satisfaction %, wait time). |
| `ServicesSection.vue` | **Services** (`id="services"`): section heading, intro line, “View All Services” link, three service cards (data from `serviceCards` in the script: icons, titles, bullet lists). |
| `TeamSection.vue` | **Team** (`id="team"`): section heading, intro line, two team member cards (photo, name, role, bio). Portrait images use grayscale until card hover. |
| `CtaSection.vue` | **Call-to-action band:** dark rounded panel with headline, supporting copy, and “Contact Now” linking to `#contact`. |

### Styles

| File | Purpose |
|------|---------|
| `src/assets/main.css` | Tailwind import, `@theme` color and font tokens, shared utilities (`.glass-nav`, `.hero-gradient`, `.editorial-shadow`, Material Symbols base). |
| `index.html` | HTML shell, document title, Google Fonts (Manrope, Lato, Material Symbols), `<body>` default typography (see fonts below). |

---

## Typography — where each font is used

Fonts are loaded in `index.html`. In Tailwind we map them with **`font-manrope`** and **`font-lato`** (defined in `src/assets/main.css` `@theme`).

### Convention

| Font | Weight in design | Tailwind pattern | Role |
|------|------------------|------------------|------|
| **Manrope** | 500 | `font-manrope` + `font-medium` | Titles and header-style titles (headings, names, stat figures, column titles, active nav emphasis). |
| **Manrope** | 300 | `font-manrope` + `font-light` | Non-body-copy UI: navigation (except active Home), buttons, badges, labels, list items, roles, copyright line, etc. |
| **Lato** | 400 (normal) | `font-lato` + `font-normal` | Longer **descriptive** paragraphs and supporting sentences. |

**Global default:** `<body>` uses `font-manrope font-light` so anything without an explicit font inherits Manrope 300. Elements that should be Lato or Manrope 500 set classes explicitly.

**Material Symbols** (`material-symbols-outlined`) are icon glyphs, not text fonts; they appear in nav CTAs, hero, services, and footer.

---

### Manrope 500 (`font-manrope font-medium`)

- **AppHeader:** “SEAVAINT HEALTH” logo; active “Home” nav link.
- **HeroSection:** main `<h1>`.
- **AboutSection:** section `<h2>`; stat numbers (`98%`, `15m`) in `<h3>`.
- **ServicesSection:** section `<h2>`; each card title `<h3>`.
- **TeamSection:** section `<h2>`; each member name `<h3>`.
- **CtaSection:** panel `<h2>`.
- **AppFooter:** brand line “SEAVAINT HEALTH”; column headings “Navigation” and “Legal”.

### Manrope 300 (`font-manrope font-light`)

- **AppHeader:** About, Services, FAQs, Contact links; “Book Appointment” button.
- **HeroSection:** eyebrow “Virtual Healthcare Excellence”; primary and secondary buttons.
- **AboutSection:** labels under stats (“Patient Satisfaction Rate”, “Average Wait Time”).
- **ServicesSection:** “View All Services” link; bullet list rows under each service.
- **TeamSection:** uppercase role lines under each name.
- **CtaSection:** “Contact Now” button.
- **AppFooter:** footer nav and legal links; copyright line (short line, not long marketing copy).

### Lato (`font-lato` + `font-normal`)

- **HeroSection:** lead paragraph under the headline.
- **AboutSection:** both paragraphs in the left column.
- **ServicesSection:** intro sentence under the section title.
- **TeamSection:** section intro paragraph; each member bio paragraph.
- **CtaSection:** paragraph under the headline.
- **AppFooter:** tagline paragraph under the brand.

---

## Quick path reference

```
src/
  App.vue
  main.js
  assets/main.css
  router/index.js
  views/HomeView.vue
  components/
    layout/AppHeader.vue
    layout/AppFooter.vue
    home/HeroSection.vue
    home/AboutSection.vue
    home/ServicesSection.vue
    home/TeamSection.vue
    home/CtaSection.vue
```

---

*Last aligned with the component and class usage in the repo; update this file if you add pages or change typography.*
