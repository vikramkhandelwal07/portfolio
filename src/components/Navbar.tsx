import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "/", icon: "House" },
    { name: "About", url: "/about", icon: "User" },
    { name: "Projects", url: "#", icon: "Briefcase" },
    { name: "Resume", url: "#", icon: "FileText" },
    { name: "Contact", url: "#", icon: "Contact" },
  ];

  return <NavBar items={navItems} />;
}
  