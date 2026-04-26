---
version: alpha
name: Sebenza
description: Trust-grade business operating system. Deep navy authority with tech-forward gradient accents. Light by default, fluent dark mode.
colors:
  primary: "#1e3a5f"
  primary-hover: "#2e5a8f"
  accent: "#3b82f6"
  accent-light: "#60a5fa"
  text: "#0a0a0a"
  text-muted: "#6b7280"
  text-subtle: "#9ca3af"
  text-inverse: "#f5f5f5"
  background: "#ffffff"
  background-elevated: "#f9fafb"
  background-dark: "#0a0a0a"
  background-dark-elevated: "#1f2937"
  surface: "#ffffff"
  surface-dark: "#1f2937"
  border: "#e5e7eb"
  border-strong: "#d1d5db"
  border-dark: "#374151"
  border-dark-strong: "#4b5563"
  success: "#10b981"
  success-light: "#34d399"
  warning: "#f59e0b"
  danger: "#ef4444"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.08em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  3xl: 32px
  pill: 9999px
spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "{spacing.4}"
    typography: "{typography.body}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "{spacing.4}"
    typography: "{typography.body}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "{spacing.2}"
    typography: "{typography.body-sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.8}"
  card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.8}"
  card-glass:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.6}"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "{spacing.2}"
    typography: "{typography.label-caps}"
  badge-soft:
    backgroundColor: "{colors.background-elevated}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.2}"
    typography: "{typography.label-caps}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3}"
    typography: "{typography.body}"
  nav-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "{spacing.3}"
    typography: "{typography.body-sm}"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  link-muted:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
  divider-strong:
    backgroundColor: "{colors.border-strong}"
    height: "1px"
  divider-dark:
    backgroundColor: "{colors.border-dark}"
    height: "1px"
  alert-success:
    backgroundColor: "#ecfdf5"
    textColor: "#065f46"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"
    typography: "{typography.body-sm}"
  alert-warning:
    backgroundColor: "#fef3c7"
    textColor: "#92400e"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"
    typography: "{typography.body-sm}"
  alert-danger:
    backgroundColor: "#fee2e2"
    textColor: "#991b1b"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"
    typography: "{typography.body-sm}"
---

## Overview

Sebenza is a business operating system for service-based companies — law firms, construction, healthcare, retail, hospitality, consulting. The visual identity has to feel **trustworthy enough for accountants and lawyers** while being **modern enough for a 2026 SaaS product**. The answer: **deep navy authority + tech-forward gradient accents + airy whitespace**.

Think Linear's precision and Notion's calm, with the gravitas of a financial app. No frivolous color, no over-decorated illustration. Generous whitespace and confident typography do most of the work.

## Colors

The palette is a near-monochromatic neutral foundation with a single primary navy doing all the brand work, and a brighter blue used only in dark mode for the same brand presence on a black canvas.

- **Primary `#1e3a5f`** — Deep navy. The single load-bearing brand color in light mode. Used for primary CTAs, links, active states, focus rings, and the brand mark. Restrict to one or two appearances per viewport — its job is to draw the eye to the next action.
- **Primary Hover `#2e5a8f`** — Same navy lifted slightly toward azure. Used only for hover/active states on primary surfaces. Pairs with a subtle `translateY(-2px)` and a colored shadow `0 10px 30px rgba(30,58,95,0.30)` for tactile feedback.
- **Accent `#3b82f6`** — Tailwind blue-500. Replaces the primary in dark mode (navy disappears against `#0a0a0a`). Use it the same way: as the single brand color, not as a second color in light mode.
- **Accent Light `#60a5fa`** — Brighter cobalt. Reserved for muted dark-mode hover states and small interactive accents (like text-gradient endpoints).
- **Text `#0a0a0a` / `#f5f5f5`** — Near-black on white, off-white on near-black. Avoid pure `#000`/`#fff` — the warmer values reduce eye strain on long-form pages.
- **Text Muted `#6b7280`** — Captions, helper text, table secondary cells. Don't drop below this for body content (contrast falls below WCAG AA).
- **Borders** — `#e5e7eb` light, `#374151` dark. 1px is enough; 2px borders are reserved for input focus and `button-secondary`.

**Selection color** is `rgba(30, 58, 95, 0.2)` in light mode and `rgba(59, 130, 246, 0.4)` in dark mode — so highlighted text reads as part of the brand.

**Surface glass** — `rgba(255, 255, 255, 0.7)` + `backdrop-filter: blur(20px)` in light, `rgba(0, 0, 0, 0.7)` in dark. A signature of the marketing site. Use sparingly: secondary buttons over backgrounds with depth, and floating navigation bars only.

**WCAG note:** primary `#1e3a5f` on white = 11.5:1 contrast (AAA). Accent `#3b82f6` on `#0a0a0a` = 5.7:1 (AA Large, AA for buttons). Don't use accent on light backgrounds for body text.

## Typography

**Inter** for everything UI. **JetBrains Mono** for code, IDs, and metric tickers. Keep it boring — the brand is in the spacing and color, not in the typeface.

- **Display (4rem, 800)** — Hero only. One per page. Tight tracking (`-0.03em`) gives the editorial feel.
- **H1 (2.5rem, 700)** — Page titles. Tracking still negative.
- **H2 / H3 (1.875 / 1.5rem)** — Section headings. Tracking near-zero.
- **Body (1rem, 400, 1.6 line-height)** — The default. Line-height 1.6 is generous on purpose.
- **Body Small (0.875rem)** — Cards, table rows, dense data.
- **Caption / Label (0.75rem)** — Helper text. Label uses `letter-spacing: 0.08em` and uppercase for status badges and section eyebrows.
- **Mono (0.875rem)** — Reserve for invoice numbers, PO numbers, code, monetary tickers where alignment matters.

Avoid weight 100–300 (too thin in dark mode), and 900 (collapses on retina). Stay between 400 and 800.

## Layout

4-pixel base. Use multiples of 4 (`spacing.1`–`spacing.6`) for component-internal spacing. Use multiples of 16 (`spacing.4`, `8`, `16`, `24`) for component-external/layout spacing.

Sections breathe: vertical padding of `spacing.16` (64px) on mobile and `spacing.24` (96px) on desktop is the marketing-page baseline. Inside the app, drop to `spacing.6`–`spacing.8` between sections — the user is here to work, not admire.

Page widths: `max-w-7xl` (80rem / 1280px) for marketing pages with 16-24px horizontal gutters. Dashboard pages can stretch to fluid width with internal max-widths per panel.

## Elevation & Depth

Three tiers. Don't invent more.

- **Resting** — `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` for cards at rest. Almost imperceptible.
- **Hover / floating** — `0 10px 15px rgba(0,0,0,0.08)` for cards on hover, `0 20px 25px rgba(0,0,0,0.10)` for floating panels (dropdowns, popovers).
- **Brand glow** — `0 10px 30px rgba(30,58,95,0.30)` on primary buttons. The colored shadow is the signature — don't replace it with a neutral one. In dark mode, swap the rgba to the accent's RGB `(59, 130, 246, 0.30)`.

Cards lift on hover with `translateY(-8px)` over `500ms cubic-bezier(0.4, 0, 0.2, 1)`. Buttons lift `translateY(-2px)` over `300ms`. Don't lift more than 8px — anything bigger feels like a card is escaping.

**Motion timing tokens (prose):**
- `150ms` — Color and opacity changes (hover, focus).
- `300ms` — Transforms on interactive elements (button lift, scale).
- `500ms` — Card hover, modal entrance, page transition.
- `600ms` — Hero text/element entrance (slideInFromBottom, fadeIn).

Easing is `cubic-bezier(0.4, 0, 0.2, 1)` for entry and most interactions. Use `cubic-bezier(0.4, 0, 1, 1)` (ease-in) for exits. Respect `prefers-reduced-motion`: disable transforms, keep opacity changes only.

**Gradients (signature):**
- Primary: `linear-gradient(135deg, #1e3a5f 0%, #2e5a8f 100%)` — Heroes, marquee CTAs, brand bars. Sparingly.
- Text: `linear-gradient(135deg, #1e3a5f, #3b82f6)` — Reserved for hero display text only. Never on body copy.
- Hero orbs — Large blurred radial circles in the background using `bg-[#1e3a5f]/15 blur-[100px]` techniques. They give the marketing site its depth. In the app, use only on auth pages and empty states — not on data screens.

## Shapes

Two scales operate together:

- **Functional (sm/md/lg/xl)** — Form controls, dropdowns, small UI bits. Default `rounded.lg` (12px) for inputs, `rounded.md` (8px) for inline tags.
- **Surface (2xl/3xl)** — Cards and large surfaces. `rounded.2xl` (24px) for content cards, `rounded.3xl` (32px) for elevated marketing-style cards.
- **Pill (9999px)** — All primary CTAs are pills. Status badges are pills. The pill says "do this thing." Don't use it for non-interactive surfaces.

Never mix: a card with `rounded.2xl` should not contain a button with `rounded.md`. Use the pill button.

## Components

The component tokens above are the contract. New components must compose from existing tokens — no introducing a new color, radius, or shadow value mid-flight. If you genuinely need one, propose adding it to this DESIGN.md first.

The button hierarchy:

1. **`button-primary`** — One per viewport when possible. Pill, navy fill, white text, brand glow shadow `0 10px 30px rgba(30,58,95,0.30)`. The CTA. Hover lifts `-2px` and switches to `primary-hover`.
2. **`button-secondary`** — Pill, white surface, 2px navy border on hover. Glass background optional. The "see also."
3. **`button-ghost`** — Text-only, no fill. The "I noticed this but won't push you."

The card hierarchy:
1. **`card`** — Resting cards. `rounded.2xl`, `padding: spacing.8`, surface background, 1px border, resting shadow.
2. **`card-elevated`** — Marketing/empty-state cards. `rounded.3xl`, larger shadow, lifts on hover.
3. **`card-glass`** — Floating elements over busy backgrounds. Frosted glass with `backdrop-filter: blur(20px)`.

The badge has one form: pill, primary-tinted background (`rgba(30,58,95,0.10)`), primary text, uppercase label-caps typography, tracked `0.08em`.

**Dark mode strategy:** class-based — `<html class="dark">`. Toggle persists to localStorage. The dark variant is **not just inverted** — it's a separate aesthetic with its own primary color (`accent` `#3b82f6` replaces `primary` `#1e3a5f`). Glass surfaces flip from white-tint to black-tint. Test every screen in both modes before shipping. If a component looks wrong in dark, the fix is usually: swap surface to `surface-dark`, swap text to `text-inverse`, swap brand color from `primary` to `accent`.

**Focus styles:** `outline: 2px solid {colors.primary}; outline-offset: 2px` on `:focus-visible` for every interactive element. Don't remove them in custom components.

## Do's and Don'ts

**Do:**
- Use one primary CTA per viewport. The brand color is scarce on purpose.
- Lean on whitespace. Section padding is generous; embrace it.
- Test every screen in both light and dark mode before shipping.
- Use the colored brand-glow shadow on primary buttons. It's the signature.
- Reach for `rounded.pill` for any interactive call-to-action; reach for `rounded.2xl`/`3xl` for surfaces.
- Honor `prefers-reduced-motion`.

**Don't:**
- Stack two `button-primary`s side-by-side. The brand color stops working when it appears more than twice.
- Use the accent color (`#3b82f6`) on light backgrounds for body text — contrast fails.
- Mix radius scales within a single composition (a `rounded.2xl` card should not contain a `rounded.md` button — use `rounded.pill`).
- Introduce new colors, radii, or shadow values without adding them to this DESIGN.md first.
- Use weight 100–300 (too thin in dark) or 900 (breaks on retina). Stay 400–800.
- Lift cards more than 8px on hover. Lift buttons more than 2px. The motion is subtle.
- Replace the primary brand-glow shadow with a neutral shadow on CTAs — the colored shadow IS the brand.
- Apply hero blurred orbs on data screens. Reserve them for auth pages and empty states.
