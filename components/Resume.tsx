"use client";
import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Resume = () => {
  return (
    <section className="bg-transparent" id="resume">
      <div className="max-w-6xl mx-auto h-40">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold py-12 md:py-20 text-center md:text-left px-4">
          Resume
        </h1>
      </div>
      <div className="-mt-3 py-6 md:py-10">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 px-4">
          {/* Download Button */}
          <div className="backdrop-blur-sm mx-auto h-40 md:h-52 relative overflow-hidden flex justify-center items-center rounded-xl border border-white/[0.1] transition-all duration-500 hover:scale-105">
            <a
              href="https://drive.google.com/file/d/1kng1puLeySY6xIcscZJL0sN-O5Eraq0O/view?usp=sharing"
              target="_blank"
              className="transform hover:scale-105 transition-all duration-300 z-10"
            >
              <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow className="text-sm md:text-base" />}
                position="right"
              />
            </a>
          </div>

          {/* MacBook View */}
          <div className="w-full mx-auto">
            <div className="block min-h-[200px] w-full transform-gpu">
              <MacbookScroll
                src={`${process.env.NEXT_PUBLIC_URL || ""}/OJAS_JOSHI_RES.png`}
                showGradient={false}
                title="My Resume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
