import React, { useMemo, useState } from "react";
import DarkLight from "../components/DarkLight";
import PrjPageCards from "../components/PrjPageCards";
import { projects } from "../data/projects";

type SortOption = "latest" | "newest";
const ProjectPage = () => {
  const prjs = projects;

  // search
  const [searchItem, setSearchItem] = useState<string>("");

  // sort
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // filtering
  const filteredAndSortedPrjs = useMemo(() => {
    let filtered = prjs.filter((p) =>
      p.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    // Sorting logic
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });

    return filtered;
  }, [prjs, searchItem, sortBy]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortOption);
  };

  return (
    <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
      <div className="w-full max-w-75 sm:max-w-150 md:max-w-[600px] lg:max-w-[700px] sm:pt-20 sm:pb-10 pb-4 pt-20 flex flex-col ">
        <div className="bg-transparent flex flex-col sm:flex-row mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0 justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-3xl font-bold mb-4">All Projects</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Here you can explore all my projects in detail, showcasing the
              full breadth of my technical skills and development stack.
            </p>
          </div>
          <div>
            <DarkLight />
          </div>
        </div>

        {/* Search bar and filter which will sorted by latest and newest */}
        <div className="flex flex-row gap-4 mt-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search projects by title..."
            value={searchItem}
            onChange={handleSearchChange}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black/10 dark:border-gray-600 dark:text-white placeholder:text-zinc-700/50 dark:placeholder:text-zinc-400/70"
          />

          {/* Sort Select */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="py-3 pr-9 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black/10 dark:border-gray-600 dark:text-white appearance-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="latest">Oldest</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-3.5 ">
              ▼
            </span>
          </div>
        </div>

        {/* You can reuse ProjectCard list here */}
        <ul className="grid grid-cols-1 gap-5">
          {filteredAndSortedPrjs.length > 0 ? (
            filteredAndSortedPrjs.map((p, index) => (
              <li key={index}>
                <PrjPageCards
                  prjImg={p.img}
                  prjName={p.title}
                  prjDetail={p.description}
                  keyPoints={p.detailPoints}
                  langs={p.lang}
                  status={p.status}
                  gitLink={p.gitLink}
                  liveLink={p.liveLink}
                />
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
              No projects found matching your criteria.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
