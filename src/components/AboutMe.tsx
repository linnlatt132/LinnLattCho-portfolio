import Email from "../assets/icons/Email.svg?react";
import Linkedin from "../assets/icons/Linkedin.svg?react";
import Github from "../assets/icons/Github.svg?react";
import { Sparkle } from "lucide-react";

const AboutMe = () => {
  return (
    <div className=" p-3 mt-5  border-1 rounded-[15px] border-black/50">
      <h1 className="text-[10px] text-gray-400 font-light ">About Me :</h1>
      <div className="flex items-center space-x-2">
        <p className="my-1 text-2xl font-semibold font-mono">
          Front-end Developer
        </p>
        <Sparkle className="text-yellow-900 animate-pulse" />
      </div>
      <p className="my-1 font-mono text-[12px] font-light">
        "I'm a{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          passionate front-end developer{" "}
        </span>
        who loves turning ideas into clean, interactive, and responsive web
        experiences." <br />I enjoy building web interfaces that are not only
        functional but also delightful to use. With a strong focus on{" "}
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

      <div className="flex items-center space-x-3 mt-5 justify-end">
        <a
          href="https://github.com/linnlatt132"
          target="_blank"
          className="hover:opacity-50"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/linnlatt-cho-543745238/"
          target="_blank"
          className="hover:opacity-50"
        >
          <Linkedin className="w-8 h-8" />
        </a>
        <a
          href="mailto:clinnlatt@gmail.com"
          target="_blank"
          className="hover:opacity-50"
        >
          <Email className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
