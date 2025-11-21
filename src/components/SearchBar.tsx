import { Filter, Search, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { availableLanguages } from "../data/projects";

interface SearchBarInterface {
  searchItem?: string;
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortBy?: string;
  handleSortChange?: (value: string) => void;
  selectedLngs?: string[];
  handleLangFilterChange?: (lng: string) => void;
}

const SearchBar = ({
  searchItem,
  handleSearchChange,
  sortBy,
  handleSortChange,
  selectedLngs = [],
  handleLangFilterChange,
}: SearchBarInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Search");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 460) {
        setPlaceholderText("Search...");
      } else {
        setPlaceholderText("Search projects by title...");
      }
    };
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, [placeholderText]);

  const onOptionClick = (value: string) => {
    if (handleSortChange) handleSortChange(value);
    setIsOpen(false);
  };

  //   clear search
  const clearSearch = () => {
    if (handleSearchChange) {
      handleSearchChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const isSearchActive = searchItem && searchItem.length > 0;
  const isFilterActive = selectedLngs.length > 0;

  return (
    <div className="flex flex-row gap-2 md:gap-4 mt-4 justify-center">
      {/* Search Input */}
      <div className="relative flex-grow px-3 items-center align-middle backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border-zinc-400/50 dark:border-zinc-300/30 border rounded-[15px] dark:text-white placeholder:text-zinc-700/50 dark:placeholder:text-zinc-400/70">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchItem}
          onChange={handleSearchChange}
          className="text-sm md:text-[16px] absolute top-3 focus:outline-none w-full"
        />
        {/* Icon Container */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
          {isSearchActive ? (
            <button
              onClick={clearSearch}
              className="p-1 text-zinc-700 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors hover:cursor-pointer"
              aria-label="Clear Search"
            >
              <X className="h-5 w-5" />
            </button>
          ) : (
            <Search className="h-5 w-5 text-zinc-700 dark:text-zinc-400 hover:cursor-pointer" />
          )}
        </div>
      </div>

      {/* Filter */}
      <div className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center justify-center w-[50px] md:w-[60px] text-xs md:text-[16px] py-3 px-0 md:px-3 focus:outline-none dark:text-white backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border rounded-[15px] transition-colors ${
            isFilterActive
              ? "border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
              : "border-zinc-400/50 dark:border-zinc-300/30"
          }`}
          aria-label="Filter Projects"
        >
          <Filter className="md:h-5 md:w-5 h-4 w-4" />
          {/* a dot/count if filters are active */}
          {isFilterActive && (
            <span className="absolute top-3 right-3 h-1 w-1 md:h-[6px] md:w-[6px] bg-red-500 rounded-full"></span>
          )}
        </button>

        {/* The Filter Options List */}
        {isFilterOpen && (
          <div className="shadow-xl absolute right-0 top-full mt-1 w-[100px] md:w-[180px] lg:w-[200px] backdrop-blur-[90px]  bg-white/55  dark:bg-zinc-900/55 border border-zinc-400/50 dark:border-zinc-300/30  rounded-md z-20 p-0 overflow-hidden">
            {/* FIXED HEADER */}
            <div className="sticky top-0 z-30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-[90px] px-2 md:px-4 pt-2 pb-3 border-b border-zinc-400/50 dark:border-zinc-300/30 flex items-center justify-between">
              <h3 className="text-xs md:text-sm font-semibold">Filter</h3>

              {/* Clear Button */}
              {selectedLngs.length > 0 && (
                <button
                  onClick={() => {
                    const list = document.getElementById("langList");
                    if (list) {
                      list.classList.add("fade-out");

                      setTimeout(() => {
                        selectedLngs.forEach(
                          (lng) =>
                            handleLangFilterChange &&
                            handleLangFilterChange(lng)
                        );
                        list.classList.remove("fade-out");
                        list.classList.add("fade-in");

                        setTimeout(() => {
                          list.classList.remove("fade-in");
                        }, 300);
                      }, 300);
                    }
                  }}
                  className="text-[10px] md:text-xs text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* SCROLLABLE LIST ONLY */}
            <div
              id="langList"
              className="custom-scroll max-h-48 overflow-y-scroll px-2 md:px-4 py-2 transition-all duration-300"
            >
              {availableLanguages.map((lang) => (
                <div
                  key={lang}
                  className="flex items-center space-x-1 md:space-x-2 py-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() =>
                    handleLangFilterChange && handleLangFilterChange(lang)
                  }
                >
                  <input
                    type="checkbox"
                    id={`lang-filter-${lang}`}
                    checked={selectedLngs.includes(lang)}
                    onChange={() =>
                      handleLangFilterChange && handleLangFilterChange(lang)
                    }
                    className="form-checkbox h-2 w-2 md:h-3 lg:h-4 md:w-3 lg:w-4 text-blue-600 rounded border-gray-300 dark:border-gray-500 dark:bg-zinc-700"
                  />
                  <label
                    htmlFor={`lang-filter-${lang}`}
                    className="text-xs md:text-sm select-none"
                  >
                    {lang}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sort Select */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[80px] md:w-[140px] text-xs md:text-[16px] py-3 px-3 md:px-4  focus:outline-none  dark:text-white
          backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border-zinc-400/50 dark:border-zinc-300/30 border rounded-[15px] "
        >
          {/* Display readable text based on value */}
          <span>{sortBy === "newest" ? "Newest" : "Oldest"}</span>
          <span className="ml-0 md:ml-2 text-xs">▼</span>
        </button>

        {/* The "Options" List */}
        {isOpen && (
          <div className="shadow-xs absolute right-0 top-full mt-1 w-full backdrop-blur-[90px]  bg-white/55  dark:bg-zinc-900/55 border border-zinc-400/50 dark:border-zinc-300/30 rounded-md z-10 overflow-hidden">
            <div
              onClick={() => onOptionClick("newest")}
              className="cursor-pointer px-4 py-3 text-sm md:text-[16px] text-zinc-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-zinc-600/50 transition-colors"
            >
              Newest
            </div>
            <div
              onClick={() => onOptionClick("latest")}
              className="cursor-pointer px-4 py-3 text-sm md:text-[16px] text-zinc-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-zinc-600/50 transition-colors"
            >
              Oldest
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
