"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js"; // Import the Typed.js library
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button"; // Import the ShadCN Button component

// Correctly reference images inside the public folder
const moon_icon = "/assets/moon_icon.png"; // Image inside the public folder
const sun_icon = "/assets/sun_icon.png"; // Image inside the public folder

export function HeroBg() {
  const typedElement = useRef(null);

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
          {/* ShadCN Buttons */}
          <Button
            onClick={onClickHandler}
            className="bg-black dark:bg-neutral-200 rounded-full w-fit text-white dark:text-black px-6 py-3"
          >
            Connect with Me
          </Button>
          <Button
            onClick={onClickHandler}
            className="bg-black dark:bg-black rounded-full w-fit text-white dark:text-white px-6 py-3"
          >
            Resume📄
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
