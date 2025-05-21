import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Resume = () => {
  return (
    <section className="bg-white dark:bg-gray-800" id="resume">
      <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          Resume
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-3 py-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-gradient-to-r from-black/50 to-purple-900/10 backdrop-blur-sm mx-auto h-52 relative overflow-hidden flex justify-center items-center rounded-xl border border-white/[0.1] transition-all duration-500 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
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
              className="transform transition-transform hover:scale-105 duration-300"
            >
              <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="overflow-hidden dark:bg-transparent w-full max-w-[1400px] mx-auto">
            <div className="relative w-full [&>div>div]:!bg-white/30 [&>div>div]:!backdrop-blur-sm">
              <MacbookScroll
                src={`${process.env.NEXT_PUBLIC_URL || ''}/OJAS_JOSHI_RES.png`}
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
