"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";
import BentoBox from "./Bento";

export function Background() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setColor("#ffffff");
    } else {
      setColor("#000000");
    }
  }, [theme]);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen w-full p-4 ">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      {/* Bento Grid */}
      <BentoBox />
    </div>
  );
}
