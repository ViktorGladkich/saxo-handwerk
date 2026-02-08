import {
  Home,
  User,
  Briefcase,
  FileText,
  LayoutGrid,
  Mail,
  DollarSign,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: LayoutGrid },
  { label: "Blogs", href: "/blog", icon: FileText },
  { label: "Pricing", href: "/pricing", icon: DollarSign },
  { label: "Contact", href: "/contact", icon: Mail },
];
