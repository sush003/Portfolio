// npx shadcn@latest add https://21st.dev/r/ayushmxxn/tubelight-navbar
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Skills", url: "#features", icon: Briefcase },
    { name: "Work", url: "#services", icon: FileText },
    { name: "Contact", url: "#contact", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
