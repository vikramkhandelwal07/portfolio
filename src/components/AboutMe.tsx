"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { assets, infoList } from "../../public/assets/assets";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-background">
      {/* Centered div with a red border, responsive width and height */}
      <div className="relative w-full h-full max-w-7xl max-h-[50rem] rounded-md mt-16 px-4 sm:px-8 lg:px-16">
        {/* About Me positioned in the top-left corner, responsive margins */}
        <div className="absolute top-16 left-4 sm:top-6 sm:left-8 md:top-6 md:left-8 p-4">
          <h1 className="relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground flex items-start font-sans font-bold">
            About Me
          </h1>
          <div className="flex w-full flex-col lg:flex-row items-center gap-20">
            <div className="w-80 sm:w-80 rounded-3xl max-w-none">
              <Image
                alt="mera photo"
                src={assets.user_image}
                className="z-50 w-full rounded-3xl mt-12"
              />
            </div>
            <div className="flex-1 z-50 mt-12">
              <p className="mb-10 max-w-2xl m-2">
                I’m a passionate programmer and aspiring software engineer with a
                deep interest in web development, machine learning, and
                problem-solving. I thrive on creating applications that make a real
                impact and love exploring new technologies. Outside of coding, I have
                a strong passion for art—whether it’s sketching, creating
                hyper-realistic artworks, or painting. What excites
                me most about programming is the ability to tackle real-world
                challenges while constantly learning and growing. Let’s connect and
                build something amazing together!
              </p>

              {/* Buttons for Skills and Passion */}
              <div className="flex gap-6 mb-4">
                <Link href="/skills">
                  <button className="bg-black dark:bg-neutral-200 rounded-full px-6 py-3 text-white dark:text-black hover:bg-blue-400 hover:dark:bg-blue-200 hover:scale-105 dark:hover:bg-black dark:border-gray-600 hover:shadow-black dark:hover:shadow-white duration-100">
                    Skills
                  </button>
                </Link>
                <Link href="/passion">
                  <button className="bg-black dark:bg-neutral-200 rounded-full px-6 py-3 text-white dark:text-black hover:bg-blue-400 hover:dark:bg-blue-200 duration-100 hover:scale-105  dark:hover:bg-black dark:border-gray-600 hover:shadow-black dark:hover:shadow-white">
                    Passion
                  </button>
                </Link>
              </div>

              <ul className="grid grid-cols-1 z-50 sm:grid-cols-3 gap-6 max-w-2xl m-2">
                {infoList.map(({ icon, iconDark, title, description }, index) => (
                  <Link
                    href={"/"}
                    key={index}
                    className="block border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-blue-50 dark:hover:bg-black dark:border-gray-600 hover:shadow-black dark:hover:shadow-white"
                  >
                    <Image
                      className="w-7 mt-3  z-50"
                      src={icon}
                      alt={title}
                    />
                    <h3 className="my-4 font-semibold text-gray-700 text-foreground dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}

export { AboutMe };
