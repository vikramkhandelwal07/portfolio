"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function AboutMe() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-background">
      {/* Centered div with a red border, responsive width and height */}
      <div className="relative w-full h-full max-w-7xl max-h-[50rem] border-4 border-red-500 rounded-md mt-16 px-4 sm:px-8 lg:px-16">
        {/* About Me positioned in the top-left corner, responsive margins */}
        <div className="absolute top-16 left-4 sm:top-6 sm:left-8 md:top-6 md:left-8 p-4">
          <h1 className="relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground flex items-start font-sans font-bold">
            About Me
          </h1>
          
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}

export { AboutMe };
