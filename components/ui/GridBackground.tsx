"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useCallback, memo } from "react";
import { theme } from "@/lib/theme";

const GridBackground = memo(() => {
  const gridRef = useRef<HTMLDivElement>(null);
  const activeSquares = useRef<Set<HTMLDivElement>>(new Set());
  const MAX_ACTIVE_SQUARES = 8; // Reduced for better performance
  const animationFrameRef = useRef<number>();

  const createGlowingCells = useCallback(() => {
    const gridElement = gridRef.current;
    if (!gridElement || activeSquares.current.size >= MAX_ACTIVE_SQUARES) return;

    const colors = [
      theme.colors.background.glow.purple,
      theme.colors.background.glow.blue,
      theme.colors.background.glow.pink,
    ];

    const numCells = Math.min(
      1, // Create only 1 square at a time for better performance
      MAX_ACTIVE_SQUARES - activeSquares.current.size
    );

    for (let i = 0; i < numCells; i++) {
      const cell = document.createElement("div");
      const size = "3rem"; // Slightly smaller size
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];

      // Divide screen into sections to ensure better distribution
      const section = i % 4;
      const gridSize = 64;
      const maxX = Math.floor(window.innerWidth / gridSize);
      const maxY = Math.floor(window.innerHeight / gridSize);

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
        box-shadow: 0 0 30px ${selectedColor.replace(/[\d.]+\)$/, "0.2)")};
        filter: blur(1px);
        opacity: 0;
        transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        border-radius: 2px;
        left: ${x}px;
        top: ${y}px;
      `;

      gridElement.appendChild(cell);
      activeSquares.current.add(cell);

      requestAnimationFrame(() => {
        cell.style.opacity = "0.8";
        cell.style.transform = "scale(1.05)";

        setTimeout(() => {
          cell.style.opacity = "0";
          cell.style.transform = "scale(1)";
          setTimeout(() => {
            cell.remove();
            activeSquares.current.delete(cell);
          }, 1500);
        }, 1500);
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(createGlowingCells, 1500); // Increased interval

    return () => {
      clearInterval(interval);
      activeSquares.current.forEach((square) => {
        square.remove();
      });
      activeSquares.current.clear();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [createGlowingCells]);

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
});

GridBackground.displayName = 'GridBackground';

export default GridBackground;
