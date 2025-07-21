import GlassCard from "./GlassCard";
import Project from "../assets/images/porject.png";
const ProjectCard = () => {
  return (
    <GlassCard className="flex p-5! sm:flex-row-reverse sm:h-90 h-100 flex-col items-center align-middle ">
      <img
        className="sm:w-1/2 border-[0.5px] border-black/30 dark:border-white/50 sm:h-full h-1/2 w-3/4  object-cover rounded-xl "
        src={Project}
      />
      <div className="flex flex-col sm:items-start items-center sm:pr-5 sm:p-0 pt-3 sm:gap-3 gap-2 sm:mt-0 mt-2 sm:mx-0 mx-3">
        <h1 className="sm:text-2xl sm:font-bold text-xl font-semibold">
          Name of Project
        </h1>
        <p className="sm:text-[14px] text-[12px] font-mono font-extralight leading-tight sm:text-start text-center">
          Detail: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Laudantium saepe ipsam atque nesciunt sapiente exercitationem laborum
          doloribus illo debitis corrupti deleniti praesentium aliquid aut,
          laboriosam repellat? Odio id rerum quae?
        </p>
        <div className="flex sm:gap-5 gap-50 text-[14px] mt-2 sm:mx-5 px-5">
          <button className="border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50 p-1">
            Source
          </button>
          <button className="border-[0.5px] w-22 hover:cursor-pointer hover:shadow-black/50 shadow-md rounded-[10px] border-black/50 hover:bg-black/5 hover:dark:bg-white/5 dark:border-white/50  p-1">
            Link
          </button>
        </div>
      </div>
    </GlassCard>
  );
};
export default ProjectCard;
