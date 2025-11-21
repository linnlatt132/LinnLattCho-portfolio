import { Search, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface SearchBarInterface {
  searchItem?: string;
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortBy?: string;
  handleSortChange?: (value: string) => void;
}

const SearchBar = ({
  searchItem,
  handleSearchChange,
  sortBy,
  handleSortChange,
}: SearchBarInterface) => {
  const [isOpen, setIsOpen] = useState(false);

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
