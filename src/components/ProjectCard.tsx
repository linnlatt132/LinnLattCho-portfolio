import GlassCard from "./GlassCard";
// import Project from "../assets/images/porject.png";
import type React from "react";

interface ProjectProps {
  prjImg: string;
  prjName: string;
  prjDetail: string;
  sourceLink?: string;
  extandLink?: string;
}
const ProjectCard: React.FC<ProjectProps> = ({
  prjImg,
  prjName,
  prjDetail,
}) => {
  return (
    <GlassCard className="relative p-5! sm:p-7!">
      <div className="" >
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
              <button className="border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1">
                Source
              </button>
              <button className="border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50  p-1">
                Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
export default ProjectCard;
