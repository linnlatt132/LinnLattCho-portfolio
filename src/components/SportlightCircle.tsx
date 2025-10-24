"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "../data/ThemeContext";

type SpotlightCircleProps = {
  children?: React.ReactNode;
  size?: number;
  className?: string;
};

export const SpotlightCircle: React.FC<SpotlightCircleProps> = ({
  children,
  size = 70, // default to profile size
  className = "",
}) => {
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const spotlightColor = theme === "dark" ? "#07ab59" : "#a855f7"; // purple glow
  const bgColor = theme === "dark" ? "bg-zinc-300/30" : "bg-blue-200";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(position, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
      onUpdate: () => setPosition({ ...position }),
    });
  };

  const handleMouseEnter = () => {
    gsap.to(divRef.current, { opacity: 1, duration: 0.3 });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    gsap.to(divRef.current, { opacity: 0, duration: 0.4 });
    setOpacity(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-full flex items-center justify-center overflow-hidden ${bgColor} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {children}
      <div
        ref={divRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-full transition-opacity duration-300"
        style={{
          border: `3px solid ${spotlightColor}`,
          opacity,
          WebkitMaskImage: `radial-gradient(60px 60px at ${position.x}px ${position.y}px, black 35%, transparent 80%)`,
          maskImage: `radial-gradient(60px 60px at ${position.x}px ${position.y}px, black 35%, transparent 80%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
};
