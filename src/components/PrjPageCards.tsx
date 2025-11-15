import type React from "react";
import GlassCard from "./GlassCard";
import GitHub from "../assets/icons/Skills/github.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import Globe from "../assets/icons/Skills/dark/GlobeDark.svg?react";
import GlobeWhite from "../assets/icons/Skills/GlobeWhite.svg?react";
import type { ProjectProps } from "../data/projects";
import { Icons } from "./ProjectCard";

const PrjPageCards: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
  langs,
  gitLink,
  liveLink,
}) => {
  return (
    <GlassCard className="px-5! py-7! sm:px-6! sm:py-8! h-fit">
      <div className="flex flex-col items-center justify-center align-middle">
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

          {/* sources */}
          {langs && (
            <div className="flex flex-wrap gap-2 mt-2 justify-start ">
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
      </div>
    </GlassCard>
  );
};
export default PrjPageCards;
