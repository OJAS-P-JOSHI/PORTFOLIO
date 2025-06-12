"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback, memo } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  maxStars?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

const ShootingStars: React.FC<ShootingStarsProps> = memo(({
  minSpeed = 2,
  maxSpeed = 5,
  minDelay = 2000,
  maxDelay = 4000,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 7,
  starHeight = 3,
  maxStars = 2,
  className
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrameRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const createStar = useCallback(() => {
    if (stars.length >= maxStars) return;

    const { x, y, angle } = getRandomStartPoint();
    const newStar: ShootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0
    };

    setStars(prev => [...prev, newStar]);

    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    timeoutRef.current = setTimeout(createStar, randomDelay);
  }, [stars.length, minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  const moveStars = useCallback(() => {
    setStars(prevStars => {
      return prevStars.filter(star => {
        const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
        const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
        const newDistance = star.distance + star.speed;
        const newScale = 1 + newDistance / 100;

        if (
          newX < -20 ||
          newX > window.innerWidth + 20 ||
          newY < -20 ||
          newY > window.innerHeight + 20
        ) {
          return false;
        }

        star.x = newX;
        star.y = newY;
        star.distance = newDistance;
        star.scale = newScale;
        return true;
      });
    });

    animationFrameRef.current = requestAnimationFrame(moveStars);
  }, []);

  useEffect(() => {
    createStar();
    animationFrameRef.current = requestAnimationFrame(moveStars);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [createStar, moveStars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {stars.map(star => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
});

ShootingStars.displayName = 'ShootingStars';

export default ShootingStars;
