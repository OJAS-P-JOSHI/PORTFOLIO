import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";

const Resume = () => {
  const highlights = [
    "Full Stack Development",
    "Problem Solving",
    "UI/UX Design",
    "Team Leadership",
  ];

  return (
    <section className="bg-white dark:bg-gray-800" id="resume">
      <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold py-12 md:py-20 text-center md:text-left px-4">
          Resume
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-3 py-6 md:py-10">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 px-4">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto px-4">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate software developer with a strong foundation in modern web
              technologies and a track record of delivering impactful solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-purple-500/10 dark:bg-purple-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full transform hover:scale-105 transition-transform"
                >
                  <HiSparkles className="text-purple-500 text-sm md:text-base" />
                  <span className="text-gray-800 dark:text-gray-200 text-sm md:text-base whitespace-nowrap">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="bg-gradient-to-r from-black/50 to-purple-900/10 backdrop-blur-sm mx-auto h-40 md:h-52 relative overflow-hidden flex justify-center items-center rounded-xl border border-white/[0.1] transition-all duration-500 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
            <div
              className={`absolute right-0 -bottom-3 w-full opacity-60 mix-blend-overlay`}
            >
              <Image
                src={"/footer-grid.svg"}
                alt={"grid"}
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="object-contain object-center w-full h-full"
              />
            </div>
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

          {/* MacBook Preview */}
          <div className="overflow-hidden dark:bg-transparent w-full max-w-[1400px] mx-auto relative">
            {/* Sticky Button Container */}
            <div className="sticky top-4 w-full flex justify-end px-2 md:px-4 z-30 pointer-events-none">
              <a
                href="https://drive.google.com/file/d/1kng1puLeySY6xIcscZJL0sN-O5Eraq0O/view"
                target="_blank"
                className="pointer-events-auto flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 hover:bg-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group"
              >
                <BsArrowsFullscreen className="text-white group-hover:text-purple-400 transition-colors text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium group-hover:text-purple-100">
                  View Full Resume
                </span>
              </a>
            </div>

            <div className="relative w-full [&>div>div]:!bg-white/30 [&>div>div]:!backdrop-blur-sm scale-[0.85] md:scale-100 -mt-10 md:mt-0">
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
