import { 
  LayoutDashboard, 
  BookOpen, 
  Calculator, 
  CheckSquare, 
  Library,
  Database,
  Truck,
  ShoppingCart,
  History,
  Settings,
  UserCog,
  FileText
} from "lucide-react";

export const MENU_ITEMS = [
  {
    group: "UTAMA",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    group: "KONTROL",
    items: [
      { name: "Analisa", path: "/analytics", icon: BookOpen },
      { name: "Diagnostik", path: "/diagnostics", icon: Calculator },
    ]
  },
];