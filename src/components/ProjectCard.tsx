import { useTheme } from "../data/ThemeContext";
import GlassCard from "./GlassCard";
import type React from "react";
import GitHub from "../assets/icons/Skills/github.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import Globe from "../assets/icons/Skills/dark/GlobeDark.svg?react";
import GlobeWhite from "../assets/icons/Skills/GlobeWhite.svg?react";

interface ProjectProps {
  prjImg: string;
  prjName: string;
  prjDetail: string;
  sourceLink?: string;
  extandLink?: string;
}
interface BtnProps {
  IconLight: React.FC<React.SVGProps<SVGSVGElement>>;
  IconDark: React.FC<React.SVGProps<SVGSVGElement>>;
}
const Icons = ({ IconLight, IconDark }: BtnProps) => {
  const { theme } = useTheme();
  const Icon = theme === "dark" ? IconDark : IconLight;
  return <Icon className="w-5 h-5 p-[1px]" />;
};

const ProjectCard: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
}) => {
  return (
    <GlassCard className="relative p-5! sm:p-7!">
      <div className="">
        <div className="flex sm:flex-row-reverse sm:h-90 h-100 flex-col items-center align-middle">
          <img
            className="sm:w-[55%] ml-3 border-[0.5px] border-black/30 dark:border-white/50 sm:h-full h-3/4 w-3/4 object-cover rounded-xl"
            src={prjImg}
            alt={prjName}
          />
          <div className="flex flex-col sm:items-start items-center sm:p-0 pt-3 gap-3 sm:mt-0 mt-2 sm:mx-0 mx-4 w-full">
            <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
              {prjName}
            </h1>
            <p className="sm:text-[14px] text-[12px] font-mono font-extralight leading-tight text-justify sm:text-start">
              {prjDetail}
            </p>
            <div className="flex sm:gap-5 gap-20 text-[14px] pt-5">
              <button className="flex items-center justify-center align-middle gap-2  border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1">
                <span>
                  <Icons IconLight={GitHub} IconDark={GitHubWhite} />
                </span>
                <span>Source</span>
              </button>

              <button className="flex items-center justify-center align-middle gap-2 border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50  p-1">
                <span>
                  <Icons IconLight={Globe} IconDark={GlobeWhite} />
                </span>
                <span>Live</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
export default ProjectCard;
