"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedPointer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference"
        animate={{
          translateX: mousePosition.x,
          translateY: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
          mass: 0.1,
        }}
      >
        <motion.div
          className="relative -ml-4 -mt-4 h-8 w-8"
          animate={{
            scale: clicked ? 0.8 : 1,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white blur-[1px]" />
          <motion.div
            className="absolute inset-1 rounded-full bg-white"
            animate={{
              opacity: clicked ? 1 : 0.6,
            }}
          />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPointer;
