import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  BookOpen,
  Box,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe,
  HardDrive,
  type LucideIcon,
  LayoutDashboard,
  Network,
  Router,
  Server,
  Settings,
  Shield,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "Reports",
        url: "/dashboard/coming-soon",
        icon: FileText,
        comingSoon: true,
      },
      {
        title: "Alerts",
        url: "/dashboard/coming-soon",
        icon: Bell,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: "Infrastructure",
    items: [
      {
        title: "Devices",
        url: "/dashboard/coming-soon",
        icon: Server,
        comingSoon: true,
      },
      {
        title: "Network Map",
        url: "/dashboard/coming-soon",
        icon: Network,
        comingSoon: true,
      },
      {
        title: "Neighbors",
        url: "/dashboard/coming-soon",
        icon: Router,
        comingSoon: true,
      },
      {
        title: "SNMP Logs",
        url: "/dashboard/coming-soon",
        icon: Terminal,
        comingSoon: true,
      },
    ],
  },
  {
    id: 3,
    label: "",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/coming-soon",
        icon: BarChart3,
        comingSoon: true,
        subItems: [
          { title: "Performance", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Trends", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Capacity", url: "/dashboard/coming-soon", comingSoon: true },
        ],
      },
      {
        title: "Business",
        url: "/dashboard/coming-soon",
        icon: Briefcase,
        comingSoon: true,
        subItems: [
          { title: "SLA Reports", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Cost Analysis", url: "/dashboard/coming-soon", comingSoon: true },
        ],
      },
      {
        title: "Developer Kit",
        url: "/dashboard/coming-soon",
        icon: Code2,
        comingSoon: true,
        subItems: [
          { title: "API Docs", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Webhooks", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Integrations", url: "/dashboard/coming-soon", comingSoon: true },
        ],
      },
      {
        title: "Knowledge",
        url: "/dashboard/coming-soon",
        icon: BookOpen,
        comingSoon: true,
        subItems: [
          { title: "Runbooks", url: "/dashboard/coming-soon", comingSoon: true },
          { title: "Documentation", url: "/dashboard/coming-soon", comingSoon: true },
        ],
      },
    ],
  },
];
