import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroBg } from "@/components/Hero-bg";

import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <HeroBg/>
    <Background/>
    <Contact/>
    
    
  </div>   
  );
}
