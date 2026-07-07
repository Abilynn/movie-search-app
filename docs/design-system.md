# Movie Search App Design System

## Overview

This document defines the visual language for the Movie Search
application. All UI decisions should follow this guide to keep the
experience consistent.

------------------------------------------------------------------------

# Color Palette

  Role              Tailwind             Hex
  ----------------- -------------------- -----------
  App Background    `bg-slate-950`       `#020617`
  Surface / Cards   `bg-slate-900`       `#0f172a`
  Navbar            `bg-slate-900`       `#0f172a`
  Border            `border-slate-800`   `#1e293b`
  Primary Text      `text-slate-100`     `#f1f5f9`
  Secondary Text    `text-slate-400`     `#94a3b8`
  Primary Accent    `bg-sky-500`         `#0ea5e9`
  Accent Hover      `bg-sky-400`         `#38bdf8`
  Accent Focus     `bg-sky-600`         `#0284c7`
  Success           `emerald-500`        `#10b981`
  Warning           `amber-500`          `#f59e0b`
  Error             `red-500`            `#ef4444`

## Typography

-   App Logo: `text-xl font-bold`
-   Hero Heading: `text-4xl md:text-6xl font-bold`
-   Section Heading: `text-2xl font-semibold`
-   Card Title: `text-lg font-semibold`
-   Body: `text-base`
-   Caption: `text-sm text-slate-400`

## Buttons

### Primary

-   `bg-sky-500`
-   `hover:bg-sky-400`
-   `text-white`
-   `rounded-lg`
-   `transition-colors duration-200`

### Secondary

-   Transparent
-   `border border-slate-700`
-   `hover:bg-slate-800`

## Cards

-   `bg-slate-900`
-   `rounded-xl`
-   `overflow-hidden`
-   `shadow-lg`
-   `hover:scale-[1.02]`
-   `transition-all duration-200`

## Inputs

-   `bg-slate-900`
-   `border border-slate-700`
-   `rounded-lg`
-   `px-4 py-3`
-   `placeholder:text-slate-500`

## Focus States

-   `focus:outline-none`
-   `focus:ring-2`
-   `focus:ring-sky-500`
-   `focus:ring-offset-2`
-   `focus:ring-offset-slate-950`

## Spacing

-   Small: `p-4`
-   Medium: `p-6`
-   Large: `p-8`

Section spacing:

``` jsx
<section className="py-16">
```

## Border Radius

-   Buttons: `rounded-lg`
-   Inputs: `rounded-lg`
-   Cards: `rounded-xl`

## Motion

-   Default transition: `duration-200`
-   Use subtle hover animations only.

## Guiding Principles

1.  Let movie posters be the visual focus.
2.  Keep layouts clean and spacious.
3.  Prefer consistency over flashy effects.
4.  Build mobile-first.
5.  Accessibility is a feature, not an afterthought.
