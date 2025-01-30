"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

// Import the button for theme toggle (ShadCN Button)
import { Button } from "@/components/ui/button";

// Correctly reference images inside the public folder for theme icons
const moon_icon = "/assets/moon_icon.png";
const sun_icon = "/assets/sun_icon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode); // Toggle dark mode globally
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="fixed top-2 right-2 p-2 z-50 sm:top-6 sm:right-8 sm:p-3 rounded-full shadow-lg flex items-center justify-center"
          >
            <img
              src={darkMode ? sun_icon : moon_icon}
              alt="Toggle Dark Mode"
              className="sm:w-8 w-4"
            />
          </button>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
