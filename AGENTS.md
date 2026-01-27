---
alwaysApply: true
---
<velosaguenay-guidelines>
=== foundation rules ===

# VeloSaguenay Development Guidelines

These guidelines are specifically curated for the VeloSaguenay application. Follow these guidelines closely to ensure consistency and quality.

## Foundational Context
This application is a Vue 3 + TypeScript static website and its main packages & versions are below. You are an expert with them all. Ensure you abide by these specific packages & versions.

- vue (VUE) - v3.5.13
- vue-router (VUE_ROUTER) - v4.5.0
- typescript (TYPESCRIPT) - v4.5.5
- vite (VITE) - v2.9.18
- bootstrap (BOOTSTRAP) - v5.3.3
- @vitejs/plugin-vue (VITE_PLUGIN_VUE) - v2.3.4
- vue-tsc (VUE_TSC) - v0.31.4
- eslint (ESLINT) - v8.57.1
- prettier (PRETTIER) - v2.8.8

## Conventions
- You must follow all existing code conventions used in this application. When creating or editing a file, check sibling files for the correct structure, approach, naming.
- Use descriptive names for variables and methods. For example, `isActiveRoute`, not `active()`.
- Check for existing components to reuse before writing a new one.

## Application Structure & Architecture
- Stick to existing directory structure - don't create new base folders without approval.
- Do not change the application's dependencies without approval.
- Components live in `src/components/`
- Views/Pages live in `src/views/`
- Router configuration is in `src/router/`
- Static assets go in `public/`

## Frontend Bundling
- If the user doesn't see a frontend change reflected in the UI, it could mean they need to run `npm run build` or `npm run dev`. Ask them.
- The build output goes to `dist/` directory.

## Replies
- Be concise in your explanations - focus on what's important rather than explaining obvious details.

## Documentation Files
- You must only create documentation files if explicitly requested by the user.
- All documentation files MUST be placed in the `docs/` directory.
- Never create documentation files at the project root.
- The `docs/` directory contains guides, tutorials, and technical documentation.
- Keep documentation organized by topic (e.g., `docs/FACEBOOK_SHARING_GUIDE.md`, `docs/OG_IMAGE_GUIDE.md`).


=== vue rules ===

## Vue 3

- Always use Vue 3 Composition API with `<script setup>` syntax.
- Use TypeScript for all Vue components.
- Follow the Single File Component (SFC) structure: `<template>`, `<script setup lang="ts">`, `<style scoped>`.

### Component Structure
<code-snippet name="Vue 3 Component Example" lang="vue">
<template>
  <div class="component-name">
    <!-- Template content -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Component logic
const count = ref(0)
const doubleCount = computed(() => count.value * 2)
</script>

<style scoped>
/* Component styles */
</style>
</code-snippet>

### Composition API
- Use `ref()` for reactive primitive values
- Use `reactive()` for reactive objects
- Use `computed()` for derived state
- Use `watch()` or `watchEffect()` for side effects
- Always use `<script setup>` for cleaner, more concise code

### Props and Emits
- Define props with TypeScript interfaces
- Use `defineProps<PropsInterface>()` for type-safe props
- Use `defineEmits<EmitsInterface>()` for type-safe events

<code-snippet name="Props and Emits Example" lang="typescript">
interface Props {
  title: string
  count?: number
}

interface Emits {
  (e: 'update', value: number): void
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</code-snippet>


=== typescript rules ===

## TypeScript

- Always use explicit type annotations for function parameters and return types.
- Prefer interfaces over type aliases for object shapes.
- Use `type` for unions, intersections, and utility types.
- Avoid using `any` - use `unknown` if the type is truly unknown.

### Type Declarations
<code-snippet name="TypeScript Function Example" lang="typescript">
function calculateTotal(items: CartItem[], tax: number): number {
  return items.reduce((sum, item) => sum + item.price, 0) * (1 + tax)
}
</code-snippet>

### Interfaces
- Use PascalCase for interface names
- Prefer interface extension over intersection types when possible

<code-snippet name="Interface Example" lang="typescript">
interface BaseItem {
  id: string
  name: string
}

interface Product extends BaseItem {
  price: number
  category: string
}
</code-snippet>


=== vue-router rules ===

## Vue Router

- Define routes in `src/router/index.ts`
- Use lazy loading for route components: `component: () => import('@/views/ViewName.vue')`
- Use named routes and the `router.push({ name: 'routeName' })` pattern
- Prefer `<router-link>` over manual navigation when possible

<code-snippet name="Router Link Example" lang="vue">
<router-link :to="{ name: 'home' }" class="nav-link">
  Home
</router-link>
</code-snippet>


=== bootstrap rules ===

## Bootstrap 5

- Use Bootstrap 5 utility classes for styling
- Follow Bootstrap's responsive design patterns
- Use Bootstrap components (buttons, cards, modals, etc.) consistently
- Leverage Bootstrap's grid system for layouts

### Spacing
- Use Bootstrap spacing utilities: `m-*`, `p-*`, `mt-*`, `mb-*`, etc.
- Use `gap-*` utilities for flex and grid layouts

<code-snippet name="Bootstrap Grid Example" lang="html">
<div class="container">
  <div class="row g-4">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
</code-snippet>

### Components
- Use Bootstrap's built-in components before creating custom ones
- Follow Bootstrap's naming conventions for classes
- Use Bootstrap's color system: `primary`, `secondary`, `success`, `danger`, etc.


=== code quality rules ===

## Code Quality Enforcement

After making any code changes, you MUST run the following quality checks in order and fix any issues:

### 1. Type Checking

```bash
npm run typecheck
```

**Important**:
- Fix all TypeScript errors before proceeding
- Ensure all components have proper type definitions

### 2. Linting and Formatting

```bash
npm run lint
```

**Important**:
- This will automatically fix most formatting and linting issues
- Review and fix any remaining errors manually

### 3. Build Verification

```bash
npm run build
```

**Important**:
- Ensure the build completes successfully
- Check for any warnings or errors during the build process

### 4. Quality Check Workflow

When you make code changes:

1. **Make your edits**
2. **Run type checking** (`npm run typecheck`)
3. **Run linting** (`npm run lint`)
4. **Build the project** (`npm run build`)
5. **Test in browser** if needed (`npm run dev`)

**Never skip these steps** - they ensure code quality and prevent issues in production.


=== deployment rules ===

## GitHub Pages Deployment

- This site is deployed to GitHub Pages
- The build output in `dist/` is what gets deployed
- Ensure `public/_redirects` is properly configured for SPA routing
- After building, the `dist/` folder should contain all necessary assets
- Test the production build locally with `npm run preview` before deploying


=== general best practices ===

## Best Practices

- Keep components small and focused on a single responsibility
- Extract reusable logic into composables (in `src/composables/` if created)
- Use semantic HTML elements
- Ensure accessibility (ARIA labels, keyboard navigation, etc.)
- Optimize images and assets before adding them to `public/`
- Write meaningful commit messages
- Test responsive design on multiple screen sizes

</velosaguenay-guidelines>

