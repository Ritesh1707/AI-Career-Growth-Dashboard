# AI Career Growth Dashboard

An enterprise-grade, frontend-first web application designed to act as a "Personal Command Center" for career growth. This project serves as a showcase for scalable React architecture, premium SaaS-style UI/UX design, and disciplined engineering workflows.

Phase 1 focuses exclusively on the **frontend experience** using intelligent mock data, establishing a robust foundation for future API/backend integration.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Motion & Accessibility System](#motion--accessibility-system)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Documentation Index](#documentation-index)

---

## 🎯 Overview

The AI Career Growth Dashboard solves the problem of disconnected career tracking by providing a single, unified view of a professional's trajectory. 

It consists of two main experiences:
1. **Cinematic Landing Page:** A premium, motion-enhanced entry point that clearly communicates the product's value proposition (Predictive Next Actions, Skill-Gap Analysis, and Market Intelligence).
2. **Product Dashboard:** A highly modular, responsive SaaS shell housing 7 distinct career modules driven by "predictive" rather than "descriptive" data.

## ✨ Key Features

- **Predictive Overview:** A command center highlighting the user's Career Score, top priorities, and highest-leverage next actions.
- **Skill-Gap Visualizer:** Dynamic progress tracking comparing current skill levels against target role requirements.
- **Career Roadmap:** A chronological, interactive timeline translating long-term goals into executable milestones.
- **Market Intelligence (Jobs):** Data-driven job cards with "AI Rationale" tooltips explaining role alignment.
- **Certifications & Projects:** Dedicated tracking for formal credentials and portfolio work with simulated progress states.
- **Education Journey:** Chronological logging of formal and self-driven learning tracks.

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router v7
- **Styling:** Tailwind CSS + Vanilla CSS Custom Properties (`tokens.css`) for strict theme enforcement
- **Motion:** Framer Motion (Optimized via `LazyMotion` and `domAnimation` to reduce bundle size)
- **Linting:** ESLint

## 🏗 Architecture

The codebase strictly follows a **Feature-Driven Architecture**, prioritizing isolation, clear boundaries, and scalability.

```text
app/
├── src/
│   ├── app/            # App-level setup and top-level providers
│   ├── components/     # Shared, domain-agnostic UI primitives (Card, Badge, Button, EmptyState)
│   ├── features/       # Feature modules (dashboard, landing, skills, roadmap, etc.)
│   ├── hooks/          # Reusable custom hooks (e.g., useTheme, useAsyncResource)
│   ├── layouts/        # Structural shells (LandingLayout, DashboardLayout)
│   ├── pages/          # Route-level compositions mapping layouts to features
│   ├── services/       # Data layer (currently housing mock API simulations and latency wrappers)
│   ├── styles/         # Global styles and design tokens (tokens.css)
│   └── utils/          # Pure utility helpers (cn.js, motion.js)
```

### Architectural Decisions
- **Custom Primitives:** Standardized UI elements (`Button`, `Badge`, `Typography`, `LoadingState`, `EmptyState`) ensure visual consistency and WCAG compliance across the app.
- **Async Abstraction:** Data fetching is standardized via a shared `useAsyncResource` hook, elegantly handling race conditions, simulated latency, loading skeletons, and error boundaries without leaking implementation details into the UI components.
- **Mock-Data First:** All modules are powered by feature-local service files simulating network latency and returning data in standard API contract shapes (`{ data, meta }`), allowing for seamless swapping to real REST/GraphQL APIs in Phase 2.

## 🌊 Motion & Accessibility System

The application features a bespoke, project-wide motion system defined in `app/src/utils/motion.js`.

- **Snappy & Subdued:** Transitions prioritize speed (150ms-300ms) and hardware-accelerated properties (`opacity`, `transform`) over theatrical, blocking animations.
- **Reusable Variants:** Centralized exports (`fadeTransition`, `slideUp`, `scaleUp`) ensure consistent physical behavior across route transitions, sidebar interactions, and module staggers.
- **Accessible by Default:** The motion system dynamically reads the user's OS-level `prefers-reduced-motion` settings. If enabled, spatial animations (slides, scales) gracefully degrade to instant or pure-opacity crossfades.

## 📊 Project Status

**Phase 1 (Frontend MVP) is substantially complete.**
- [x] Vite + React application scaffolded.
- [x] Design System and light/dark theme tokens finalized.
- [x] Responsive Dashboard Shell (mobile sidebar, routing) implemented.
- [x] All 7 Core Modules integrated with asynchronous mock data hooks.
- [x] Shared `EmptyState` and `LoadingState` primitives applied universally.
- [x] Cinematic Landing Page with animated product preview completed.
- [x] Project-wide Framer Motion system integrated.

**Next Steps (Future Phases):**
- Real backend API integration (Node.js/Express or Python/FastAPI).
- User authentication and persistent sessions.
- Integration with LLMs for real-time predictive career insights.

## 🚀 Getting Started

### Prerequisites
- Node.js **18+** (Node 20 LTS recommended)
- npm

### Installation
```bash
cd app
npm install
```

### Development Server
```bash
cd app
npm run dev
```
Open `http://localhost:5173` to view the application.

### Production Build
```bash
cd app
npm run build
npm run preview
```

## 📚 Documentation Index

This repository is intentionally documentation-heavy to simulate enterprise-grade engineering communication.

- **[Product Requirements Document (PRD)](docs/prd.md)**: Core features, user personas, and acceptance criteria.
- **[Architecture](docs/architecture.md)**: Detailed breakdown of folder structures and technical decisions.
- **[Coding Standards](docs/coding-standards.md)**: Rules for components, styling, and state management.
- **[Progress Log](docs/progress-log.md)**: Detailed historical ledger of all development milestones.
- **[Handoff Notes](docs/handoff.md)**: Current branch state and immediate next steps for continuous development.
- **[AGENTS.md](AGENTS.md)**: Project constraints and working agreements for AI-assisted development.

---
*Designed and built as a demonstration of premium frontend engineering practices.*
