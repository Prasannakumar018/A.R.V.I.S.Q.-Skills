# A.R.V.I.S.Q.-Skills Design System

## Design Philosophy

**Professional. Trustworthy. Accessible.**

A.R.V.I.S.Q.-Skills uses a security-inspired design language that conveys:
- **Credibility** - Dark, technical aesthetic without being intimidating
- **Precision** - Monospace labels, clear hierarchy, exact spacing
- **Openness** - Bright accents, generous whitespace, approachable typography
- **Community** - Familiar open-source design patterns

Inspired by the Red Team Deck design system, adapted for public education.

---

## Color Palette

### Core Colors

```css
--bg-primary: #0A0A0C       /* Near-black background */
--bg-secondary: #15161A     /* Panel/card fill */
--bg-tertiary: #1C1D22      /* Secondary fills */
```

**Dark foundation** - Reduces eye strain, focuses attention, conveys technical depth.

### Text Colors

```css
--text-primary: #F2F2F4     /* Headlines, primary text */
--text-secondary: #9A9CA4   /* Body text */
--text-tertiary: #6B6D76    /* Captions, footers */
```

**High contrast** - WCAG AA+ compliant, readable at all sizes.

### Accent Colors

```css
--accent-primary: #FF4D2E   /* Orange - Primary actions, emphasis */
--accent-critical: #FF3B30  /* Red - Critical/RCE severity */
--accent-warning: #FFB02E   /* Amber - Warnings/Medium */
--accent-info: #2EC5E8      /* Cyan - Information/Categories */
--accent-safe: #3ED57A      /* Green - Safe/Success */
--accent-purple: #B05CF0    /* Purple - Categories */
--accent-blue: #5C7CF0      /* Blue - Categories */
```

**Category Color Order**  
For multi-item displays, use in sequence:
```
Orange → Red → Amber → Cyan → Purple → Blue → Green
```

This provides visual distinction while maintaining hierarchy.

---

## Typography

### Font Families

**Sans-Serif (Body & Headlines)**
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif
```
System fonts for fast loading and native feel.

**Monospace (Labels, Code, Counts)**
```css
--font-mono: 'SF Mono', 'Monaco', 'Consolas', monospace
```
Technical precision for code, labels, and data.

### Type Scale

| Element | Size | Weight | Use |
|---------|------|--------|-----|
| Hero Title | 3-5rem | 900 | Landing page headline |
| Section Title | 2-3rem | 700 | Section headers |
| Tile Title | 1.5rem | 700 | Card headings |
| Body | 1.125rem | 400 | Paragraphs |
| Label/Kicker | 0.75rem | 500 | Uppercase labels |
| Caption | 0.875rem | 400 | Meta information |

### Typography Rules

1. **Monospace for data** - Counts, code, labels, stats use `--font-mono`
2. **Sans-serif for prose** - Body text and headlines use `--font-sans`
3. **Uppercase sparingly** - Only for kickers and badges
4. **One orange word** - In headlines, emphasize one key word in `--accent-primary`

---

## Component System

### Tiles (Cards)

**Structure**
```
┌─────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━ │ ← 3px top accent bar
│                             │
│  🔐  Badge           [12]   │ ← Icon, badge, count
│                             │
│  Title                      │
│  Description text...        │
│                             │
│  ──────────────────────     │ ← Divider
│  Meta · Meta                │
│                             │
│  [Tag] [Tag] [Tag]          │
│                             │
└─────────────────────────────┘
```

**CSS**
```css
.tile {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-top: 3px solid var(--accent-primary);
    border-radius: 12px;
    padding: 2rem;
}
```

**Category Colors**  
Use `data-category` attribute or direct border-top-color:
- `data-category="owasp"` → Orange (`--accent-primary`)
- `data-category="llm"` → Red (`--accent-critical`)
- `data-category="api"` → Amber (`--accent-warning`)
- `data-category="tool-ready"` → Green (`--accent-safe`)
- `data-category="tool-beta"` → Amber (`--accent-warning`)
- `data-category="tool-soon"` → Cyan (`--accent-info`)

### Badges

**Status Badges**
```css
.status-ready     { color: #3ED57A; } /* Green */
.status-beta      { color: #FFB02E; } /* Amber */
.status-coming-soon { color: #2EC5E8; } /* Cyan */
```

**Category Badges**
```css
.badge-primary    { color: #FF4D2E; } /* Orange */
.badge-critical   { color: #FF3B30; } /* Red */
.badge-warning    { color: #FFB02E; } /* Amber */
```

### Buttons

**Hierarchy**
1. **Primary** - Orange fill, dark text - Main actions
2. **Secondary** - Border only, no fill - Secondary actions
3. **Outline** - Orange border, orange text - Tertiary actions

**States**
- Hover: Lift 2px, add shadow
- Active: Scale 98%
- Focus: Orange outline ring

### Navigation

**Fixed navbar** with blur backdrop:
```css
background: rgba(10, 10, 12, 0.95);
backdrop-filter: blur(10px);
border-bottom: 1px solid var(--border-color);
```

**Link states**:
- Default: Gray (`--text-secondary`)
- Hover/Active: Orange with underline animation
- Underline grows from left to right on hover

---

## Layout System

### Grid

**Standard tile grid**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
gap: 2rem;
```

**Responsive breakpoints**
- Mobile: < 640px (1 column, full-width buttons)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

### Spacing Scale

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 0.75rem   /* 12px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
```

Use consistently:
- Card padding: `--spacing-xl` (32px)
- Section padding: `--spacing-3xl` (64px)
- Element gaps: `--spacing-lg` (24px)

---

## Visual Elements

### Borders

**Accent bars** (top of tiles):
```css
border-top: 3px solid var(--accent-primary);
```

**Standard borders**:
```css
border: 1px solid var(--border-color);
```

**Border radius**:
- Standard: `8px`
- Large (tiles): `12px`
- Pills (badges): `100px`

### Shadows

**Elevation scale**:
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
--shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.7);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.8);
--shadow-accent: 0 0 20px rgba(255, 77, 46, 0.15);
```

Use elevation to show interaction:
- Default: `--shadow-sm`
- Hover: `--shadow-md` + lift 2px
- Focus: `--shadow-lg`
- Primary button hover: `--shadow-accent`

### Gradients

**Hero gradient** (subtle radial):
```css
background: radial-gradient(
    circle at top center,
    rgba(255, 77, 46, 0.08) 0%,
    transparent 60%
);
```

**Text gradient** (accent text):
```css
background: linear-gradient(135deg, 
    var(--accent-primary) 0%, 
    var(--accent-info) 100%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Interactions

### Hover States

**Cards/Tiles**
```css
.tile:hover {
    background: var(--bg-tertiary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
```

**Buttons**
```css
.btn:hover {
    transform: translateY(-2px);
    /* Plus color/shadow changes */
}
```

**Links**
```css
.nav-link::after {
    /* Underline slides in from left */
    transform: scaleX(0);
}
.nav-link:hover::after {
    transform: scaleX(1);
}
```

### Transitions

**Standard timing**:
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

Apply to:
- Colors: `--transition-fast`
- Transforms: `--transition`
- Large movements: `--transition-slow`

---

## Content Patterns

### Hero Section

```
[BADGE] Open Source Security Platform

MASTER AI & APPLICATION SECURITY
One Skill at a Time
                    ↑ Orange accent word

Comprehensive catalog of OWASP...

[Primary Button] [Secondary Button]

┌──────────┐ ┌──────────┐ ┌──────────┐
│    20    │ │    15    │ │    10    │  Stats with
│  Skills  │ │  Tools   │ │ Packages │  colored bars
└──────────┘ └──────────┘ └──────────┘
```

### Section Structure

```
/ SECTION LABEL            ← Kicker (monospace, orange, uppercase)

Section Title              ← Bold, large
With optional description  ← Gray body text

[Tile Grid]                ← 3-column responsive grid
```

### Tile Content

```
━━━━━━━━━━━━━━━━━━━━       ← 3px accent bar
🔐 Badge                    ← Icon + category badge
                      [12]  ← Count (optional, faded)

Title Here                  ← Bold heading
Description of the skill... ← Body text

─────────────────────       ← Divider line
✓ Meta · 📊 Meta            ← Metadata icons

[Tag] [Tag] [Tag]           ← Feature tags

Link →                      ← Action link with arrow
```

---

## Accessibility

### Contrast Ratios

All text meets WCAG AA standards:
- Large text (≥18pt): 3:1 minimum
- Normal text: 4.5:1 minimum
- UI components: 3:1 minimum

**Tested combinations**:
- White on dark bg: 14.5:1 ✓
- Gray on dark bg: 7.2:1 ✓
- Orange on dark bg: 6.8:1 ✓
- Orange on white: 4.7:1 ✓

### Focus States

All interactive elements have visible focus:
```css
:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}
```

### Motion

Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- All images have alt text
- Links have descriptive text
- Forms have labels
- ARIA labels where needed

---

## Theme Support

### Dark Mode (Default)

Current palette optimized for dark backgrounds.

### Light Mode (Optional)

Add `data-theme="light"` to `<html>`:
```css
[data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --text-primary: #212529;
    /* ... inverted colors */
}
```

### Theme Toggle

```html
<button class="theme-toggle" onclick="toggleTheme()">
    🌙 / ☀️
</button>
```

---

## Best Practices

### Do ✅

- Use monospace for technical data (code, counts, labels)
- Apply top accent bars to all tiles for consistency
- Keep one word orange in headlines
- Use category colors in order (orange → red → amber...)
- Provide hover states for all interactive elements
- Test contrast ratios for new colors

### Don't ❌

- Don't use pure white backgrounds (use `--bg-secondary`)
- Don't mix serif fonts (system sans only)
- Don't use more than 3 accent colors per section
- Don't forget hover states
- Don't use orange text on orange backgrounds
- Don't break the type scale

---

## Component Checklist

When creating new components:

- [ ] Uses CSS custom properties from palette
- [ ] Includes hover state
- [ ] Has focus-visible outline
- [ ] Meets contrast requirements (test with WebAIM)
- [ ] Responsive (mobile-first)
- [ ] Monospace for labels/data, sans for prose
- [ ] Transitions use `--transition` variables
- [ ] Follows spacing scale
- [ ] Border radius consistent with system
- [ ] Tested with screen reader

---

## Files

**CSS**
- `assets/css/styles-enhanced.css` - Full design system (active)
- `assets/css/styles.css` - Original (backup)

**HTML**
- `index.html` - Main landing page
- `index-original.html` - Backup

**Documentation**
- `DESIGN.md` - This file
- `MANIFESTO.md` - Project philosophy

---

## Examples

### Creating a New Skill Tile

```html
<div class="tile" data-category="owasp">
    <div class="tile-header">
        <div class="tile-icon">🔐</div>
        <span class="tile-badge badge-primary">Web Security</span>
    </div>
    <h3 class="tile-title">OWASP Top 10</h3>
    <p class="tile-description">
        The ten most critical security risks...
    </p>
    <div class="tile-meta">
        <span class="meta-item">✓ 10 Skills</span>
        <span class="meta-item">📊 Interactive</span>
    </div>
    <a href="/skills/owasp-top-10" class="nav-link">
        Explore →
    </a>
</div>
```

### Creating a Status Badge

```html
<span class="status-badge status-ready">Ready</span>
<span class="status-badge status-beta">Beta</span>
<span class="status-badge status-coming-soon">Coming Soon</span>
```

### Creating a Kicker + Headline

```html
<p class="section-kicker">/ SECURITY ARSENAL</p>
<h2 class="section-title">
    Testing & <span class="text-accent">Validation</span> Tools
</h2>
```

---

## Extending the System

### Adding New Colors

1. Add to `:root` in CSS
2. Create utility class (`.text-newcolor`, `.badge-newcolor`)
3. Document usage in this file
4. Test contrast ratio
5. Add to category color order if applicable

### Adding New Components

1. Follow tile/button/badge patterns
2. Use existing spacing/border/shadow scales
3. Include all states (default, hover, focus, active)
4. Make responsive
5. Add to this documentation

---

## Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

**Design System Version**: 1.0  
**Last Updated**: 2026-10-22  
**Maintained by**: Prasanna Kumar
