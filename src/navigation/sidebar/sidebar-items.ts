import {
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  type LucideIcon,
  LayoutDashboard,
  Network,
  Router,
  Server,
  Terminal,
  TrendingUp,
  Wallet,
  Users,
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
        subItems: [
          { title: "Overview", url: "/dashboard/default" },
          { title: "CRM", url: "/dashboard/crm" },
          { title: "Finance", url: "/dashboard/finance" },
        ],
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
    label: "Tools",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/coming-soon",
        icon: BarChart3,
        comingSoon: true,
      },
      {
        title: "Knowledge Base",
        url: "/dashboard/coming-soon",
        icon: BookOpen,
        comingSoon: true,
      },
    ],
  },
];
