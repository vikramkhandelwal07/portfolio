import { ThemeProvider } from 'next-themes';
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { HeroBg } from "@/components/Hero-bg";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        
        <HeroBg />
        <Background />
        <Contact />
      </div>
    </ThemeProvider>
  );
}