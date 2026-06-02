# 🧑‍💻 Prince Ivan Kent Tiburcio --- Portfolio Website

### **A modern, fast, developer-focused portfolio built with Angular + Firebase Hosting**

This repository contains my personal developer portfolio showcasing my 7
years of full-stack experience, selected projects, work history, and
services.\
The goal is to present a clean and professional online presence that
highlights my technical strengths in **Angular, NodeJS, .NET Core,
Firebase, Ionic, and modern web technologies**.

------------------------------------------------------------------------

# 🚀 Features

-   ⚡ Built with **Angular 18+**
-   🎨 Clean, responsive UI (TailwindCSS optional)
-   📄 Pages:
    -   Home
    -   About Me
    -   Experience
    -   Projects
    -   Contact
-   🧩 Reusable components (project cards, experience cards, navbar,
    footer)
-   🔥 Firebase Hosting deployment
-   🚀 Optional: GitHub Pages deployment

------------------------------------------------------------------------

# 📁 Project Structure

    /src
     ├─ /app
     │   ├─ core/               # Services, interfaces, constants
     │   ├─ shared/             # Reusable minimal components
     │   ├─ components/         # UI components (navbar, footer, cards, hero)
     │   ├─ pages/
     │   │   ├─ home/
     │   │   ├─ about/
     │   │   ├─ experience/
     │   │   ├─ projects/
     │   │   └─ contact/
     │   ├─ app-routing.module.ts
     │   └─ app.component.ts
     ├─ assets/
     │   └─ images/
     └─ styles.scss

------------------------------------------------------------------------

# 🛠️ Tech Stack

  Layer                Technology
  -------------------- -----------------------------------------
  Frontend Framework   Angular 18+
  UI Styling           TailwindCSS (optional)
  Deployment           Firebase Hosting OR GitHub Pages
  Forms                Angular Forms / Reactive Forms
  Contact Form         EmailJS or Firebase Function (optional)
  Icons                Heroicons / FontAwesome

------------------------------------------------------------------------

# 📦 Installation & Development Guide

## 1️⃣ Clone the project

``` bash
git clone https://github.com/<your-username>/prince-portfolio.git
cd my-portfolio
```

## 2️⃣ Install dependencies

``` bash
npm install
```

## 3️⃣ Run the development server

``` bash
ng serve
```

------------------------------------------------------------------------

# 🎨 UI Setup (Optional: TailwindCSS)

``` bash
ng add @ngneat/tailwind
```

------------------------------------------------------------------------

# 🌐 Routing Setup

``` ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
```

------------------------------------------------------------------------

# 🧩 Reusable Components

    ng g c components/navbar
    ng g c components/footer
    ng g c components/project-card
    ng g c components/experience-card
    ng g c components/hero

------------------------------------------------------------------------

# 📝 Page Content Guide

## 🏠 Home Page

Hero intro, CTA buttons.

## 👤 About Page

Background, philosophy, tech stack.

## 💼 Experience Page

Role-based experience cards.

## 🧪 Projects Page

Showcase Pasta & Pastries, AXP systems, CMS apps, Disney contributions,
etc.

## 📬 Contact Page

Contact form + socials.

------------------------------------------------------------------------

# 🔥 Firebase Deployment

``` bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build --configuration production
firebase deploy
```

------------------------------------------------------------------------

# 🚀 GitHub Pages Deployment

``` bash
MSYS_NO_PATHCONV=1 npx ng build --configuration production --base-href=/my-portfolio/
npx angular-cli-ghpages --dir=dist/my-portfolio/browser --branch=gh-pages --message="fix base href"
```

------------------------------------------------------------------------

# 📌 Roadmap

Dark mode, blog, analytics, animations, filtering, Cloud Functions.

------------------------------------------------------------------------

# 📝 License

MIT License © 2025 Prince Ivan Kent Tiburcio
