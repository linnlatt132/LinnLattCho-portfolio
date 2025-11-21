import Email from "../assets/icons/Email.svg?react";
import EmailWhite from "../assets/icons/EmailWhite.svg?react";
import Linkedin from "../assets/icons/Linkedin.svg?react";
import LinkedinWhite from "../assets/icons/LinkedinWhite.svg?react";
import Github from "../assets/icons/Github.svg?react";
import GithubWhite from "../assets/icons/GitHubWhite.svg?react";
import { ChevronsRight, Sparkle } from "lucide-react";
import GlassCard from "./GlassCard";
import type React from "react";
import { useTheme } from "../data/ThemeContext";
import LinnLattCho_Resume from "../assets/resume/LinnLattCho-Resume.pdf";

//links
interface SocialLinkProps {
  href: string;
  IconLight: React.FC<React.SVGProps<SVGSVGElement>>;
  IconDark: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const SocialLink = ({ href, IconLight, IconDark, label }: SocialLinkProps) => {
  const { theme } = useTheme();
  const Icon = theme === "dark" ? IconDark : IconLight;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-shine hover:opacity-60 transition-opacity"
    >
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 border border-zinc-600 dark:border-zinc-400 rounded-[10px] p-1" />
    </a>
  );
};

const AboutMe = () => {
  return (
    <GlassCard>
      {/* Title */}
      {/* <h1 className="text-[10px] sm:text-xs text-gray-400 font-light mb-1">
        About Me :
      </h1> */}

      {/* Role and Sparkle */}
      <div className="flex items-center flex-wrap gap-2  mb-4 sm:mb-5">
        <p className="text-xl sm:text-2xl font-semibold font-mono text-[#210635] dark:text-[#FFF9FB]">
          Front-end Developer
        </p>
        <Sparkle className="dark:text-[#eac097] text-[#6d84e4] animate-pulse" />
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

      <div className="flex align-middle items-center p-0 justify-between mt-5 ">
        {/* Social Icons */}
        <div className="flex flex-wrap space-x-2 items-center justify-center sm:justify-start ">
          <SocialLink
            href="https://github.com/linnlatt132"
            IconLight={Github}
            IconDark={GithubWhite}
            label="GitHub profile"
          />
          <SocialLink
            href="https://www.linkedin.com/in/linnlatt-cho-543745238/"
            IconLight={Linkedin}
            IconDark={LinkedinWhite}
            label="LinkedIn profile"
          />
          <SocialLink
            href="mailto:clinnlatt@gmail.com"
            IconLight={Email}
            IconDark={EmailWhite}
            label="Send email"
          />
        </div>
        <button className="font-light text-[10px] sm:text-[13px] hover:cursor-pointer hover:animate-none pr-3 hover:pr-0 hover:opacity-60 transition-all">
          <a
            className="flex space-x-2 align-middle items-center justify-center"
            href={LinnLattCho_Resume}
            download="LinnLattCho_Resume"
          >
            Download my CV from
            <ChevronsRight
              strokeWidth={1}
              className="w-5 h-5 sm:w-7 sm:h-7 sm:p-[1px] p-[2px]"
            />
          </a>
        </button>
      </div>
    </GlassCard>
  );
};

export default AboutMe;
