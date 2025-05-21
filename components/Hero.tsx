"use client";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";
import ShootingStars from "./ui/ShootingStars";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const words = ["innovative", "scalable", "intelligent", "modern"];

  return (
    <div ref={ref} className="relative min-h-screen pt-24 antialiased">
      {/* Background effects */}
      <div>
        <Spotlight
          className="-top-40 left-0 md:-left-20 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw]"
          fill="rgba(125, 125, 255, 0.5)"
        />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 px-4"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center space-y-8"
          >
            {/* Title */}
            <h1 className="text-4xl font-medium tracking-tight text-center">
              <span className="block text-neutral-500 dark:text-neutral-400">
                Building <FlipWords words={words} /> solutions with
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative block text-6xl md:text-[8rem] font-bold mt-4 leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-600 to-pink-500"
              >
                OJAS P JOSHI
              </motion.span>
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <p className="p-6 text-lg md:text-xl text-center text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Final-year B.Tech student in Computer Science specializing in{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  AI/ML
                </span>
                . Building scalable applications with{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  MERN stack
                </span>
                . Exploring fintech solutions and personal finance tools. Passionate about{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  AI-driven innovation
                </span>
                .
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ShootingStars />
    </div>
  );
};

export default Hero;
