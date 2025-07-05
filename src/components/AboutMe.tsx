import Email from "../assets/icons/Email.svg?react";
import Linkedin from "../assets/icons/Linkedin.svg?react";
import Github from "../assets/icons/Github.svg?react";
import { Sparkle } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="p-2 sm:p-3 mt-5 border rounded-[15px] border-zinc-300">
      {/* Title */}
      <h1 className="text-[10px] sm:text-xs text-gray-400 font-light mb-1">
        About Me :
      </h1>

      {/* Role and Sparkle */}
      <div className="flex items-center flex-wrap gap-2">
        <p className="text-xl sm:text-2xl font-semibold font-mono text-[#210635] dark:text-[#FFF9FB]">
          Front-end Developer
        </p>
        <Sparkle className="text-[#eac097] animate-pulse" />
      </div>

      {/* Paragraph */}
      <p className="mt-2 text-[12px] sm:text-sm font-light font-mono leading-relaxed text-black dark:text-white">
        "I'm a{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          passionate front-end developer
        </span>{" "}
        who loves turning ideas into clean, interactive, and responsive web
        experiences."
        <br />I enjoy building web interfaces that are not only functional but
        also delightful to use. With a strong focus on{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          React
        </span>
        ,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          Tailwind CSS
        </span>
        , and modern JS tools, I build fast and elegant projects that reflect my
        curiosity and commitment to clean, maintainable code. I'm always
        learning and love challenging myself to create better with each build.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-4 mt-5">
        <a
          href="https://github.com/linnlatt132"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          <Github className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/linnlatt-cho-543745238/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
        <a
          href="mailto:clinnlatt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          <Email className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
