# Project Architecture

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** JavaScript (JSX) - *Potential migration to TypeScript planned*
- **Styling:** Vanilla CSS (Modular) / Tailwind CSS
- **State Management:** 
  - **Server State:** TanStack Query (React Query)
  - **Global Client State:** Redux Toolkit
  - **Local State:** React `useState` / `useReducer`
- **Testing:** Vitest + React Testing Library + MSW (Mock Service Worker)

## Enterprise Folder Structure (`/app/src`)
We follow a **Feature-Based (Modular) Architecture** to ensure scalability and maintainability.

- `api/`: Global API clients and interceptors.
- `components/`: Shared UI components (Atomic/Base level).
- `features/`: Domain-specific modules. Each feature contains its own components, hooks, api, and store.
  - *Rule: Features only expose their Public API via an `index.js`.*
- `hooks/`: Global reusable hooks.
- `pages/`: Route-level components.
- `store/`: Global client-side state.
- `utils/`: Pure helper functions.

## Module Boundaries
To prevent circular dependencies and "spaghetti code":
1. **Vertical Isolation:** Features should not import from the internal folders of other features. Use the feature's `index.js`.
2. **Horizontal Shared:** Features can import from global `/components`, `/hooks`, and `/utils`.
3. **Dependency Direction:** Pages import Features; Features import Components/Hooks.
