import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "/", icon: "House" },
    { name: "About", url: "/about", icon: "User" },
    { name: "Projects", url: "#", icon: "Briefcase" },
    { name: "Skills", url: "#", icon: "FileText" },
    { name: "Resume", url: "#", icon: "Contact" },
  ];

  return <NavBar items={navItems} />;
}
  