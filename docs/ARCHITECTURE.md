# MONARC Dashboard — Architecture

## Overview

MONARC is a modern infrastructure monitoring dashboard built with Next.js 16, designed for tracking servers, services, network topology, and application performance in real-time.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.x |
| UI Components | shadcn/ui (Radix primitives) |
| Charts | Recharts / Tremor |
| State | React Context + Server Components |
| Icons | Lucide React |
| Fonts | Inter (primary), system fallbacks |

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (external)/         # Public pages (login, register)
│   ├── dashboard/          # Protected dashboard routes
│   │   ├── default/        # Main dashboard view
│   │   ├── crm/            # CRM dashboard variant
│   │   ├── finance/        # Finance dashboard variant
│   │   └── coming-soon/    # Placeholder for WIP features
│   ├── layout.tsx          # Root layout with providers
│   └── globals.css         # Global styles & CSS variables
│
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── charts/             # Chart components (NEW)
│   ├── dashboard/          # Dashboard-specific components
│   └── layout/             # Layout components (Sidebar, Navbar)
│
├── lib/
│   ├── utils.ts            # Utility functions (cn, etc.)
│   ├── sample-data.ts      # Demo/sample data (NEW)
│   └── constants.ts        # App constants
│
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── styles/                 # Additional style modules
```

## Design System Integration

See [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) for the complete design token system and component abstraction layer.

## Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
├─────────────────────────────────────────────────────────┤
│  Server Components (default)                             │
│  ├── Fetch data at request time                         │
│  ├── No client-side JS bundle                           │
│  └── SEO-friendly                                        │
├─────────────────────────────────────────────────────────┤
│  Client Components ('use client')                        │
│  ├── Interactive UI (charts, forms)                     │
│  ├── Browser APIs                                        │
│  └── Real-time updates                                   │
└─────────────────────────────────────────────────────────┘
```

## Theme System

MONARC uses a CSS variable-based theming system:

```css
:root {
  --background: 222 47% 6%;      /* Dark blue-gray */
  --foreground: 210 40% 98%;     /* Near white */
  --card: 222 47% 8%;            /* Slightly lighter */
  --primary: 217 91% 60%;        /* Blue accent */
  --muted: 217 33% 17%;          /* Muted backgrounds */
  --border: 217 33% 12%;         /* Subtle borders */
}
```

Theme presets are stored in cookies for SSR compatibility.

## Deployment

- **Platform:** VPS (176.65.243.222)
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx (SSL termination)
- **Domain:** devopsplusservice.com

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle Size | < 200KB (first load) |

---

*Last updated: 2026-02-21*
