"use client"; // Add this directive since you're using client-side logic

import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import { assets } from "../../public/assets/assets";

export default function BentoBox() {
  return (
    <div id="bentofeatures" className="relative z-10 grid max-w-5xl mx-auto gap-4 grid-cols-1 md:grid-cols-3 auto-rows-auto w-full mt-24 bg-transparent mb-24 h-auto md:h-[640px]">
      {/* First row: 3 columns */}
      <div className="bg-blue-200 h-[320px] rounded-2xl"></div>
      <div className="bg-blue-200 h-[320px] rounded-2xl"></div>
      <div className="bg-blue-200 h-[320px] rounded-2xl"></div>

      {/* Second row: 1 big column and 1 small column */}
      <div className="col-span-1 md:col-span-2 h-[360px] bg-blue-200 rounded-2xl"></div>

      {/* Social block */}
      <div className="h-[360px] border-2 bg-transparent bg-opacity-50 rounded-2xl p-4">
        <div className="flex flex-col box-border border h-3/4 rounded-lg bg-transparent">
          {/* Github */}
          <Link
            href="https://github.com/vikramkhandelwal07" // Replace with your GitHub URL
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 border h-1/3 gap-5 m-2 rounded-2xl relative bg-gray-950 cursor-pointer hover:bg-opacity-90 transition-all duration-300"
            >
              <Image
                className="ml-2 relative z-10"
                src={assets.github_black} // Always use the dark theme logo
                height={50}
                width={50}
                alt="Github Icon"
              />
              <p className="text-2xl font-semibold relative z-10 text-white">Github</p> {/* White text for contrast */}
            </a>
          </Link>

          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/vikram-khandelwal07/" // Replace with your LinkedIn URL
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 border h-1/3 gap-5 mx-2 rounded-2xl relative bg-[#0a66c2] cursor-pointer hover:bg-opacity-90 transition-all duration-300"
            >
              <Image
                className="ml-2 relative z-10"
                src={assets.linkedin_black} // Always use the dark theme logo
                height={50}
                width={50}
                alt="Linkedin Icon"
              />
              <p className="text-2xl font-semibold relative z-10 text-white">Linkedin</p> {/* White text for contrast */}
            </a>
          </Link>

          {/* Other Social Icons */}
          <div className="flex items-center justify-between p-2 border h-1/3 gap-5 m-2 rounded-2xl box-border">
            {/* Twitter */}
            <Link
              href="https://x.com/vikram_khd" // Replace with your Twitter URL
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative border p-1 rounded-2xl bg-blue-400 cursor-pointer hover:bg-opacity-90 transition-all duration-300"
              >
                <Image
                  className="relative z-10 p-1"
                  src={assets.twitter_white} // Always use the dark theme logo
                  height={50}
                  width={50}
                  alt="Twitter Icon"
                />
              </a>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/vikramkhandelwal07" // Replace with your Instagram URL
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative border p-1 rounded-2xl bg-pink-600 cursor-pointer hover:bg-opacity-90 transition-all duration-300"
              >
                <Image
                  className="relative z-10 p-1"
                  src={assets.instagram_white} // Always use the dark theme logo
                  height={50}
                  width={50}
                  alt="Instagram Icon"
                />
              </a>
            </Link>

            {/* Leetcode */}
            <Link
              href="https://leetcode.com/u/vikramkhandelwal07/" // Replace with your LeetCode URL
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative border p-1 rounded-2xl bg-[#ffa116] cursor-pointer hover:bg-opacity-90 transition-all duration-300"
              >
                <Image
                  className="relative z-10 p-1"
                  src={assets.leetcode} // Use the default logo (assuming it works for both themes)
                  height={50}
                  width={50}
                  alt="Leetcode Icon"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="m-4 mt-8 flex items-center text-2xl font-bold text-black dark:text-white">Social Links</h1>
        </div>
      </div>
    </div>
  );
}