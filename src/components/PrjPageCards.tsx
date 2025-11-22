import type React from "react";
import GlassCard from "./GlassCard";
import GitHub from "../assets/icons/Skills/github.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import Globe from "../assets/icons/Skills/dark/GlobeDark.svg?react";
import GlobeWhite from "../assets/icons/Skills/GlobeWhite.svg?react";
import type { ProjectProps } from "../data/projects";
import { Icons } from "./ProjectCard";
import { Dot } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PrjPageCards: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
  status,
  keyPoints,
  langs,
  gitLink,
  liveLink,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    // Type-safe check: Ensure both elements are not null before proceeding
    if (!image || !container) {
      // Clean up any potential GSAP tweens if needed, though usually not required here
      gsap.killTweensOf(image);
      return;
    }

    // Set initial state (Good practice for smooth reversals)
    gsap.set(image, { scale: 1 });

    // Define the event handlers with explicit React MouseEvent types (optional, but good practice)
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    // Attach native DOM event listeners
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove listeners and kill tweens
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(image);
    };
  }, []);
  return (
    <GlassCard className="px-5! py-7! sm:px-6! sm:py-8! h-fit">
      {/* main container */}
      <div className="flex flex-col gap-4">
        {/* title and status */}
        <div className="justify-between flex flex-row align-middle items-center ">
          {/* title */}
          <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
            {prjName}
          </h1>
          {/* status */}
          <span className="border text-xs text-center  px-3 py-1 rounded-full font-extralight border-black/30 dark:border-white/20 text-black/80 dark:text-white/80 bg-white/60 dark:bg-black/10">
            {status}
          </span>
        </div>

        <div className="flex flex-col gap-3 ">
          {/* img if exist */}
          {prjImg && (
            <div
              ref={containerRef}
              className="image-container w-full h-[4%] mb-2 rounded-xl overflow-hidden border-[0.5px] border-black/30 dark:border-white/50"
            >
              <img
                ref={imageRef}
                className="w-full h-full max-h-80 object-cover"
                src={prjImg}
                alt={prjName}
              />
            </div>
          )}
          {/* des */}
          <p className="sm:text-[16px] text-[12px]  text-start">{prjDetail}</p>
          {/* key points */}
          <ul className="flex flex-col space-y-3">
            {keyPoints?.map((k, i) => (
              <li key={i} className="flex flex-row gap-2">
                <Dot size={20} className="flex-shrink-0" />
                <span className="sm:text-[16px] text-[12px] ">{k}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* lngs */}
        {langs && (
          <div className="flex flex-wrap gap-3 mt-2 justify-start ">
            {langs.map((lang, i) => (
              <span
                key={i}
                className="px-2 py-[2px] text-[12px] sm:text-[16px] bg-gray-500/90 text-white dark:text-black dark:bg-gray-200/70 rounded-md "
              >
                {lang}
              </span>
            ))}
          </div>
        )}
        {/* buttons */}
        <div className="flex w-full space-x-10 text-[14px] sm:text-[16px] pt-2 pb-3 items-center align-middle">
          {gitLink && (
            <a
              target="_blank"
              href={gitLink}
              className="flex text-[14px] sm:text-[16px] items-center justify-center align-middle gap-2  border-[0.5px] w-22 sm:w-26 px-6 py-2 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1"
            >
              <span>
                <Icons IconLight={GitHub} IconDark={GitHubWhite} />
              </span>
              <span>Source</span>
            </a>
          )}

          {liveLink && (
            <a
              target="_blank"
              href={liveLink}
              className="flex text-[14px] sm:text-[16px] items-center justify-center align-middle gap-2  border-[0.5px] w-22 sm:w-26 px-6 py-2 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1"
            >
              <span>
                <Icons IconLight={Globe} IconDark={GlobeWhite} />
              </span>
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
export default PrjPageCards;

{
  /* <div className="flex flex-col items-center justify-center align-middle">
  <img
    className="w-full border-[0.5px] border-black/30 dark:border-white/50 h-[4%] object-cover rounded-xl"
    src={prjImg}
    alt={prjName}
  />
  <div className="flex flex-col items-start gap-3 mt-2 w-full px-1">
    <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
      {prjName}
    </h1>
    <p className="sm:text-[16px] text-[12px] font-extralight leading-tight text-start">
      {prjDetail}
    </p>

    {/* sources */
}
//     {langs && (
//       <div className="flex flex-wrap gap-2 mt-2 justify-start ">
//         {langs.map((lang, i) => (
//           <span
//             key={i}
//             className="px-2 py-[2px] text-[12px] sm:text-[16px] bg-gray-500/90 text-white dark:text-black dark:bg-gray-200/70 rounded-md "
//           >
//             {lang}
//           </span>
//         ))}
//       </div>
//     )}

//     {/* buttons */}
//     <div className="flex w-full space-x-10 text-[14px] sm:text-[16px] pt-2 pb-3 items-center align-middle">
//       {gitLink && (
//         <a
//           target="_blank"
//           href={gitLink}
//           className="flex text-[14px] sm:text-[16px] items-center justify-center align-middle gap-2  border-[0.5px] w-22 sm:w-26 px-6 py-2 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1"
//         >
//           <span>
//             <Icons IconLight={GitHub} IconDark={GitHubWhite} />
//           </span>
//           <span>Source</span>
//         </a>
//       )}

//       {liveLink && (
//         <a
//           target="_blank"
//           href={liveLink}
//           className="flex text-[14px] sm:text-[16px] items-center justify-center align-middle gap-2  border-[0.5px] w-22 sm:w-26 px-6 py-2 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1"
//         >
//           <span>
//             <Icons IconLight={Globe} IconDark={GlobeWhite} />
//           </span>
//           <span>Live</span>
//         </a>
//       )}
//     </div>
//   </div>
// </div>; */}
