# Asiri.D Portfolio – React + TypeScript + Vite

A modern, responsive portfolio site for Asiri Dhananjaya, Full Stack Developer & AI Specialist. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first, adaptive layouts using Tailwind CSS.
- **Dark/Light Theme Toggle**: User-selectable theme with smooth transitions.
- **Sectioned Layout**: Includes Hero, About, Projects, and Contact sections.
- **Project & Skills Showcase**: Dynamic display of projects, skills, and tech tags.
- **Contact Section**: Collaboration opportunities and digital presence cards.
- **SEO & Social Meta**: Optimized for search engines and social sharing.
- **Google Analytics**: Integrated with GA4 for traffic and event tracking.
- **Performance Insights**: Vercel Speed Insights for real-user monitoring.
- **Reusable UI Components**: Cards, buttons, badges, popovers, and more.
- **Optimized Images**: Custom image component for performance.
- **Toast Notifications**: Custom hook and UI for user feedback.
- **Easy Theming**: Theme provider for consistent dark/light mode.
- **Extensible**: Add blog, resume, or more sections as needed.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Project Structure

- `src/components/sections/` – Main website sections (Hero, About, Projects, Contact)
- `src/components/layout/` – Navbar, Footer, and layout components
- `src/components/ui/` – Reusable UI elements (buttons, cards, popovers, etc.)
- `src/data/` – Content and configuration for sections (projects, skills, about, contact, navigation)
- `src/providers/` – Theme provider for dark/light mode
- `src/hooks/` – Custom hooks (e.g., toast notifications)
- `src/lib/` – Utilities and analytics integration
- `public/` – Static assets (images, icons, logos)
- `index.html` – Main HTML entry with SEO and social meta tags

## ESLint & Code Quality

- Uses [typescript-eslint](https://typescript-eslint.io/) and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- Example config for type-aware linting:
  ```js
  export default tseslint.config({
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })
  ```
- See [`eslint.config.js`](eslint.config.js) for full configuration.

## Theming

- Theme toggling is handled via `src/providers/theme-provider.tsx`
- Colors and radii are defined in `src/index.css` and extended in `tailwind.config.js`

## Analytics

- Google Analytics 4 via `react-ga4`
- Vercel Speed Insights for performance monitoring

## SEO & Social

- Rich meta tags in `index.html` for Open Graph, Twitter, and structured data
- Social profile links and icons included

## License

MIT License – see [`LICENSE.md`](LICENSE.md) for details.

---

**Author:** Asiri Dhananjaya  
[Portfolio](https://asirid.com/) | [GitHub](https://github.com/black-randy)
