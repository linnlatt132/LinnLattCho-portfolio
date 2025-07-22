import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Mail,
  PanelsTopLeft,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/* nav items ------------------------------------------------------- */
const navItems = [
  { id: 1, label: "Home", icon: Home, path: "/" },
  { id: 2, label: "Email", icon: Mail, path: "/email" },
  { id: 3, label: "Projects", icon: PanelsTopLeft, path: "/projects" },
];

/* component ------------------------------------------------------- */
const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false); // toggle state
  const [showBox, setShowBox] = useState(false); // render‑control
  const boxRef = useRef<HTMLDivElement>(null);

  /* mount the box *first*, then run the open animation -------------- */
  useEffect(() => {
    if (open) setShowBox(true);
  }, [open]);

  /* animate open / close ------------------------------------------- */
  useGSAP(
    () => {
      if (!boxRef.current) return;

      if (open) {
        // 💡 OPEN: from invisible → visible
        gsap.fromTo(
          boxRef.current,
          { autoAlpha: 0, y: 20, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
        );
      } else {
        // 💡 CLOSE: fade + drop, then unmount
        gsap.to(boxRef.current, {
          autoAlpha: 0,
          y: 20,
          scale: 0.95,
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => setShowBox(false),
        });
      }
    },
    { dependencies: [open] }
  );

  /* helper to render each nav link --------------------------------- */
  const renderItem = (item: (typeof navItems)[0]) => {
    const { id, label, icon: Icon, path } = item;
    const isActive = location.pathname === path;

    return (
      <Link
        key={id}
        to={path}
        onClick={() => setOpen(false)}
        className={`group flex items-center gap-1
                    transition-all duration-200 
                    ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/90 dark:text-zinc-300 hover:opacity-75"
                    }`}
      >
        <Icon
          size={24}
          strokeWidth={isActive ? 1 : 0.5}
          className={`transition-transform ${
            isActive ? "scale-110" : "group-hover:scale-110"
          }`}
        />
        <span className={`text-sm ${isActive ? "font-normal" : "font-light"}`}>
          {label}
        </span>
      </Link>
    );
  };

  /* JSX ------------------------------------------------------------- */
  return (
    <nav
      className="fixed bottom-10 left-1/2 -translate-x-1/2
                 bg-[#f7bbff] dark:bg-gray-900 border border-zinc-400 dark:border-zinc-300
                 rounded-[15px] px-4 py-2 z-30 flex items-center sm:space-x-6 shadow-2xs"
    >
      {/* desktop */}
      <div className="hidden sm:flex space-x-6">{navItems.map(renderItem)}</div>

      {/* mobile menu toggle */}
      <button
        className="sm:hidden flex items-center gap-1 focus:outline-none hover:cursor-pointer cursor-default"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        <span className="text-sm font-medium">Menu</span>
      </button>

      {/* mobile dropdown (animated) */}
      {showBox && (
        <div
          ref={boxRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2
                     flex flex-col gap-2
                     bg-[#dfdff8] dark:bg-gray-900
                     border border-zinc-300 rounded-lg
                     p-4 shadow-xl z-40"
        >
          {navItems.map(renderItem)}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
