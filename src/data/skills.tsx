// skills.ts
import HTML from "../assets/icons/Skills/html.svg?react";
import CSS from "../assets/icons/Skills/css.svg?react";
import Tailwind from "../assets/icons/Skills/tailwind.svg?react";
import JS from "../assets/icons/Skills/js.svg?react";
import TS from "../assets/icons/Skills/ts.svg?react";
import ReactLogo from "../assets/icons/Skills/react.svg?react";
import WebSocket from "../assets/icons/Skills/socketIo.svg?react";
import Database from "../assets/icons/Skills/database.svg?react";
import Java from "../assets/icons/Skills/java.svg?react";
import CPP from "../assets/icons/Skills/cDouble.svg?react";
import GitHub from "../assets/icons/Skills/github.svg?react";
import Figma from "../assets/icons/Skills/figma.svg?react";
import Leaflet from "../assets/icons/Skills/leaflet.svg?react";
import FramerMotion from "../assets/icons/Skills/framer-motion.svg?react";
import Gsap from "../assets/icons/Skills/gsap.svg?react";

export const skills = {
  frontend: [
    { name: "HTML", logo: HTML },
    { name: "CSS", logo: CSS },
    { name: "Tailwind", logo: Tailwind },
    { name: "JavaScript", logo: JS },
    { name: "TypeScript", logo: TS },
  ],
  backend: [
    { name: "React", logo: ReactLogo },
    { name: "Socket.IO", logo: WebSocket },
    { name: "Database", logo: Database },
    { name: "Java", logo: Java },
    { name: "C++", logo: CPP },
  ],
  tools: [
    { name: "GitHub", logo: GitHub },
    { name: "Figma", logo: Figma },
    { name: "Leaflet", logo: Leaflet },
    { name: "Framer Motion", logo: FramerMotion },
    { name: "GSAP", logo: Gsap },
  ],
};
