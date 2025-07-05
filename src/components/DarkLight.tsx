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
      x: isDark ? 34 : 0, // slide knob to moon or sun
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className="w-[70px] h-[36px] bg-gray-300 dark:bg-purple-900 rounded-full p-1 flex items-center justify-between relative cursor-pointer transition-colors"
    >
      {/* Sliding knob */}
      <div
        ref={knobRef}
        className="absolute top-[4px] left-[4px] w-[28px] h-[28px] bg-white rounded-full shadow-md z-10"
      />

      {/* Icons */}
      <div className="z-20 flex justify-between items-center w-full px-1">
        <Sun size={18} className="text-yellow-400" />
        <Moon size={18} className="text-yellow-400" />
      </div>
    </div>
  );
};

export default DarkLight;
