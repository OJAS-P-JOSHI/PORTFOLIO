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
      cursorX.set(e.clientX - 20); // Adjusted from 16 to 20 (half of outer ring width)
      cursorY.set(e.clientY - 20); // Adjusted from 16 to 20 (half of outer ring height)
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .nav-item')) {
        isHovered.current = true;
      }
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, .nav-item, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as EventListener);
      el.addEventListener("mouseleave", handleMouseLeave as EventListener);
      // Add hover effect without scale
      if (el.classList.contains('nav-item')) {
        el.classList.add('transition-colors', 'duration-200');
      } else {
        el.classList.add('hover:scale-105', 'transition-transform', 'duration-200');
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
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
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "rgba(147, 51, 234, 0.05)",
            boxShadow: "0 0 15px 3px rgba(147, 51, 234, 0.3)",
          }}
          animate={{
            scale: isHovered.current ? 1.5 : 1,
          }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            style={{
              boxShadow: "0 0 10px 2px rgba(147, 51, 234, 0.5)",
            }}
            animate={{
              scale: isPressed.current ? 0.8 : 1,
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimatedPointer;
