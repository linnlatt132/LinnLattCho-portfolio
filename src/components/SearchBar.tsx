import { Filter, Search, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

// available languages for filtering
const availableLanguages = [
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Tailwind CSS",
  "C++",
  "Java",
  "GSAP",
  "Leaflet",
  "Framer Motion",
];

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
      <div className="relative flex-grow p-3 backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border-zinc-400/50 dark:border-zinc-300/30 border rounded-[15px] dark:text-white placeholder:text-zinc-700/50 dark:placeholder:text-zinc-400/70">
        <input
          type="text"
          placeholder="Search projects by title..."
          value={searchItem}
          onChange={handleSearchChange}
          className="text-sm md:text-[16px] focus:outline-none w-full"
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
          className={`flex items-center justify-center w-[50px] md:w-[60px] text-sm md:text-[16px] py-3 px-3 focus:ring-2 focus:ring-blue-500 dark:text-white backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border rounded-[15px] transition-colors ${
            isFilterActive
              ? "border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
              : "border-zinc-400/50 dark:border-zinc-300/30"
          }`}
          aria-label="Filter Projects"
        >
          <Filter className="h-5 w-5" />
          {/* Optional: Add a dot/count if filters are active */}
          {isFilterActive && (
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          )}
        </button>

        {/* The Filter Options List */}
        {isFilterOpen && (
          <div className="shadow-xl absolute right-0 top-full mt-1 w-[200px] backdrop-blur-[90px] bg-white/90 dark:bg-zinc-900/90 border border-zinc-400/50 dark:border-zinc-300/30 rounded-[15px] z-20 p-4 max-h-60 overflow-y-auto">
            <h3 className="text-sm font-semibold mb-3 border-b pb-2 border-zinc-400/50 dark:border-zinc-300/30">
              Filter by Language
            </h3>
            {availableLanguages.map((lang) => (
              <div
                key={lang}
                className="flex items-center space-x-2 py-1 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
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
                  className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-500 dark:bg-zinc-700"
                />
                <label
                  htmlFor={`lang-filter-${lang}`}
                  className="text-sm select-none"
                >
                  {lang}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sort Select */}
      <div className="relative">
        {/* The "Trigger" Button (Replaces <select>) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[110px] md:w-[140px] text-sm md:text-[16px] py-3 px-4 focus:ring-2 focus:ring-blue-500  dark:text-white
          backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border-zinc-400/50 dark:border-zinc-300/30 border rounded-[15px] "
        >
          {/* Display readable text based on value */}
          <span>{sortBy === "newest" ? "Newest" : "Oldest"}</span>
          <span className="ml-2 text-xs">▼</span>
        </button>

        {/* The "Options" List (Replaces <option>) */}
        {isOpen && (
          <div className="shadow-xs absolute right-0 top-full mt-1 w-full backdrop-blur-[90px]  bg-white/55  dark:bg-zinc-900/55 border border-zinc-400/50 dark:border-zinc-300/30 rounded-[15px] z-10 overflow-hidden">
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
