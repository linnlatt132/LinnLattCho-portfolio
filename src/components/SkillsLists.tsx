import { useRef, type FC, type SVGProps } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skills } from "../data/skills";
import GlassCard from "./GlassCard";
import { useTheme } from "../data/ThemeContext";

gsap.registerPlugin(useGSAP);

type IconType = FC<SVGProps<SVGSVGElement>>;
export type SkillItem = {
  name: string;
  logo: IconType;
  darkLogo?: IconType;
};

const SkillsList = () => {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useGSAP(
    () => {
      // 1. get a matchMedia helper
      const mm = gsap.matchMedia();

      // 2. DESKTOP (≥ 640 px)  ───────────────────────────────────────
      mm.add("(min-width: 640px)", () => {
        gsap.fromTo(
          ".row1",
          { x: -50 },
          { x: 40, repeat: -1, yoyo: true, duration: 4, ease: "power1.inOut" }
        );
        gsap.fromTo(
          ".row2",
          { x: 50 },
          { x: -60, repeat: -1, yoyo: true, duration: 4, ease: "power1.inOut" }
        );
        gsap.fromTo(
          ".row3",
          { x: -50 },
          { x: 40, repeat: -1, yoyo: true, duration: 4, ease: "power1.inOut" }
        );
      });

      // 3. MOBILE (< 640 px)  ────────────────────────────────────────
      mm.add("(max-width: 639px)", () => {
        [".row1", ".row2", ".row3"].forEach((row, i) => {
          gsap.to(`${row} > div`, {
            y: i % 2 === 0 ? 6 : -6,
            scale: 0.95,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 1.6,
            stagger: { each: 0.15, from: "center", repeat: -1, yoyo: true },
          });
        });
      });

      // 4.  Let useGSAP clean up automatically when the component unmounts.
      //     Nothing to return here—gsap/react will revert all the tweens for us.
    },
    { scope: container, dependencies: [theme] }
  );

  /* -------------------- render helpers -------------------- */
  const renderRow = (rowClass: string, skillArray: typeof skills.frontend) => (
    <div
      className={`flex flex-wrap justify-center items-center gap-x-6 gap-y-3 py-2 overflow-hidden ${rowClass}`}
    >
      {skillArray.map(({ name, logo, darkLogo }) => {
        const IconComponent = theme === "dark" && darkLogo ? darkLogo : logo;

        return (
          <div
            key={`${name}-${theme}`} // force re-render of icon block
            className="flex font-mono items-center space-x-1 text-xs hover:scale-105 hover:cursor-default transition-transform"
          >
            <IconComponent
              key={`${name}-icon-${theme}`} // 🧠 this is crucial!
              data-theme={theme}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
            <span className="sm:text-[14px] text-[13px] dark:text-white">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );

  /* -------------------- component markup -------------------- */
  return (
    <GlassCard
      ref={container}
      key={theme}
      className="px-3"
      onMouseEnter={() => gsap.globalTimeline.pause()}
      onMouseLeave={() => gsap.globalTimeline.resume()}
    >
      {/* <h1 className="text-[10px] sm:text-xs text-gray-400 font-light mb-2 pt-3">
        Skills&nbsp;:
      </h1> */}
      {renderRow("row1", skills.frontend)}
      {renderRow("row2", skills.backend)}
      {renderRow("row3", skills.tools)}
    </GlassCard>
  );
};

export default SkillsList;
