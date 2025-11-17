# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal developer portfolio website for Prince Ivan Kent Tiburcio, showcasing 7 years of full-stack experience. Built with Angular 19+ and designed for deployment to Firebase Hosting or GitHub Pages.

**Tech Stack:**
- **Framework:** Angular 19.2.0 (standalone components architecture)
- **Styling:** TailwindCSS 4.1.17 + SCSS
- **TypeScript:** 5.7.2 with strict mode enabled
- **Testing:** Karma + Jasmine

## Development Commands

### Running the Application
```bash
ng serve                     # Start dev server (http://localhost:4200)
ng serve --open             # Start dev server and open browser
```

### Building
```bash
ng build                                    # Production build (outputs to dist/my-portfolio)
ng build --configuration development        # Development build
ng build --watch --configuration development # Watch mode for development
```

### Testing
```bash
ng test                     # Run all tests with Karma
ng test --include='**/home.component.spec.ts'  # Run specific test file
```

## Architecture

### Standalone Components Pattern
This project uses Angular 19's standalone components architecture (no NgModules). All components are standalone and declare their own imports.

**Application Bootstrap:**
- Entry point: `src/main.ts` bootstraps `AppComponent`
- App configuration: `src/app/app.config.ts` provides router and zone change detection
- Routing: `src/app/app.routes.ts` defines all routes

### Directory Structure

```
src/app/
├── core/              # Services, interfaces, constants, guards (business logic)
├── shared/            # Reusable minimal components and utilities
├── components/        # Feature-specific UI components
│   ├── navbar/        # Navigation bar
│   ├── footer/        # Footer
│   ├── hero/          # Hero section
│   ├── project-card/  # Project display card
│   └── experience-card/ # Experience display card
├── pages/             # Route-level page components
│   ├── home/          # / (default route)
│   ├── about/         # /about
│   ├── experience/    # /experience
│   ├── projects/      # /projects
│   └── contact/       # /contact
├── app.routes.ts      # Route definitions
└── app.component.ts   # Root component (contains <router-outlet>)
```

### Routing Structure
All routes defined in `app.routes.ts`:
- `/` → HomeComponent
- `/about` → AboutComponent
- `/experience` → ExperienceComponent
- `/projects` → ProjectsComponent
- `/contact` → ContactComponent
- `**` (wildcard) → redirects to home

### Component Architecture
- **Pages:** Route-level components in `pages/` directory, responsible for page layout and orchestration
- **Components:** Reusable UI components in `components/` directory, used across multiple pages
- **Core:** Services and business logic in `core/` directory (when needed)
- **Shared:** Truly reusable utilities and minimal components in `shared/` directory

### Styling
- **Global styles:** `src/styles.scss` with TailwindCSS directives (`@tailwind base/components/utilities`)
- **Component styles:** SCSS files co-located with components (e.g., `home.component.scss`)
- **TailwindCSS config:** `tailwind.config.js` with content paths set to `./src/**/*.{html,ts}`

### TypeScript Configuration
- **Strict mode enabled:** All strict TypeScript flags are on
- **Target:** ES2022
- **Angular strict templates:** Enabled for type-checking in templates

## Component Generation

When generating new components, use Angular CLI:

```bash
# Page components
ng generate component pages/page-name

# Reusable components
ng generate component components/component-name

# Components in core or shared
ng generate component core/component-name
ng generate component shared/component-name
```

Components are automatically generated as standalone with SCSS styling (configured in `angular.json`).

## File Path Requirements

**IMPORTANT:** Due to a file modification bug in Claude Code, always use complete absolute Windows paths with drive letters and backslashes for ALL file operations:
- ✅ Correct: `F:\Dev\pasta-haus\my-portfolio\src\app\app.component.ts`
- ❌ Incorrect: `src/app/app.component.ts`

## Deployment

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build --configuration production
firebase deploy
```

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/my-portfolio/
```

## Budget Limits
Production build budgets (defined in `angular.json`):
- **Initial bundle:** 500kB warning, 1MB error
- **Component styles:** 4kB warning, 8kB error

Keep bundle sizes in check to meet these thresholds.
