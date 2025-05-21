"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-xl border border-white/10 items-center justify-center space-x-6 transition-all duration-300 hover:px-12 hover:py-6 group",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.125)"
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 nav-item transition-all duration-300",
              "hover:transform hover:scale-110 hover:-translate-y-1",
              "after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500",
              "after:transition-all after:duration-300 hover:after:w-full"
            )}
          >
            <span className="block sm:hidden transform group-hover:scale-110 transition-transform duration-300">
              {navItem.icon}
            </span>
            <span className="text-sm font-medium cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
