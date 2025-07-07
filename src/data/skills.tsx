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

// importing for dark theme
import HTMLWhite from "../assets/icons/Skills/dark/htmlWhite.svg?react";
import CSSWhite from "../assets/icons/Skills/dark/cssWhite.svg?react";
import TailwindWhite from "../assets/icons/Skills/dark/jsWhite.svg?react";
import JSWhite from "../assets/icons/Skills/dark/jsWhite.svg?react";
import TSWhite from "../assets/icons/Skills/dark/tsWhite.svg?react";
import ReactLogoWhite from "../assets/icons/Skills/dark/reactWhite.svg?react";
import SocketIOWhite from "../assets/icons/Skills/dark/socketIoWhite.svg?react";
import DatabaseWhite from "../assets/icons/Skills/dark/databaseWhite.svg?react";
import JavaWhite from "../assets/icons/Skills/dark/javaWhite.svg?react";
import CPPWhite from "../assets/icons/Skills/dark/cppWhite.svg?react";
import GitHubWhite from "../assets/icons/Skills/dark/gitHubWhite.svg?react";
import FigmaWhite from "../assets/icons/Skills/dark/figmaWhite.svg?react";
import LeafletWhite from "../assets/icons/Skills/dark/leafletWhite.svg?react";
import FramerMotionWhite from "../assets/icons/Skills/dark/framerWhite.svg?react";
import GsapWhite from "../assets/icons/Skills/dark/gsapWhite.svg?react";
import type { SkillItem } from "../components/SkillsLists";

export const skills: {
  frontend: SkillItem[];
  backend: SkillItem[];
  tools: SkillItem[];
} = {
  frontend: [
    { name: "HTML", logo: HTML, darkLogo: HTMLWhite },
    { name: "CSS", logo: CSS, darkLogo: CSSWhite },
    { name: "Tailwind", logo: Tailwind, darkLogo: TailwindWhite },
    { name: "JavaScript", logo: JS, darkLogo: JSWhite },
    { name: "TypeScript", logo: TS, darkLogo: TSWhite },
  ],
  backend: [
    { name: "React", logo: ReactLogo, darkLogo: ReactLogoWhite },
    { name: "Socket.IO", logo: WebSocket, darkLogo: SocketIOWhite },
    { name: "Database", logo: Database, darkLogo: DatabaseWhite },
    { name: "Java", logo: Java, darkLogo: JavaWhite },
    { name: "C++", logo: CPP, darkLogo: CPPWhite },
  ],
  tools: [
    { name: "GitHub", logo: GitHub, darkLogo: GitHubWhite },
    { name: "Figma", logo: Figma, darkLogo: FigmaWhite },
    { name: "Leaflet", logo: Leaflet, darkLogo: LeafletWhite },
    { name: "Framer Motion", logo: FramerMotion, darkLogo: FramerMotionWhite },
    { name: "GSAP", logo: Gsap, darkLogo: GsapWhite },
  ],
};
