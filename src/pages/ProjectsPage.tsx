import { projects } from "../components/MyProjects";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  const prjs = projects;
  return (
    <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[700px] lg:max-w-[800px] sm:pt-20 sm:pb-10 pb-4 pt-20 flex flex-col space-y-10 sm:space-y-12 lg:space-y-20">
        <div className="bg-transparent flex flex-col sm:flex-row mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0 justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-3xl font-bold mb-4">All Projects</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Here you can explore all my projects in detail.
            </p>
          </div>
        </div>
        {/* You can reuse ProjectCard list here */}
        <ul className="">
          {prjs.map((p, index) => (
            <li key={index}>
              <ProjectCard
                prjImg={p.img}
                prjName={p.title}
                prjDetail={p.description}
                langs={p.lang}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
