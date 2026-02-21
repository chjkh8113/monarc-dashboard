# MONARC Dashboard — UI Redesign TODO

> Objective: Bring MONARC dashboard UI quality up to Raycast.com standards.
> 
> Reference: https://raycast.com
> 
> Started: 2026-02-21

---

## 🔴 P0: Critical (Broken/Incomplete)

- [ ] **Fix empty chart visualization**
  - File: `src/app/dashboard/default/page.tsx`
  - Issue: "Total Visitors" shows empty area, no chart rendered
  - Solution: Implement Recharts/Tremor area chart component
  - Add sample data generator in `src/lib/sample-data.ts`
  - Include loading skeleton state

- [ ] **Address "Soon" badge overload**
  - Files: `src/components/layout/sidebar.tsx`
  - Issue: 7 sidebar items show "Soon" — looks incomplete/abandoned
  - Solution: 
    - Option A: Hide unready features entirely
    - Option B: Create proper "Coming Soon" landing pages
    - Option C: Consolidate under single "Roadmap" section

---

## 🟠 P1: High Impact Visual Polish

- [ ] **Card depth & shadows**
  - Files: `src/components/ui/card.tsx`, `src/app/globals.css`
  - Add: `box-shadow: 0 4px 24px rgba(0,0,0,0.4)`
  - Add: `border: 1px solid rgba(255,255,255,0.05)`
  - Add: hover effect with `transform: translateY(-2px)`

- [ ] **Background depth**
  - File: `src/app/globals.css`, `src/app/layout.tsx`
  - Add subtle radial gradient behind main content
  - Consider noise texture overlay (opacity 0.02)

- [ ] **Stats cards enhancement**
  - File: Create `src/components/dashboard/stats-card.tsx`
  - Add mini sparkline trend charts
  - Improve typography (larger value text)
  - Better trend indicators (not just % badge)

- [ ] **Typography scale improvements**
  - File: `src/app/globals.css`, component files
  - Hero numbers: bump to `text-4xl` or `text-5xl`
  - Section headers: increase weight/size
  - Improve line-height on descriptions

---

## 🟡 P2: Navigation & Layout

- [ ] **Sidebar improvements**
  - File: `src/components/layout/sidebar.tsx`
  - Add section dividers with subtle labels
  - Implement collapsible sections (Overview / Infrastructure)
  - Better active state (left border + bg highlight)
  - Upgrade icons to Phosphor or custom set

- [ ] **Header/navbar polish**
  - File: `src/components/layout/navbar.tsx`
  - Add subtle bottom border or shadow
  - Glassmorphism search bar styling
  - User avatar with dropdown menu

- [ ] **Data table polish**
  - File: `src/components/ui/data-table.tsx`
  - Row hover highlight effect
  - Sticky header on scroll
  - Status badges as colored pills (not dots)

---

## 🟢 P3: Micro-interactions & Delight

- [ ] **Button animations**
  - File: `src/components/ui/button.tsx`
  - Hover: slight scale (1.02) + glow
  - Active: press effect (scale 0.98)
  - Loading: spinner + disabled state

- [ ] **Page transitions**
  - File: `src/app/layout.tsx`
  - Fade in on route change
  - Consider Framer Motion integration

- [ ] **Skeleton loaders**
  - Create: `src/components/ui/skeleton.tsx`
  - Add loading states for cards, tables, charts
  - Match actual content dimensions

- [ ] **Empty states**
  - Create: `src/components/ui/empty-state.tsx`
  - Custom illustrations for "no data"
  - Helpful CTAs ("Add your first device")

---

## 🔵 P4: Advanced Polish (Nice-to-have)

- [ ] **Glassmorphism elements**
  - Sidebar: `backdrop-filter: blur(12px)`
  - Modals/dropdowns: frosted glass effect

- [ ] **Animated gradients**
  - Subtle moving gradient on hero/header
  - Glow effects on primary buttons

- [ ] **Keyboard shortcuts**
  - Implement `⌘K` / `Ctrl+K` command palette
  - Show shortcut hints in tooltips

- [ ] **Light theme option**
  - Currently dark-only
  - Add light mode with smooth transition

---

## 📋 Implementation Checklist

### Phase 1: Foundation (Day 1)
- [ ] Update globals.css with design tokens
- [ ] Create base Card component variants
- [ ] Implement StatsCard component
- [ ] Fix chart visualization

### Phase 2: Navigation (Day 1-2)
- [ ] Redesign Sidebar component
- [ ] Polish Navbar component
- [ ] Add proper active states

### Phase 3: Data Display (Day 2)
- [ ] Enhance DataTable component
- [ ] Create EmptyState component
- [ ] Add Skeleton loaders

### Phase 4: Micro-interactions (Day 2-3)
- [ ] Button hover/active states
- [ ] Card hover effects
- [ ] Page transitions

### Phase 5: Polish (Day 3)
- [ ] Glassmorphism effects
- [ ] Final typography pass
- [ ] Responsive testing
- [ ] Performance audit

---

## 🔖 Git Commit Convention

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- style: Styling changes (no logic)
- refactor: Code restructuring
- docs: Documentation
- chore: Build/config changes

Examples:
- feat(chart): implement area chart with Recharts
- style(card): add shadows and hover effects
- fix(sidebar): remove excessive "Soon" badges
- docs(arch): add design system documentation
```

---

## 📊 Progress Tracking

| Phase | Tasks | Done | Progress |
|-------|-------|------|----------|
| P0 | 2 | 1 | 50% |
| P1 | 4 | 3 | 75% |
| P2 | 3 | 0 | 0% |
| P3 | 4 | 1 | 25% |
| P4 | 4 | 0 | 0% |
| **Total** | **17** | **5** | **29%** |

### Completed
- [x] P0: Address "Soon" badge overload (sidebar reorganized)
- [x] P1: Card depth & shadows (hover effects added)
- [x] P1: Stats cards enhancement (larger text, colored badges)
- [x] P1: Typography scale improvements (text-4xl titles)
- [x] P3: Button animations (hover lift, active press)

### In Progress
- [ ] P0: Fix empty chart visualization (needs server deploy to verify)

---

*Created: 2026-02-21*
*Last updated: 2026-02-21 12:30 PST*
