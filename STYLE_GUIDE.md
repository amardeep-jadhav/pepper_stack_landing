# 📐 PAPPERSTACK — Style Design Documentation

> **Version:** 1.0  
> **Last Updated:** 2026-02-20  
> **Project:** PapperStack SAAS Landing Page  
> **Stack:** HTML5 · CSS3 · Vanilla JavaScript  
> **Font CDN:** Google Fonts  

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Component Reference](#5-component-reference)
6. [Animation & Motion](#6-animation--motion)
7. [Responsive Breakpoints](#7-responsive-breakpoints)
8. [File Structure](#8-file-structure)
9. [Design Principles](#9-design-principles)
10. [Improvement Recommendations](#10-improvement-recommendations)

---

## 1. Brand Identity

### Logo

| Property        | Value                                           |
| --------------- | ----------------------------------------------- |
| **Logo Mark**   | 3-layered stacked paper sheets (isometric view) |
| **Logo Colors** | Off-white top layer `#F5F2ED`, warm beige lower layers `#F0D9A8`, dark charcoal strokes `#3A3A3A` |
| **Logo File**   | `paperstacklogo.png` (1024 × 1024 px, ~121 KB)  |
| **Logo Size**   | Desktop: `88 × 88 px` · Mobile: `50 × 50 px`   |

### Wordmark

| Property           | Value              |
| ------------------ | ------------------ |
| **Text**           | `PAPPERSTACK`      |
| **Font Family**    | Inter, sans-serif  |
| **Font Weight**    | 700 (Bold)         |
| **Font Size**      | Desktop: `22px` · Mobile: `18px` |
| **Color**          | `#000000`          |
| **Letter Spacing** | `-0.5px`           |

### Brand Voice & Tone

- **Positioning:** Enterprise SaaS for pharmacies — modern, clean, authoritative
- **Messaging Pattern:** Problem → Clarity → Control (CHAOS → CLARITY → CONTROL)
- **Copy Style:** Bold headings, punchy subheads, concise body text
- **Tone:** Confident, direct, slightly provocative ("Legacy software was built in 1995")

---

## 2. Color System

### 2.1 Primary Palette

| Swatch | Name            | Hex       | Usage                                             |
| ------ | --------------- | --------- | ------------------------------------------------- |
| ⬜      | **Warm Linen**  | `#E5E3DF` | Page background, Navbar background                |
| ⬛      | **Jet Black**   | `#000000` | CTA buttons, Hero text, Dark section background   |
| ⬜      | **White**       | `#FFFFFF` | Nav pill background, CTA button text              |
| 🔲      | **Near Black**  | `#1A1A1A` | Nav link text, Subtitle body text                 |
| ⬛      | **Charcoal**    | `#222222` | CTA button hover state                            |

### 2.2 Secondary / Neutral Palette

| Swatch | Name               | Hex       | Usage                              |
| ------ | ------------------ | --------- | ---------------------------------- |
| 🔳      | **Light Gray**     | `#F0F0F0` | Nav link hover background          |
| ⬜      | **Muted Silver**   | `#A0A0A0` | Grid paragraph text (dark section) |

### 2.3 Shadow & Transparency Tokens

| Token               | Value                      | Usage              |
| -------------------- | -------------------------- | ------------------ |
| **Nav Pill Shadow**  | `0 1px 3px rgba(0,0,0,0.04)` | Subtle nav elevation |

### Color Philosophy

> The palette is intentionally **restrained and monochromatic** — warm neutrals for the light section, pure black/white for high-contrast dark sections. This creates a **premium, editorial** feel without any bright accent colors. The warm `#E5E3DF` background avoids the clinical coldness of pure white, adding sophistication.

---

## 3. Typography

### 3.1 Font Stack

```css
font-family: "Inter", sans-serif;
```

- **Source:** [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- **Variable Font:** Yes (`opsz 14–32`, `wght 100–900`)
- **Preconnect:** `fonts.googleapis.com` + `fonts.gstatic.com`

### 3.2 Type Scale

| Element             | Size                             | Weight  | Line Height | Letter Spacing | Text Transform |
| ------------------- | -------------------------------- | ------- | ----------- | -------------- | -------------- |
| **Hero Heading**    | `clamp(4rem, 7vw, 7rem)` ≈ 64–112px | 900     | `1.1`       | `-0.05em`      | `uppercase`    |
| **Grid Heading**    | `3.5rem` = 56px                  | 900     | `1.0`       | `-1px`         | —              |
| **Statement H2**    | `clamp(3rem, 5.5vw, 5.5rem)` ≈ 48–88px | 900 Italic | `0.95`  | `-0.04em`      | `uppercase`    |
| **Statement Body**  | `1.3rem` = 20.8px                | 700     | `1.45`      | `-0.01em`      | —              |
| **Logo Text**       | `22px`                           | 700     | —           | `-0.5px`       | —              |
| **Nav Links**       | `14px`                           | 500     | —           | —              | —              |
| **CTA Button**      | `14px`                           | 600     | —           | —              | —              |
| **Hero Subtitle**   | `17px`                           | 400     | `1.65`      | `-0.01em`      | —              |
| **Grid Body Text**  | `1.1rem` = 17.6px                | 400     | `1.6`       | —              | —              |
| **Statement Sub**   | `0.95rem` = 15.2px               | 400     | —           | `0`            | —              |

### 3.3 Typography Patterns

- **Negative letter-spacing** is used aggressively on large headings (`-0.04em` to `-0.05em`) for a **tight, editorial** look
- **Word spacing** on hero heading is slightly widened (`0.18em`) for readability at massive sizes
- **`clamp()` is used** for fluid responsive typography on the hero and statement headings
- **All headings are uppercase** for maximum impact

---

## 4. Spacing & Layout

### 4.1 Base Grid

| Token               | Value        | Notes                             |
| -------------------- | ------------ | --------------------------------- |
| **Base Font Size**   | `16px`       | `html { font-size: 16px }`        |
| **Max Content Width**| `1440px`     | Hero section content container     |
| **Grid Max Width**   | `1400px`     | Value prop grid + Statement section |

### 4.2 Navbar Spacing

| Property       | Desktop     | Tablet (≤1200) | Mobile (≤600) |
| -------------- | ----------- | -------------- | ------------- |
| **Padding**    | `18px 48px` | `16px 32px`    | `14px 20px`   |
| **Height**     | `80px`      | `80px`         | `auto`        |
| **Position**   | `fixed`     | `fixed`        | `fixed`       |
| **Z-Index**    | `100`       | `100`          | `100`         |

### 4.3 Hero Section Spacing

| Property              | Value            |
| --------------------- | ---------------- |
| **Min Height**        | `100vh` (desktop), `auto` (mobile) |
| **Padding Top**       | `80px` (accounts for fixed navbar) |
| **Left Padding**      | `56px` → `32px` → `24px` (responsive) |
| **Hero Left Width**   | `58%` (flex-basis)                    |
| **Hero Right Width**  | `42%` (flex-grow)                     |
| **Subtitle Max Width**| `420px`                                |
| **Heading Top Margin**| `35px`                                 |
| **Subtitle Top Margin**| `48px`                                |

### 4.4 Value Prop Section Spacing

| Property         | Desktop          | Tablet (≤992)    | Mobile (≤600)    |
| ---------------- | ---------------- | ---------------- | ---------------- |
| **Padding**      | `6rem 5%`        | `4rem 5%`        | `2.5rem 5%`      |
| **Grid Gap**     | `4rem`           | `2.5rem`         | `2rem`           |
| **Border Radius**| `100px` (top)    | `50px`           | `28px`           |

### 4.5 Statement Section Spacing

| Property                    | Value           |
| --------------------------- | --------------- |
| **Padding**                 | `6rem 5% 4rem`  |
| **Texts Container Margin**  | `100px` top     |
| **Content Main Left Pad**   | `3.5rem` (desktop), `1.5rem` (tablet), `1rem` (mobile) |
| **Statement H2 Width**      | `75%` → `90%` → `100%` (responsive) |
| **Body Text Width**         | `65%` → `80%` → `100%` (responsive) |

---

## 5. Component Reference

### 5.1 Navbar

```
┌──────────────────────────────────────────────────────────────┐
│  [🟧 Logo] PAPPERSTACK    ┌──────────────────────────┐  [Schedule a Demo] │
│                            │ Platform │ Solutions │...│                    │
│                            └──────────────────────────┘                    │
└──────────────────────────────────────────────────────────────┘
```

| Sub-component     | Styles                                                                     |
| ----------------- | -------------------------------------------------------------------------- |
| **Container**     | Fixed top, `flex`, `space-between`, bg `#E5E3DF`, z-index `100`            |
| **Logo Group**    | `flex`, `align-items: center`, `gap: 5px`                                  |
| **Nav Pill**      | `bg: #FFF`, `border-radius: 50px`, `padding: 12px 8px`, subtle box-shadow |
| **Nav Link**      | `padding: 6px 18px`, `border-radius: 30px`, hover → bg `#F0F0F0`          |
| **CTA Button**    | `bg: #000`, `color: #FFF`, `border-radius: 50px`, `padding: 14px 28px`    |

**Behavior:**
- Nav links are hidden at `≤ 992px` (hamburger menu not yet implemented)
- Navbar sticks to top on all viewports

---

### 5.2 Hero Section

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  SAAS FOR EASY...        ┌───────────────────────┐     │
│  BUSINESS EZY            │                       │     │
│  APPLICATIONS            │      🎬 VIDEO         │────►│ bleeds off right edge
│                          │                       │     │
│  Subtitle text           └───────────────────────┘     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

| Sub-component     | Key Styles                                                          |
| ----------------- | ------------------------------------------------------------------- |
| **Container**     | `min-height: 100vh`, `flex`, `align-items: center`                  |
| **Left Column**   | `flex: 0 0 58%`, `z-index: 2`, `padding-top: 40px`                 |
| **Right Column**  | `flex: 1 1 42%`, `min-height: 80vh`, `overflow: visible`           |
| **Video**         | **Absolute positioned**, bleeds off-screen: `right: -15vw`, `width: 65vw`, `top: -24%` |

**Key Design Decision:** The video intentionally overflows the right edge of the viewport, creating a **cinematic, layered depth** effect. The left text sits above the video via `z-index: 2`.

---

### 5.3 Text Reveal Animation Wrapper

```html
<span class="overflow-hidden">
  <span class="line-text">TEXT LINE HERE</span>
</span>
```

| Class              | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| `.overflow-hidden`  | `display: block`, `overflow: hidden` — clips the child     |
| `.line-text`        | Initial state: `translateY(115%) translateX(-30px)`, `opacity: 0` |
| `.line-text.revealed` | Animates to `translateY(0) translateX(0)`, `opacity: 1`  |
| `.overflow-hidden.sub` | Reduced `padding-bottom: 3px` for subtitle lines        |

---

### 5.4 Value Proposition Grid

```
┌─────────────────────────────────────────────────────────────┐
│  ╭──────────────╮  ╭──────────────╮  ╭──────────────╮       │
│  │  CHAOS.      │  │  CLARITY.    │  │  CONTROL.    │       │
│  │  body text…  │  │  body text…  │  │  body text…  │       │
│  ╰──────────────╯  ╰──────────────╯  ╰──────────────╯       │
│                                                             │
│  Rounded-top black section with scale-in animation          │
└─────────────────────────────────────────────────────────────┘
```

| Property                 | Value                                              |
| ------------------------ | -------------------------------------------------- |
| **Background**           | `#000000`                                          |
| **Text Color**           | Headings: `#FFFFFF`, Body: `#A0A0A0`               |
| **Grid**                 | `grid-template-columns: repeat(3, 1fr)`, gap `4rem`|
| **Border Radius**        | `100px 100px 0 0` (rounded top, flat bottom)       |
| **Initial Scale**        | `0.92` → animates to `1.0` on scroll               |
| **Heading Size**         | `3.5rem`, weight `900`                             |
| **Body Max Width**       | `90%` (prevents overly wide paragraphs)            |

---

### 5.5 Statement Section

Nested inside `.value-prop-section` (same black background).

| Sub-component       | Styles                                                          |
| -------------------- | --------------------------------------------------------------- |
| **Main H2**         | `75%` width, weight `900`, italic, uppercase, tight leading `0.95` |
| **Sub Label**       | `0.95rem`, weight `400`, white — acts as section label          |
| **Body Copy**       | `1.3rem`, weight `700`, `65%` width, left-padded for indentation |

**Design Pattern:** The indented `.content-main` uses `padding-left: 3.5rem` to create a visual **blockquote/indent** effect without using actual `<blockquote>` elements.

---

## 6. Animation & Motion

### 6.1 Text Reveal (CSS + JS)

| Property        | Value                                            |
| --------------- | ------------------------------------------------ |
| **Type**        | Slide-up + fade-in from bottom-left              |
| **Initial**     | `translateY(115%) translateX(-30px)`, `opacity: 0`|
| **Final**       | `translateY(0) translateX(0)`, `opacity: 1`       |
| **Duration**    | Transform: `0.9s`, Opacity: `0.6s`               |
| **Easing**      | `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo) |
| **Stagger**     | `200ms` initial delay + `130ms` per line          |
| **Trigger**     | On `DOMContentLoaded` (immediate, not scroll-based)|

### 6.2 Section Scale-In (JS scroll-driven)

| Property        | Value                                            |
| --------------- | ------------------------------------------------ |
| **Type**        | Scale animation on scroll                        |
| **Initial**     | `scale(0.92)`                                    |
| **Final**       | `scale(1.0)`                                     |
| **Progress**    | `(windowHeight - rect.top) / (windowHeight × 0.5)` clamped to `[0, 1]` |
| **Easing**      | CSS fallback: `cubic-bezier(0.22, 1, 0.36, 1)`  |
| **Listener**    | `scroll` event with `{ passive: true }`          |

### 6.3 Video Entrance (JS)

| Property        | Value                                            |
| --------------- | ------------------------------------------------ |
| **Type**        | Fade-in + slide-up + subtle scale                |
| **Initial**     | `opacity: 0`, `translateY(30px) scale(0.96)`     |
| **Final**       | `opacity: 1`, `translateY(0) scale(1)`           |
| **Duration**    | `1s`                                             |
| **Easing**      | `ease`                                           |
| **Delay**       | `450ms` after DOMContentLoaded                   |

### 6.4 Hover Transitions (CSS)

| Element          | Transition                          |
| ---------------- | ----------------------------------- |
| **Nav Links**    | `background 0.2s, color 0.2s`      |
| **CTA Button**   | `background 0.2s`                  |

### Motion Design Philosophy

> All animations follow a **"slide + fade"** pattern with **deceleration curves** (`cubic-bezier(0.22, 1, 0.36, 1)`) to feel natural and premium. Stagger timing on text lines creates a **typewriter-like cascade** effect. The value prop section uses scroll-linked scaling to create a sense of the section **"growing out"** of the page.

---

## 7. Responsive Breakpoints

### Breakpoint Map

| Breakpoint | Max Width | Key Changes                                           |
| ---------- | --------- | ----------------------------------------------------- |
| **XL**     | `> 1200px`| Full layout — all features visible                    |
| **LG**     | `≤ 1200px`| Heading shrinks, navbar padding reduces               |
| **MD**     | `≤ 992px` | Nav links hidden, hero stacks vertically, video inline|
| **SM**     | `≤ 900px` | Grid → single column, section radius shrinks          |
| **XS**     | `≤ 600px` | Minimal spacing, smaller logo, full-width text        |

### Responsive Behavior Summary

```
Desktop (>1200px)
├── 2-column hero (58%/42% split)
├── Fixed navbar with pill navigation
├── 3-column value prop grid
├── Video bleeds off right edge
└── Large headings (up to 112px)

Tablet (993px–1200px)
├── Same 2-column layout
├── Slightly reduced spacing
└── Smaller heading clamp values

Tablet Portrait (≤992px)
├── Nav links HIDDEN (no hamburger menu yet ⚠️)
├── Hero stacks to SINGLE COLUMN
├── Video becomes inline (relative positioning)
├── Statement text widths expand to 80–90%
└── Section border-radius: 50px

Mobile (≤600px)
├── Hero min-height: auto
├── Logo shrinks to 50×50
├── CTA button shrinks
├── Heading: clamp(2rem, 10vw, 3rem)
├── Grid: single column, gap 2rem
├── Section border-radius: 28px
├── white-space overflow wraps normally
└── Reduced padding throughout
```

---

## 8. File Structure

```
pepperstack1/
├── index.html                 # Main HTML (127 lines)
├── style.css                  # All styles (511 lines)
├── index.js                   # Animations & interactions (44 lines)
├── paperstacklogo.png         # Logo asset (1024×1024, 121 KB)
├── 1721996743-hero-latest.webm # Hero background video (~12 MB)
└── STYLE_GUIDE.md             # ← This document
```

### Architecture Notes

- **Single-page** landing page (no routing, no SPA framework)
- **Zero dependencies** — no build tools, no npm, no frameworks
- **Single CSS file** — all styles are in one monolithic `style.css`
- **Single JS file** — all interactions in `index.js` (44 lines)
- **Google Fonts CDN** — only external dependency (`Inter` variable font)

---

## 9. Design Principles

### 9.1 Visual Language

| Principle              | Implementation                                                    |
| ---------------------- | ----------------------------------------------------------------- |
| **Minimalism**         | Monochrome palette, no gradients, no icons, no decorative borders |
| **Editorial Typography** | Massive headings, negative tracking, uppercase transforms       |
| **High Contrast**      | Pure black sections against warm linen backgrounds                |
| **Asymmetry**          | Video intentionally bleeds off-screen, creating dynamic tension   |
| **Negative Space**     | Large gaps (`4rem`), generous padding, wide margins               |
| **Progressive Disclosure** | Content reveals via scroll (scale animation, text cascade)    |

### 9.2 CSS Methodology

- **No naming convention** (BEM, OOCSS, etc.) — class names are semantic/descriptive
- **No CSS variables / custom properties** — colors and values are hardcoded
- **No utility classes** — all styles are component-specific
- **Media queries are mobile-last** (desktop-first approach)
- **`clamp()` for fluid typography** — responsive without media queries for font sizes

### 9.3 Interaction Design

| Pattern                  | Details                                                      |
| ------------------------ | ------------------------------------------------------------ |
| **Entry Animations**     | Text cascade on page load, video fade-in                     |
| **Scroll Animations**    | Value prop section scales from 0.92 → 1.0                    |
| **Hover States**         | Nav links get subtle background, CTA darkens                 |
| **Video Behavior**       | Autoplay, loop, muted, inline — ambient/decorative motion    |
| **Performance**          | `will-change`, `passive` scroll listeners, `playsinline` video |

---

## 10. Improvement Recommendations

### 🔴 Critical

| Issue                     | Details                                                           | Recommendation                                  |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------------ |
| **No Mobile Navigation**  | Nav links are `display: none` below 992px with no hamburger menu  | Add a hamburger/slide-out menu                   |
| **No CSS Custom Properties** | All values hardcoded — makes theming/refactoring brittle       | Extract colors, spacing, fonts into `:root` vars |
| **Video File Size**       | `~12 MB` WebM is very heavy for initial page load                 | Compress to < 3 MB, add poster image fallback    |
| **No `<meta description>`** | Missing SEO meta description tag                               | Add proper meta description and OG tags          |
| **No `alt` text on logo** | `<img src="./paperstacklogo.png" alt="">` — empty alt attribute   | Add descriptive alt text for accessibility       |

### 🟡 Important

| Issue                         | Recommendation                                              |
| ----------------------------- | ----------------------------------------------------------- |
| **No favicon**                | Add a favicon using the logo                                |
| **No `prefers-reduced-motion`** | Honor `prefers-reduced-motion: reduce` for accessibility  |
| **Commented-out CSS**         | Remove dead `.hero-video` styles (lines 212–224)            |
| **Font weight over-loading**  | Loading weight range `100–900` — only uses 400, 500, 600, 700, 900. Subset for performance |
| **No focus styles**           | No visible keyboard focus indicators for nav links/CTA      |
| **Typo in brand name**       | File says `paperstacklogo.png` but brand is `PAPPERSTACK` — inconsistency |

### 🟢 Nice to Have

| Enhancement                  | Details                                                     |
| ---------------------------- | ----------------------------------------------------------- |
| **Scroll-triggered reveals** | Add IntersectionObserver reveals for grid items & statement section |
| **Smooth scroll**            | Add `scroll-behavior: smooth` for anchor links              |
| **Loading skeleton**         | Add placeholder while video loads                           |
| **Dark mode**                | Already has dark section — extend with `prefers-color-scheme`|
| **Footer**                   | Currently no footer section — add company links/CTA         |

---

## Quick Reference: CSS Token Cheat Sheet

```css
/* ── Suggested CSS Custom Properties (not yet implemented) ── */
:root {
  /* Colors */
  --color-bg:           #E5E3DF;
  --color-black:        #000000;
  --color-white:        #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-muted:   #A0A0A0;
  --color-hover-bg:     #F0F0F0;
  --color-cta-hover:    #222222;

  /* Typography */
  --font-family:        "Inter", sans-serif;
  --font-size-base:     16px;
  --font-size-nav:      14px;
  --font-size-subtitle: 17px;
  --font-size-body:     1.1rem;
  --font-size-hero:     clamp(4rem, 7vw, 7rem);
  --font-size-grid-h:   3.5rem;
  --font-size-statement:clamp(3rem, 5.5vw, 5.5rem);

  /* Spacing */
  --nav-padding:        18px 48px;
  --nav-height:         80px;
  --section-padding:    6rem 5%;
  --grid-gap:           4rem;
  --max-width:          1440px;

  /* Radius */
  --radius-pill:        50px;
  --radius-section:     100px;
  --radius-nav-link:    30px;

  /* Animation */
  --ease-out-expo:      cubic-bezier(0.22, 1, 0.36, 1);
  --transition-fast:    0.2s;
  --transition-medium:  0.6s;
  --transition-slow:    0.9s;

  /* Shadows */
  --shadow-nav:         0 1px 3px rgba(0, 0, 0, 0.04);
}
```

---

*This style guide documents the current state of the PapperStack landing page as of February 2026. It serves as a reference for maintaining design consistency as the project scales.*
