import React from "react";
import "../assets/StarBorder.css";
import { useTheme } from "../data/ThemeContext";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  const { theme } = useTheme();

  const glowColor =
    color ||
    (theme === "dark"
      ? "cyan" // cyan glow for dark
      : "magenta"); // indigo glow for light

  return (
    <Component
      className={`star-border-container ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 30%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 30%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="relative bg-[#f5e7f7] dark:bg-gray-900 border border-zinc-500/20 dark:border-zinc-300/9
               rounded-[15px] z-[1] px-5 py-3 flex items-center sm:space-x-6 shadow-2xs"
        // className="inner-content"
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
