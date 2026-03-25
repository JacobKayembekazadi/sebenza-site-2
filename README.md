<div align="center">
  <h1>Sebenza System</h1>
  <p><strong>All-in-one AI-powered business management suite for service-based businesses</strong></p>
  <p>
    <a href="https://sebenzamvp-1.vercel.app">Live Demo</a> ·
    <a href="#features">Features</a> ·
    <a href="#tech-stack">Tech Stack</a> ·
    <a href="#architecture">Architecture</a>
  </p>

  <img src="https://img.shields.io/badge/Next.js-14-000?logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/Supabase-auth_%2B_db-3ECF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/TypeScript-typed-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Playwright-E2E_tested-45ba4b?logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/Vercel-deployed-000?logo=vercel&logoColor=white" alt="Vercel" />
</div>

---

## Overview

Sebenza System is a comprehensive business operations platform designed for service-based businesses across 21+ industries — from law firms to logistics to construction. It consolidates CRM, invoicing, project tracking, HR, inventory, and analytics into a single interface with role-based access control and real-time data sync.

Built with Next.js 14 and Supabase, the platform supports multi-language operations (English, French, Portuguese) and is fully responsive across devices. An integrated AI Business Assistant surfaces insights and recommendations directly from your operational data.

---

## Features

- 👥 **CRM** — Client management with interaction history, estimates, and invoice generation in one flow
- 📦 **Inventory & Stock** — Multi-warehouse tracking, stock transfers, and real-time level monitoring
- 🧾 **Invoicing & Finance** — Invoice generation, payment tracking, expense management, and financial reporting
- 📁 **Document Management** — Secure file upload and attachment to clients, projects, or transactions
- 📊 **Analytics Dashboard** — Visual dashboards with live KPIs, trend charts, and data-driven recommendations
- ✅ **Task & Project Management** — Task creation, deadlines, team collaboration, and progress tracking
- 👷 **HR & Payroll** — Employee records, attendance tracking, and automated payroll processing
- 🤖 **AI Business Assistant** — Context-aware assistant that interprets your business data and surfaces actions
- 🔐 **Authentication** — Supabase Auth with protected routes and role-based access control
- 🌍 **Multi-language** — English, French, and Portuguese support
- 📱 **Responsive** — Fully functional on mobile, tablet, and desktop
- 🧪 **E2E Tested** — Playwright test suite covering critical user flows

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth + Database | Supabase (Auth + Postgres) |
| State | React `useState` / `useEffect` |
| Testing | Playwright (E2E) |
| Deployment | Vercel |

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Supabase                             │
│  Auth (JWT sessions, protected routes)                  │
│  Postgres (clients, projects, invoices, HR, inventory)  │
└───────────────────────┬─────────────────────────────────┘
                        │ real-time subscriptions + REST
                        ▼
┌─────────────────────────────────────────────────────────┐
│               Next.js 14 App Router                     │
│  Server Components → data fetching at the edge          │
│  Client Components → interactive UI, auth state         │
│  Route handlers → API endpoints for mutations           │
└──────┬───────────┬──────────┬────────────┬──────────────┘
       │           │          │            │
       ▼           ▼          ▼            ▼
    Header/     Hero /    Features /   Auth Modal
    Nav         Landing   Pricing      (login/signup
    (theme,     (public)  (public)      Supabase)
    auth state)
                        │
                        ▼
              Business Dashboard
              (post-auth, protected)
              ┌────────┬────────┬────────┐
              │  CRM   │Invoice │Analytics│
              │ Clients│Tracker │Dashboard│
              └────────┴────────┴────────┘
                        │
                        ▼
              BusinessAssistant Component
              (AI layer over operational data)
```

**Auth flow:** Supabase Auth manages sessions via JWT. Hash-based navigation (`#login`, `#signup`) triggers the auth modal client-side. Post-auth, the dashboard loads user-scoped data from Postgres via Supabase's row-level security policies.

**Component model:** Public marketing pages (Hero, Features, Pricing, FAQ) are server-rendered for performance. Interactive modules (AuthModal, BusinessAssistant, IndustrySwitcher, IntegrationsModal) are client components. Theme state (light/dark) is managed at the root and applied via `data-theme` attributes and Tailwind's dark mode class strategy.

---

## Getting Started

```bash
# Clone and install
git clone https://github.com/jacobkayembe/sebenza-site-2.git
cd sebenza-site-2
npm install

# Configure environment
cp .env.example .env.local
# Add:
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Run dev server
npm run dev

# Run E2E tests
npx playwright test
```

---

## Project Structure

```
src/
├── App.tsx                  # Root component: theme, auth state, modal routing
├── types.ts                 # Shared TypeScript types (Theme, etc.)
├── constants.tsx            # Mock metrics, config constants
├── index.css                # Tailwind base + global styles
└── components/
    ├── Header.tsx           # Top nav with auth state and theme toggle
    ├── Hero.tsx             # Landing hero with CTAs
    ├── Features.tsx         # 12-feature grid
    ├── IndustrySwitcher.tsx # 21-industry selector
    ├── IntegrationHub.tsx   # Integration ecosystem display
    ├── Pricing.tsx          # Pricing tiers
    ├── FAQ.tsx              # Accordion FAQ
    ├── Footer.tsx           # Site footer
    ├── BusinessAssistant.tsx # AI assistant overlay
    ├── AuthModal.tsx        # Login / signup modal (Supabase)
    ├── IntegrationsModal.tsx # Integration detail modal
    └── Icons.tsx            # Icon component system
```
