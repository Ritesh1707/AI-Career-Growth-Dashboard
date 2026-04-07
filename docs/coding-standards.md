# Coding Standards

## Naming Conventions
- **Components:** `PascalCase` (e.g., `PrimaryButton.jsx`).
- **Hooks:** `camelCase` with `use` prefix (e.g., `useAuth.js`).
- **Utilities:** `camelCase` (e.g., `formatDate.js`).
- **Files/Folders:** `kebab-case` for folders (e.g., `user-profile/`), match filename to export name for components.

## Component Rules
- **One Component per File:** Unless it's a tiny, private sub-component.
- **Functional Components Only:** Use hooks, no class components.
- **Prop Destructuring:** Always destructure props in the function signature.
- **Explicit Exports:** Use `export default` for main components, and named exports for types/constants.

## React Best Practices
- **Fragment Usage:** Prefer `<>...</>` to `<div>` where a wrapper isn't needed for styling.
- **Key Prop:** Always use stable, unique IDs (not index) for list keys.
- **Performance:** Use `useMemo` and `useCallback` only when necessary (don't over-optimize).
- **Error Boundaries:** Wrap critical UI segments to prevent app-wide crashes.

## State Management
- **Keep it Local:** Only lift state when multiple features or pages need it.
- **Derive State:** Calculate derived values during render, don't store them in state (e.g., calculate `filteredList` from `list` and `query` state).

## CSS Standards
- Prefer **CSS Modules** or **Tailwind CSS** to avoid global namespace collisions.
- Use a design system approach (standardize colors, spacing, and font sizes in global variables/config).
