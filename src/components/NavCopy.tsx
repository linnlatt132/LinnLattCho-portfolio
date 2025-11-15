import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Mail,
  PanelsTopLeft,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StarBorder from "./StarBorder";

gsap.registerPlugin(useGSAP);

/* nav items ------------------------------------------------------- */
const navItems = [
  { id: 1, label: "Home", icon: Home, path: "/" },
  { id: 2, label: "Contact Info", icon: Mail, path: "/#contant" },
  { id: 3, label: "Projects", icon: PanelsTopLeft, path: "/projects" },
];

/* component ------------------------------------------------------- */
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ added for cross-route scroll
  const [open, setOpen] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home"); // ✅ new

  /* mount the box *first*, then run the open animation -------------- */
  useEffect(() => {
    if (open) setShowBox(true);
  }, [open]);

  /* animate open / close ------------------------------------------- */
  useGSAP(
    () => {
      if (!boxRef.current) return;

      if (open) {
        gsap.fromTo(
          boxRef.current,
          { autoAlpha: 0, y: 20, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
        );
      } else {
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

  /* ✅ observe scroll position to update active link */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const contactEl = document.getElementById("contant");

    const onScroll = () => {
      if (!contactEl) return;

      const rect = contactEl.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > 100) {
        setActiveSection("contant");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial call
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* helper to render each nav link --------------------------------- */
  const renderItem = (item: (typeof navItems)[0]) => {
    const { id, label, icon: Icon, path } = item;
    const isHashLink = path.includes("#");
    const isActive =
      (path === "/" && activeSection === "home" && location.pathname === "/") ||
      (isHashLink && activeSection === "contant") ||
      (!isHashLink && location.pathname === path);

    const handleClick = async (e: React.MouseEvent) => {
      e.preventDefault();

      if (isHashLink) {
        const targetId = path.split("#")[1];

        if (location.pathname !== "/") {
          // ✅ navigate home first, then scroll
          navigate("/");
          // wait for home to mount
          setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }, 300);
        } else {
          const target = document.getElementById(targetId);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      } else if (path === "/" && location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
      }

      setOpen(false);
    };

    return (
      <Link
        key={id}
        to={path}
        onClick={handleClick}
        className={`group flex items-center gap-1 transition-all duration-200 
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
    <nav className="fixed bottom-10 w-full flex justify-center z-30">
      <StarBorder className="custom-class" speed="7s">
        {/* desktop */}
        <div className="hidden sm:flex space-x-6">
          {navItems.map(renderItem)}
        </div>

        {/* mobile menu toggle */}
        <button
          className="sm:hidden flex items-center gap-1 focus:outline-none hover:cursor-pointer cursor-default dark:text-white"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          <span className="text-sm font-medium">Menu</span>
        </button>
      </StarBorder>

      {/* mobile dropdown (animated) */}
      {showBox && (
        <div
          ref={boxRef}
          className="sm:hidden absolute bottom-14 left-1/2 -translate-x-1/2 z-50"
        >
          <StarBorder speed="7s" className="w-38">
            <div className="flex flex-col gap-2 text-center">
              {navItems.map(renderItem)}
            </div>
          </StarBorder>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
