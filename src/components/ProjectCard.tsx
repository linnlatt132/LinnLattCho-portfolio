import { useTheme } from "../data/ThemeContext";
import GlassCard from "./GlassCard";
import type React from "react";
import GitHub from "../assets/icons/Skills/github.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import Globe from "../assets/icons/Skills/dark/GlobeDark.svg?react";
import GlobeWhite from "../assets/icons/Skills/GlobeWhite.svg?react";
import type { ProjectProps } from "../data/projects";


export interface BtnProps {
  IconLight: React.FC<React.SVGProps<SVGSVGElement>>;
  IconDark: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const Icons = ({ IconLight, IconDark }: BtnProps) => {
  const { theme } = useTheme();
  const Icon = theme === "dark" ? IconDark : IconLight;
  return <Icon className="w-5 h-5 p-[1px]" />;
};

const ProjectCard: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
  langs,
  gitLink,
  liveLink,
}) => {
  return (
    <GlassCard className="relative p-5! sm:p-7!">
      <div className="">
        <div className="flex sm:flex-row-reverse sm:h-90 h-100 flex-col items-center align-middle">
          <img
            className="sm:w-[55%] ml-3 border-[0.5px] border-black/30 dark:border-white/50 sm:h-full h-[40%] w-full object-cover rounded-xl"
            src={prjImg}
            alt={prjName}
          />
          <div className="flex flex-col sm:items-start items-center sm:p-0 pt-3 gap-2 sm:gap-3 sm:mt-0 mt-2 sm:mx-0 mx-4 w-full">
            <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
              {prjName}
            </h1>
            <p className="sm:text-[14px] text-[10px] font-mono font-extralight leading-tight text-justify sm:text-start">
              {prjDetail}
            </p>

            {/* sources */}
            {langs && (
              <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
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
            <div className="flex sm:gap-5 gap-20 text-[14px] pt-3">
              {gitLink && (
                <a
                  target="_blank"
                  href={gitLink}
                  className="flex items-center justify-center align-middle gap-2  border-[0.5px] w-22 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1"
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
                  className="flex items-center justify-center align-middle gap-2 border-[0.5px] w-22 hover:cursor-pointer  rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50  p-1"
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
      </div>
    </GlassCard>
  );
};
export default ProjectCard;
