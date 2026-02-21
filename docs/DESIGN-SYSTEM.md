# MONARC Dashboard — Design System

## Design Philosophy

Inspired by **Raycast.com** — clean, dark-first, depth through subtle shadows and glassmorphism, with micro-interactions that feel responsive and polished.

## Design Tokens

### Colors

```css
/* Base Palette */
--gray-900: #0a0a0f;      /* Deepest background */
--gray-800: #12121a;      /* Card backgrounds */
--gray-700: #1a1a24;      /* Elevated surfaces */
--gray-600: #252530;      /* Borders, dividers */
--gray-500: #3a3a48;      /* Muted text */
--gray-400: #6b6b7a;      /* Secondary text */
--gray-300: #9999a8;      /* Tertiary text */
--gray-100: #e5e5ec;      /* Primary text */
--white: #ffffff;         /* Headings, emphasis */

/* Accent Colors */
--blue-500: #3b82f6;      /* Primary actions */
--blue-400: #60a5fa;      /* Hover states */
--blue-600: #2563eb;      /* Active states */

--green-500: #22c55e;     /* Success, positive */
--red-500: #ef4444;       /* Error, negative */
--yellow-500: #eab308;    /* Warning */
--purple-500: #a855f7;    /* Highlight, special */
```

### Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

### Typography

```css
/* Font Sizes */
--text-xs: 0.75rem;       /* 12px - labels */
--text-sm: 0.875rem;      /* 14px - body small */
--text-base: 1rem;        /* 16px - body */
--text-lg: 1.125rem;      /* 18px - body large */
--text-xl: 1.25rem;       /* 20px - heading 4 */
--text-2xl: 1.5rem;       /* 24px - heading 3 */
--text-3xl: 1.875rem;     /* 30px - heading 2 */
--text-4xl: 2.25rem;      /* 36px - heading 1 */
--text-5xl: 3rem;         /* 48px - hero numbers */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Shadows

```css
/* Elevation System */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);

/* Glow Effects */
--glow-blue: 0 0 20px rgba(59, 130, 246, 0.3);
--glow-green: 0 0 20px rgba(34, 197, 94, 0.3);
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

## Component Abstraction Layer

### Card Component

```tsx
// components/ui/card.tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'glass';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Variants:
// default: bg-gray-800, border-gray-700
// elevated: bg-gray-700, shadow-lg
// glass: backdrop-blur-xl, bg-gray-800/50
```

**Styles to apply:**
```css
.card {
  background: var(--gray-800);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(255, 255, 255, 0.1);
}
```

### Stats Card Component

```tsx
// components/dashboard/stats-card.tsx
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;          // percentage change
  trend?: 'up' | 'down' | 'neutral';
  sparkline?: number[];     // mini chart data
  icon?: React.ReactNode;
}
```

**Required features:**
- Large value text (text-4xl font-bold)
- Trend indicator with color (green up, red down)
- Mini sparkline chart
- Subtle description text

### Chart Component

```tsx
// components/charts/area-chart.tsx
interface AreaChartProps {
  data: Array<{ date: string; value: number }>;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  gradient?: boolean;
}
```

**Styling requirements:**
- Gradient fill under line
- Smooth curve interpolation
- Animated on mount
- Responsive container

### Sidebar Navigation

```tsx
// components/layout/sidebar.tsx
interface SidebarProps {
  collapsed?: boolean;
  items: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;           // "Soon", "New", count
  children?: NavItem[];     // Nested items
  disabled?: boolean;
}
```

**Styling requirements:**
- Glassmorphism background
- Active state: left border accent + bg highlight
- Hover: subtle background shift
- Collapsible with icon-only mode
- Section dividers with labels

### Data Table

```tsx
// components/ui/data-table.tsx
interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  sortable?: boolean;
  selectable?: boolean;
  pagination?: boolean;
  stickyHeader?: boolean;
}
```

**Styling requirements:**
- Row hover highlight
- Sticky header on scroll
- Status badges as colored pills
- Alternating row backgrounds (subtle)

---

## Micro-interactions

### Button Hover
```css
.btn {
  transition: all 0.15s ease;
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--glow-blue);
}
.btn:active {
  transform: translateY(0);
}
```

### Card Hover
```css
.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Link Underline
```css
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--blue-500);
  transition: width 0.2s ease;
}
.link:hover::after {
  width: 100%;
}
```

---

## Empty States

All empty states should include:
1. Illustrative icon or image
2. Clear heading ("No data yet")
3. Helpful description
4. Primary action CTA

```tsx
<EmptyState
  icon={<ServerIcon />}
  title="No devices connected"
  description="Add your first device to start monitoring."
  action={{ label: "Add Device", href: "/dashboard/devices/new" }}
/>
```

---

## Accessibility

- All interactive elements: `focus-visible` ring
- Color contrast: minimum 4.5:1 for text
- Reduced motion: respect `prefers-reduced-motion`
- Screen reader: proper ARIA labels

---

*Last updated: 2026-02-21*
