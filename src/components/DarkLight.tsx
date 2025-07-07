import { Sun, Moon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../data/ThemeContext";

const DarkLight = () => {
  const { theme, toggleTheme } = useTheme();
  const knobRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = window.matchMedia("(min-width: 640px)").matches;

  useEffect(() => {
    const isDark = theme === "dark";
    gsap.to(knobRef.current, {
      x: isDark ? (isSmallScreen ? 35 : 30) : 0, // Slide knob position
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className="w-[60px] sm:w-[70px] h-[32px] sm:h-[36px] bg-[#dfdff8] dark:bg-[#664381] rounded-full p-[2px] flex items-center justify-between relative cursor-pointer transition-colors"
    >
      {/* Sliding knob */}
      <div
        ref={knobRef}
        className="absolute top-[3px] left-[2px] w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] bg-white rounded-full shadow-md z-10"
      />

      {/* Icons */}
      <div className="z-20 flex justify-between items-center w-full px-1">
        <Sun
          size={16}
          className="text-[#6d84e4] dark:text-yellow-500 sm:size-5 transition-colors"
        />
        <Moon
          size={16}
          className="text-[#6d84e4] dark:text-yellow-500 sm:size-5 transition-colors"
        />
      </div>
    </div>
  );
};

export default DarkLight;
