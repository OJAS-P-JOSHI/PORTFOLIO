"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [trails, setTrails] = useState<Array<{
    id: number;
    x: number;
    y: number;
    angle: number;
    color: string;
  }>>([]);

  const springConfig = { damping: 20, stiffness: 900, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Theme colors matching your portfolio
  const colors = [
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-purple-600 via-pink-500 to-indigo-500",
    "from-blue-500 via-purple-500 to-pink-500"
  ];

  useEffect(() => {
    let frameId: number;
    let lastTrailTime = 0;

    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      const now = Date.now();
      if (now - lastTrailTime > 50) { // Adjust trail frequency
        const randomAngle = Math.random() * 360;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        setTrails(prev => [
          ...prev,
          {
            id: now,
            x: e.clientX,
            y: e.clientY,
            angle: randomAngle,
            color: randomColor
          }
        ].slice(-20)); // Keep last 20 trails

        lastTrailTime = now;
      }
    };

    const render = () => {
      setTrails(prev => 
        prev.filter(trail => Date.now() - trail.id < 500) // Remove old trails
      );
      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", updateCursor);
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Shooting star trails */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed z-[99998] pointer-events-none"
          initial={{ 
            opacity: 0.8,
            scale: 1,
            x: trail.x,
            y: trail.y,
            rotate: trail.angle 
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: trail.x + (Math.random() - 0.5) * 100,
            y: trail.y + (Math.random() - 0.5) * 100,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div 
            className={`h-3 w-3 rounded-full bg-gradient-to-r ${trail.color}`}
            style={{
              boxShadow: '0 0 10px 2px rgba(147, 51, 234, 0.3)',
              transform: 'scale(0.3)'
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed z-[99999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div 
          className="w-8 h-8 rounded-full relative"
          style={{
            background: 'rgba(147, 51, 234, 0.1)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 0 20px 4px rgba(147, 51, 234, 0.2)'
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimatedCursor;
