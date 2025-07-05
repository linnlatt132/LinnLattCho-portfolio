import { Sun, Moon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../data/useTheme";

const DarkLight = () => {
  const { theme, toggleTheme } = useTheme();
  const knobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDark = theme === "dark";

    gsap.to(knobRef.current, {
      x: isDark ? 34 : 0, // Slide knob position
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
        className="absolute top-[3px] left-[2px] w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] bg-white rounded-full shadow-md z-10"
      />

      {/* Icons */}
      <div className="z-20 flex justify-between items-center w-full px-1">
        <Sun size={16} className="text-yellow-500 sm:size-5" />
        <Moon size={16} className="text-yellow-500 sm:size-5" />
      </div>
    </div>
  );
};

export default DarkLight;
