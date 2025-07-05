import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Mail,
  PanelsTopLeft,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";

// Define nav items with label, icon, and path
const navItems = [
  { id: 1, label: "Home", icon: Home, path: "/" },
  { id: 2, label: "Email", icon: Mail, path: "/email" },
  { id: 3, label: "Projects", icon: PanelsTopLeft, path: "/projects" },
];

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Render each nav item
  const renderItem = (item: (typeof navItems)[0]) => {
    const { id, label, icon: Icon, path } = item;
    const isActive = location.pathname === path;

    return (
      <Link
        key={id}
        to={path}
        onClick={() => setMenuOpen(false)}
        className={`group flex flex-col items-center sm:flex-row
                    focus:outline-none
                    transition-all duration-200 
                    ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/90 dark:text-zinc-300 hover:opacity-75"
                    }`}
      >
        <Icon
          size={26}
          strokeWidth={isActive ? 1 : 0.5}
          className={`transition-transform ${
            isActive ? "scale-110" : "group-hover:scale-110"
          }`}
        />
        <span
          className={`hidden sm:inline text-[15px] ${
            isActive ? "font-normal" : "font-light"
          } ml-1`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav
      className="fixed bottom-3 left-1/2 -translate-x-1/2
                 bg-[#dfdff8] dark:bg-gray-900 border border-zinc-300
                 rounded-[15px] px-4 py-2 z-30 flex items-center"
    >
      {/* Desktop navbar */}
      <div className="hidden sm:flex space-x-6">{navItems.map(renderItem)}</div>

      {/* Mobile hamburger toggle */}
      <button
        className="sm:hidden block focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="absolute bottom-14 left-1/2 -translate-x-1/2
                     flex flex-col space-y-2
                     bg-gray-100 dark:bg-gray-900
                     border border-zinc-300 rounded-lg
                     p-3 shadow-lg"
        >
          {navItems.map(renderItem)}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
