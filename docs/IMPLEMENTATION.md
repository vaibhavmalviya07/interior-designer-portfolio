# Implementation Details

This document covers the technical implementation of the Interior Designer Portfolio.

## Pages

### Home Page (`src/app/page.jsx`)

The landing page includes:
- **Hero Section**: Full-width background with tagline and CTA buttons
- **Services Section**: Grid of 3 service cards (Residential, Commercial, Consultation)
- **Portfolio Preview**: Grid of 6 project cards with hover effects
- **CTA Section**: Call-to-action banner linking to contact page

### About Page (`src/app/about/page.jsx`)

- **Hero Section**: Page title with subtitle
- **Story Section**: Company background and philosophy
- **Team Section**: Grid of team member cards
- **Values Section**: Core company values display

### Contact Page (`src/app/contact/page.jsx`)

- **Hero Section**: Page title
- **Contact Form**: Name, email, phone, message fields
- **Contact Info**: Address, phone, email, business hours
- **Decorative Elements**: Gold accent borders

## Components

### Header (`src/components/Header.jsx`)

```jsx
// Features:
- Fixed position navigation
- Logo with company name
- Navigation links (Home, Portfolio, About, Contact)
- CTA button for consultation booking
- Responsive mobile menu (hamburger)
```

### Footer (`src/components/Footer.jsx`)

```jsx
// Features:
- 4-column grid layout
- Company info with social links
- Quick links navigation
- Services list
- Contact information
- Copyright notice
```

## Styling System

### Color Palette (CSS Variables)

```css
--color-primary: #1a1a2e      /* Deep navy */
--color-secondary: #16213e    /* Dark blue */
--color-accent: #c9a959       /* Gold accent */
--color-accent-light: #d4ba6a /* Light gold */
--color-text: #e8e8e8         /* Light gray text */
--color-text-muted: #a0a0a0   /* Muted text */
--color-background: #0f0f1a   /* Dark background */
--color-surface: #1a1a2e      /* Card surfaces */
--color-border: #2a2a4a       /* Borders */
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold, larger sizes with letter-spacing
- **Body**: Regular weight, comfortable line-height

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 768px | Single column layouts |
| Tablet | 768px - 1024px | 2-column grids |
| Desktop | > 1024px | Full layouts, 3-4 columns |

## Future Enhancements

- [ ] Add Portfolio page with project gallery
- [ ] Implement contact form submission
- [ ] Add image optimization with Next.js Image component
- [ ] Integrate CMS for content management
- [ ] Add animations with Framer Motion
- [ ] Implement dark/light theme toggle
