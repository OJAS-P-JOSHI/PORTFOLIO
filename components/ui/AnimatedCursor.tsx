"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const AnimatedCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach(element => {
      element.addEventListener("mouseenter", handleHoverStart);
      element.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach(element => {
        element.removeEventListener("mouseenter", handleHoverStart);
        element.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      style={{
        left: 0,
        top: 0,
        position: "fixed",
        zIndex: 9999,
        pointerEvents: "none",
        x: cursorX,
        y: cursorY,
        mixBlendMode: "difference"
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
    </motion.div>
  );
};

export default AnimatedCursor;
