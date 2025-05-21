"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { theme } from "@/lib/theme";

const GridBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const activeSquares = useRef<Set<HTMLDivElement>>(new Set());
  const MAX_ACTIVE_SQUARES = 11; // Maximum number of glowing squares at once

  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    const colors = [
      theme.colors.background.glow.white,
      theme.colors.background.glow.purple,
      theme.colors.background.glow.blue,
      theme.colors.background.glow.pink,
    ];

    const createGlowingCells = () => {
      // Only create new squares if we're under the limit
      if (activeSquares.current.size >= MAX_ACTIVE_SQUARES) {
        return;
      }

      const numCells = Math.min(
        2, // Create max 2 squares at a time
        MAX_ACTIVE_SQUARES - activeSquares.current.size
      );

      for (let i = 0; i < numCells; i++) {
        const cell = document.createElement("div");
        const size = "4rem";
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];

        // Divide screen into sections to ensure better distribution
        const section = i % 4; // 4 sections of the screen
        const gridSize = 64;
        const maxX = Math.floor(window.innerWidth / gridSize);
        const maxY = Math.floor(window.innerHeight / gridSize);

        // Calculate position based on section
        const sectionWidth = maxX / 2;
        const sectionHeight = maxY / 2;
        const x =
          Math.floor((section % 2) * sectionWidth + Math.random() * sectionWidth) *
          gridSize;
        const y =
          Math.floor(
            Math.floor(section / 2) * sectionHeight + Math.random() * sectionHeight
          ) * gridSize;

        cell.style.cssText = `
          position: absolute;
          width: ${size};
          height: ${size};
          background: ${selectedColor};
          box-shadow: 0 0 50px ${selectedColor.replace(/[\d.]+\)$/, "0.25)")};
          filter: blur(2px);
          opacity: 0;
          transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          border-radius: 2px;
          left: ${x}px;
          top: ${y}px;
        `;

        gridElement.appendChild(cell);
        activeSquares.current.add(cell);

        requestAnimationFrame(() => {
          cell.style.opacity = "1";
          cell.style.transform = "scale(1.05)";

          setTimeout(() => {
            cell.style.opacity = "0";
            cell.style.transform = "scale(1)";
            setTimeout(() => {
              cell.remove();
              activeSquares.current.delete(cell);
            }, 2000);
          }, 2000);
        });
      }
    };

    const interval = setInterval(createGlowingCells, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      // Remove all active squares when component unmounts
      activeSquares.current.forEach((square) => {
        square.remove();
      });
      activeSquares.current.clear();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-[size:4rem_4rem]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme.colors.background.grid} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.colors.background.grid} 1px, transparent 1px)
          `,
        }}
      />
      <div ref={gridRef} className="absolute inset-0" />
    </div>
  );
};

export default GridBackground;
