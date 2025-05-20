"use client";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedBeam = () => {
  return (
    <div className="absolute left-[50%] top-0 bg-white w-[1px] h-full rounded-[9999px]">
      <AnimatePresence>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 3
          }}
          className="absolute z-20 h-full w-[1px] rounded-[9999px] top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-500"
        />
      </AnimatePresence>
    </div>
  );
};
