import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "#", icon: "House" },
    { name: "About", url: "#", icon: "User" },
    { name: "Projects", url: "#", icon: "Briefcase" },
    { name: "Resume", url: "#", icon: "FileText" },
  ];

  return <NavBar items={navItems} />;
}
