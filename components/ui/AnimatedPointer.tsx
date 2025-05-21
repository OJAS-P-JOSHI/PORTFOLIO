"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedPointer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovered = useRef(false);
  const isPressed = useRef(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => (isPressed.current = true);
    const handleMouseUp = () => (isPressed.current = false);
    const handleMouseEnter = () => (isHovered.current = true);
    const handleMouseLeave = () => (isHovered.current = false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed z-[99999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="w-10 h-10 rounded-full"
          style={{
            backgroundColor: "rgba(147, 51, 234, 0.05)",
            boxShadow: "0 0 15px 3px rgba(147, 51, 234, 0.3)",
          }}
          animate={{
            scale: isHovered.current ? 1.5 : 1,
          }}
        />
        {/* Inner cursor */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{
            boxShadow: "0 0 10px 2px rgba(147, 51, 234, 0.5)",
          }}
          animate={{
            scale: isPressed.current ? 0.8 : 1,
          }}
        />
      </motion.div>
    </>
  );
};

export default AnimatedPointer;
