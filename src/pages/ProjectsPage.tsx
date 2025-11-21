import React, { useMemo, useState } from "react";
import DarkLight from "../components/DarkLight";
import PrjPageCards from "../components/PrjPageCards";
import { projects } from "../data/projects";
import SearchBar from "../components/SearchBar";
import { useTypewriter } from "../hooks/useTypewriter";

type SortOption = "latest" | "newest";
const ProjectPage = () => {
  const prjs = projects;
  const animatedTitle = useTypewriter("All Projects", 60);
  const animatedSubtitle = useTypewriter(
    "Here you can explore all my projects in detail, showcasing the full breadth of my technical skills and development stack.",
    20
  );

  // search
  const [searchItem, setSearchItem] = useState<string>("");

  // sort
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // filter lngs
  const [selectedLngs, setSelectedLngs] = useState<string[]>([]);

  // filter for lngs
  const handleLangFilterChange = (lng: string) => {
    setSelectedLngs((prevLngs) => {
      if (prevLngs.includes(lng)) {
        return prevLngs.filter((l) => l !== lng);
      } else {
        return [...prevLngs, lng];
      }
    });
  };

  // Combined filtering and sorting logic
  const filteredAndSortedPrjs = useMemo(() => {
    let filtered = prjs;

    // 1. Language Filtering
    if (selectedLngs.length > 0) {
      filtered = filtered.filter((p) =>
        p.lang.some((l) => selectedLngs.includes(l))
      );
    }

    // 2. Search Filtering (Title)
    if (searchItem) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    // 3. Sorting logic
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });

    return filtered;
  }, [prjs, searchItem, sortBy, selectedLngs]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };
  const handleSortChange = (value: string) => {
    setSortBy(value as SortOption);
  };

  return (
    <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
      <div className="w-full max-w-75 sm:max-w-150 md:max-w-[600px] lg:max-w-[700px] sm:pt-20 sm:pb-10 pb-4 pt-20 flex flex-col ">
        <div className="bg-transparent flex flex-col sm:flex-row mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0 justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-3xl font-bold mb-4">{animatedTitle}</h1>
            <p className="text-gray-500 dark:text-gray-300 text-center sm:text-left">
              {animatedSubtitle}
            </p>
          </div>
          <div>
            <DarkLight />
          </div>
        </div>

        {/* Search bar and filter which will sorted by latest and newest */}
        <SearchBar
          searchItem={searchItem}
          handleSearchChange={handleSearchChange}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
          selectedLngs={selectedLngs}
          handleLangFilterChange={handleLangFilterChange}
        />

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
