# MONARC — Infrastructure Monitoring Dashboard

**MONARC** (MONitoring ARChitecture) is a modern infrastructure monitoring dashboard for tracking servers, services, network topology, and application performance in real-time.

Built on top of [Studio Admin](https://github.com/arhamkhnz/next-shadcn-admin-dashboard) — a Next.js admin template with TypeScript & Shadcn UI.

![Dashboard Screenshot](media/dashboard.png)

> **Live Demo:** https://devopsplusservice.com/dashboard

## Features

- 📊 Real-time infrastructure monitoring dashboards
- 🖥️ Server and device tracking
- 🗺️ Network topology visualization
- 📈 Performance metrics and analytics
- 🔔 Alert management (coming soon)
- 📋 SNMP logs and neighbor discovery (coming soon)

### Dashboard Variants
- **Default** — Overview with KPIs and activity
- **CRM** — Customer relationship metrics
- **Finance** — Financial analytics

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.x |
| UI Components | shadcn/ui (Radix primitives) |
| Charts | Recharts |
| Tables | TanStack Table |
| Forms | React Hook Form + Zod |
| Tooling | Biome, Husky |

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — Tech stack, structure, deployment
- [Design System](docs/DESIGN-SYSTEM.md) — Design tokens, component specs
- [TODO](docs/TODO.md) — Implementation checklist
- [Journal](docs/JOURNAL.md) — Development log

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/chjkh8113/monarc-dashboard.git
cd monarc-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deployment

Currently deployed on VPS with PM2:

```bash
# On server
cd /home/ubuntu/monarc-dashboard
git pull
npm install
npm run build
PORT=3000 pm2 restart monarc-dashboard
```

- **Domain:** devopsplusservice.com
- **Server:** 176.65.243.222
- **Process:** PM2 (`monarc-dashboard`)
- **Proxy:** Nginx (443 → 3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (external)/         # Public pages (auth)
│   ├── dashboard/          # Protected dashboard routes
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── charts/             # Chart components
│   └── layout/             # Layout components
├── lib/                    # Utilities
└── hooks/                  # Custom hooks
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)

---

Built with ❤️ by DevOpsPlus
