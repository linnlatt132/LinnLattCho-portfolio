import type React from "react";
import GlassCard from "./GlassCard";
import { Icons, type ProjectProps } from "./ProjectCard";
import GitHub from "../assets/icons/Skills/github.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import Globe from "../assets/icons/Skills/dark/GlobeDark.svg?react";
import GlobeWhite from "../assets/icons/Skills/GlobeWhite.svg?react";

const PrjPageCards: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
  langs,
}) => {
  return (
    <GlassCard className="p-3! sm:p-4! h-fit">
      <div className="flex flex-col items-center justify-center align-middle">
        <img
          className="w-full border-[0.5px] border-black/30 dark:border-white/50 h-[4%] object-cover rounded-xl"
          src={prjImg}
          alt={prjName}
        />
        <div className="flex flex-col items-start gap-3 mt-2 w-full">
          <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
            {prjName}
          </h1>
          <p className="sm:text-[12px] text-[10px] font-extralight leading-tight text-start">
            {prjDetail}
          </p>

          {/* sources */}
          {langs && (
            <div className="flex flex-wrap gap-2 mt-2 justify-start ">
              {langs.map((lang, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] text-[12px] bg-gray-500/90 text-white dark:text-black dark:bg-gray-200/70 rounded-md "
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* buttons */}
          <div className="flex w-full justify-between text-[14px] pt-2">
            <button className="flex items-center justify-center align-middle gap-2  border-[0.5px] w-22 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1">
              <span>
                <Icons IconLight={GitHub} IconDark={GitHubWhite} />
              </span>
              <span>Source</span>
            </button>

            <button className="flex items-center justify-center align-middle gap-2 border-[0.5px] w-22 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50  p-1">
              <span>
                <Icons IconLight={Globe} IconDark={GlobeWhite} />
              </span>
              <span>Live</span>
            </button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
export default PrjPageCards;
