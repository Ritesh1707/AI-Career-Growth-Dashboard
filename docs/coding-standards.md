# Coding Standards

## Core Principles

- Prefer clarity over cleverness.
- Prefer small focused components.
- Prefer readable naming.
- Prefer maintainable structure over short-term speed.
- Avoid premature abstraction.
- Keep code easy to explain in interviews.


## Naming

- Use clear, descriptive names.
- Components: PascalCase
- Hooks: camelCase and start with `use`
- Utilities: camelCase
- Constants: UPPER_SNAKE_CASE only when truly constant
- File names should be consistent with the project style

Examples:
- `CareerScoreCard.jsx`
- `useThemeMode.js`
- `formatProgress.js`


## Components

- One component should have one clear responsibility.
- If a component becomes too large, split by responsibility.
- Keep presentational concerns separated from business/data mapping logic where practical.
- Shared components should be generic.
- Feature-specific components should stay inside their feature folders.


## Props

- Keep props explicit.
- Avoid deeply nested props when a cleaner structure is possible.
- Pass only what is needed.
- Prefer simple prop interfaces.


## State

- Use local state first.
- Lift state only when multiple children need shared coordination.
- Avoid introducing global state too early.
- Derived UI values should be computed cleanly, not duplicated.


## Hooks

- Use custom hooks only when logic is reused or meaningfully isolated.
- Do not create hooks for trivial one-line logic.
- Hook names must clearly describe purpose.


## Styling

- Use Tailwind CSS consistently.
- Prefer reusable layout and spacing patterns.
- Keep utility class usage readable.
- Extract repeated UI patterns into components when repetition becomes real.
- Maintain strong visual consistency between landing and dashboard experiences.


## File Size and Complexity

- Prefer smaller files with focused responsibility.
- If a file becomes difficult to scan, split it.
- Avoid giant mixed-purpose files.


## Data and Mock Content

- Use realistic mock data.
- Keep data shape predictable.
- Do not hardcode large datasets directly inside JSX when avoidable.
- Keep mock content professional and product-like.


## Imports

- Keep imports organized.
- Remove unused imports.
- Group related imports cleanly.


## Comments

- Write comments only when they add real value.
- Do not comment obvious code.
- Use comments to explain intent, tradeoffs, or non-obvious decisions.


## Error and Empty States

- Build sensible empty states.
- Handle incomplete data gracefully.
- Avoid breaking UI because a field is missing in mock data.


## Review Standard

Before finalizing any step, review for:
- readability
- duplication
- naming clarity
- unnecessary complexity
- folder placement correctness
- future scalability