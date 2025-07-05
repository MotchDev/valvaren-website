# Components Directory

This directory contains all reusable components for the Valvaren website.

## Structure

```
components/
├── layout/     # Layout components (Header, Footer, Sidebar, etc.)
├── ui/         # Reusable UI components (Button, Input, Modal, etc.)
└── common/     # Other shared components (forms, cards, etc.)
```

## Best Practices

### 1. Layout Components (`layout/`)

- **Purpose**: Components that define the overall page structure
- **Examples**: Header, Footer, Sidebar, Navigation
- **Usage**: Imported in `app/layout.tsx` for global layout
- **Naming**: Use PascalCase (e.g., `Header.tsx`, `Footer.tsx`)

### 2. UI Components (`ui/`)

- **Purpose**: Reusable, atomic UI elements
- **Examples**: Button, Input, Modal, Card, Badge
- **Usage**: Imported in any page or component
- **Naming**: Use PascalCase (e.g., `Button.tsx`, `Input.tsx`)

### 3. Common Components (`common/`)

- **Purpose**: Complex components that combine multiple UI elements
- **Examples**: SearchBar, UserCard, ProductGrid
- **Usage**: Imported in specific pages or other components
- **Naming**: Use PascalCase (e.g., `SearchBar.tsx`, `UserCard.tsx`)

## Import Paths

Use absolute imports with the `@/` alias:

```tsx
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/common/SearchBar";
```

## Component Guidelines

1. **Export as default**: Each component should have a default export
2. **TypeScript**: Use TypeScript for all components
3. **Props interface**: Define props interface for each component
4. **Styling**: Use Tailwind CSS classes
5. **Accessibility**: Include proper ARIA attributes and semantic HTML
