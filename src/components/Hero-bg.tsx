"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js"; // Import the Typed.js library
import { AuroraBackground } from "@/components/ui/aurora-background";

// Correctly reference images inside the public folder
const moon_icon = "/assets/moon_icon.png"; // Image inside the public folder
const sun_icon = "/assets/sun_icon.png"; // Image inside the public folder

export function HeroBg() {
  const typedElement = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const options = {
      strings: [
        "Developer",
        "Tech Enthusiast",
        "Learner",
        "Coder",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup the Typed instance when the component is unmounted
    return () => typed.destroy();
  }, []);

  const onClickHandler = () => {
    const targetSection = document.getElementById("bentofeatures");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode); // Toggle the dark mode on root element
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-8 right-8 md:top-8 md:right-8 lg:top-6 lg:right-18   p-4 rounded-full shadow-lg text-center flex items-center "
        >
          <img
            src={darkMode ? sun_icon : moon_icon}
            alt="Toggle Dark Mode"
            className="w-8 fixed top-8 right-8 md:top-8 md:right-8 lg:top-6 lg:right-18 p-1 rounded-full"
          />
        </button>


        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Vikram Khandelwal
        </div>

        {/* Typing Effect Positioned Below Name to the Left */}
        <div className="text-lg md:text-3xl dark:text-neutral-300 font-light py-2 self-start ml-4 md:ml-8">
          <p>
            I'm{" "}
            <span
              ref={typedElement}
              className="text-black dark:text-neutral-100 font-semibold"
            ></span>
          </p>
        </div>

        <div className="font-extralight text-base md:text-2xl dark:text-neutral-300 py-4 text-start">
          Building myself, One iteration at a time
        </div>

        <div className="flex gap-4 items-start text-start">
          <button
            onClick={onClickHandler}
            className="bg-black dark:bg-neutral-200 rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            Connect with Me
          </button>
          <button
            onClick={onClickHandler}
            className="bg-black dark:bg-black rounded-full w-fit text-white dark:text-white px-4 py-2"
          >
            Resume📄
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
