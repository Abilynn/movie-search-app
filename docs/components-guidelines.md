# Component Guidelines

This document defines the standards for creating and maintaining React components in the Movie Search project.

Following these guidelines helps keep the codebase consistent, readable, scalable, and easy to maintain.

---

# General Principles

Every component should strive to be:

- Small
- Reusable
- Easy to understand
- Focused on a single responsibility

If a component starts doing too many things, consider splitting it into smaller components.

---

# Folder Structure

```
src/
├── assets/
├── components/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

### Components

Reusable UI elements belong in:

```
src/components/
```

Examples:

```
Navbar.jsx
MovieCard.jsx
SearchBar.jsx
Button.jsx
Footer.jsx
```

### Pages

Route-level components belong in:

```
src/pages/
```

Examples:

```
Home.jsx
MovieDetails.jsx
Favorites.jsx
```

---

# Naming Conventions

## Components

Use **PascalCase**.

✅ Good

```
Navbar.jsx
MovieCard.jsx
SearchBar.jsx
```

❌ Avoid

```
navbar.jsx
moviecard.jsx
search_bar.jsx
```

---

## Variables

Use **camelCase**.

```js
movieList
searchQuery
selectedMovie
```

---

## Constants

Use descriptive names.

```js
IMAGE_BASE_URL
DEFAULT_POSTER
```

Avoid abbreviations unless they are widely understood.

---

# Component Structure

A typical component should follow this order:

```jsx
// Imports

// Component

// Helper functions (if needed)

// Return JSX

// Export
```

Example:

```jsx
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav>
      ...
    </nav>
  );
}

export default Navbar;
```

---

# Props

Use descriptive prop names.

✅ Good

```jsx
<MovieCard movie={movie} />
```

❌ Avoid

```jsx
<MovieCard data={movie} />
```

If a component accepts many unrelated props, consider whether it should be split into smaller components.

---

# State Management

Keep state as close as possible to where it is used.

Don't lift state unless another component needs access to it.

Prefer local component state before introducing global state.

---

# Styling

The project uses **Tailwind CSS**.

Guidelines:

- Prefer utility classes.
- Use semantic design tokens where available.
- Avoid inline styles.
- Avoid arbitrary values (`w-[437px]`) unless absolutely necessary.
- Keep class names organized and readable.

Example:

```jsx
className="flex items-center justify-between rounded-lg bg-surface px-4 py-2"
```

---

# Accessibility

Accessibility is a requirement, not an afterthought.

Use semantic HTML whenever possible.

Prefer:

```html
<nav>
<header>
<main>
<section>
<footer>
<button>
```

instead of generic `<div>` elements.

Always:

- Provide meaningful `alt` text for images.
- Use buttons for actions.
- Use links for navigation.
- Keep keyboard focus visible.
- Ensure sufficient color contrast.

---

# Responsive Design

Build mobile-first.

Start with the mobile layout, then add larger breakpoints.

Example:

```jsx
text-base md:text-lg lg:text-xl
```

Avoid designing only for desktop.

---

# Imports

Organize imports in this order:

1. React packages
2. Third-party libraries
3. Local components
4. Assets
5. Styles

Example:

```jsx
import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import logo from "../assets/logo.jpg";

import "./App.css";
```

---

# Comments

Write code that is self-explanatory.

Avoid comments that describe *what* the code does.

Bad:

```js
// Increment count
count++;
```

Better:

```js
// Prevent duplicate requests while data is loading.
```

Comment the **why**, not the **what**.

---

# File Size

As a general guideline:

- Components under ~150 lines are ideal.
- Around 200 lines is a good point to consider refactoring.
- Very large components should be broken into smaller pieces.

These are guidelines, not strict rules.

---

# Reusability

Before creating a new component, ask:

- Can this be reused elsewhere?
- Is it responsible for one thing?
- Would another developer immediately understand its purpose?

---

# Git Practices

Each feature should:

- Have its own GitHub Issue
- Be developed on its own feature branch
- Use Conventional Commits
- Be merged through a Pull Request

Example commit messages:

```
feat: add responsive navbar
fix: correct search input alignment
style: improve movie card spacing
refactor: extract MovieCard component
docs: update design system
```

---

# Philosophy

The goal of this project is not only to build a movie search application but also to practice writing production-quality frontend code.

Whenever making implementation decisions, prefer:

- Readability over cleverness
- Simplicity over unnecessary abstraction
- Consistency over personal preference
- Accessibility over visual shortcuts
- Maintainability over quick fixes