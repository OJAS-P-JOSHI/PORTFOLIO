"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailingPoints, setTrailingPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrailingPoints(prev => {
        const newPoints = [...prev, { x: e.clientX, y: e.clientY }];
        return newPoints.slice(-5);
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.querySelectorAll("a, button").forEach(element => {
      element.addEventListener("mouseenter", handleHoverStart);
      element.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.querySelectorAll("a, button").forEach(element => {
        element.removeEventListener("mouseenter", handleHoverStart);
        element.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Trailing dots */}
      {trailingPoints.map((point, i) => (
        <motion.div
          key={i}
          className="fixed z-[9999] pointer-events-none w-1 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: point.x - 2,
            y: point.y - 2,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          transition: {
            type: "spring",
            mass: 0.1,
            stiffness: 800,
            damping: 20,
          },
        }}
      >
        <div className="relative">
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"
            animate={{
              scale: isHovering ? 1 : 0.5,
            }}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          
          {/* Main ring */}
          <motion.div
            className="w-8 h-8 rounded-full border border-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(4px)",
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              borderWidth: isHovering ? "1px" : "2px",
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            animate={{
              scale: isHovering ? 0 : 1,
            }}
            transition={{ duration: 0.15 }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedCursor;
