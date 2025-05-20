import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Resume = () => {
  return (
    <section className="mt-32" id="resume">
      <div className="max-w-6xl  bg-black-200 mx-auto h-48 relative overflow-hidden flex justify-center items-center rounded-md border border-white/[0.1]">
        <div className={`absolute right-0 -bottom-3 w-full opacity-80`}>
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
        >
          <MagicButton
            title="Download Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="overflow-hidden dark:bg-transparent bg-white w-full">
        <MacbookScroll src={`/ojas1.png`} showGradient={false} />
      </div>
    </section>
  );
};

export default Resume;
