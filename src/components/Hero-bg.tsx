"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function HeroBg() {
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
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Building Myself, One Iteration at a Time
        </div>
        <button onClick={onClickHandler} className="bg-black dark:bg-white rounded-full w-fit sm:hidden text-white dark:text-black  px-4 py-2">
          explore my Portfolio
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
