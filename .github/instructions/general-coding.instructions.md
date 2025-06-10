---
applyTo: "**"
---
# Project general coding standards

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Error Handling
- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information



### 1. Website Sections (as per codebase)
- The following React components in `src/components/sections/` correspond to major website sections:
  - `HeroSection.tsx` (likely "Home" or landing/hero section)
  - `AboutSection.tsx` ("About" section)
  - `ProjectsSection.tsx` ("Projects" section)
  - `ContactSection.tsx` ("Contact" section)
  - `BlogSection.tsx` (not in the prompt, but present in codebase; could be an extra section)

- There is no explicit "Work Experience" or "Skills" section component, but these may be included within `AboutSection.tsx` or as part of the data files.

### 2. Data Files (content for sections)
- `src/data/about.ts` (about info, possibly including work experience, bio, contact)
- `src/data/contact.ts` (contact info)
- `src/data/hero.ts` (hero section content)
- `src/data/projects.ts` (project details)
- `src/data/skills.ts` (skills listing)
- `src/data/social.ts` (social links)
- `src/data/navigation.ts` (site navigation structure)
- `src/data/tech-tags.ts` (technology tags, likely for projects/skills)
- `src/data/friends.ts` (possibly for a "friends" or "network" section, not in prompt)

### 3. Layout and Navigation
- `src/components/layout/Navbar.tsx` (main navigation)
- `src/components/layout/SideNav.tsx` (side navigation, if used)
- `src/components/layout/Footer.tsx` (footer)

### 4. UI Components
- `src/components/ui/` contains reusable UI elements (buttons, cards, forms, popovers, etc.), supporting the sections and features described in the prompt.
- Notable for prompt features:
  - `form.tsx`, `textarea.tsx` (for contact form)
  - `toaster.tsx`, `toast.tsx` (for notifications)
  - `toggle.tsx`, `toggle-group.tsx` (for dark/light theme toggle)
  - `optimized-image.tsx` (for optimized images, e.g., hero/profile photo)
  - `badge.tsx`, `card.tsx`, `carousel.tsx`, etc. (for project/skills display)

### 5. Theming and Providers
- `src/providers/theme-provider.tsx` (theme support, e.g., dark/light mode)

### 6. Hooks and Utilities
- `src/hooks/use-toast.ts` (toast notifications)
- `src/lib/utils.ts`, `src/lib/analytics.ts` (utility functions, analytics)

### 7. Public Assets
- `public/` contains images for avatar, banner, projects, friends, icons, and logos, supporting the visual content of the site.

### 8. Configuration and Entry Points
- `index.html` (main HTML entry, includes meta tags for SEO, social, etc.)
- `package.json`, `tailwind.config.js`, `vite.config.ts` (project setup, styling, and build configuration)

### 9. Features Present in Codebase (matching prompt)
- **Responsive Design**: Tailwind CSS is present, supporting responsive layouts.
- **Dark/Light Theme Toggle**: Theme provider and toggle UI components exist.
- **Contact Form**: UI form components and contact section exist.
- **Downloadable Resume**: Not directly found, but could be implemented via a button in the hero/contact section.
- **SEO and Social Meta**: `index.html` contains meta tags for SEO and social profiles.
- **Project/Skills Display**: Data files and section components exist for projects and skills.
- **Optional Enhancements**: No explicit GitHub widget or live stats found, but the structure supports adding these.

### 10. Not Present or Unclear
- No explicit "Work Experience" section component (may be in `AboutSection.tsx` or data).
- No explicit "Coding Standards" section/component.
- No explicit "Downloadable Resume" file found in public assets.

---

