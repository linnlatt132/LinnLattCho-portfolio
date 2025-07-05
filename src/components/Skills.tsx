import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skills } from "../data/skills";

gsap.registerPlugin(useGSAP);

const Skills = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".row1",
        { x: -50 },
        {
          x: 40,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        ".row2",
        { x: 50 },
        {
          x: -60,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        ".row3",
        { x: -50 },
        {
          x: 40,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    },
    { scope: container }
  );

  const renderRow = (rowClass: string, skillArray: typeof skills.frontend) => (
    <div
      className={`flex gap-10 py-1 items-center justify-center overflow-hidden ${rowClass}`}
    >
      {skillArray.map(({ name, logo: Logo }) => (
        <div
          key={name}
          className="flex items-center space-x-1 text-sm text-black hover:scale-105 hover:cursor-default transition-transform"
        >
          <Logo className="w-8 h-8" />
          <span className="text-[14px]">{name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={container}
      className="mt-3 border rounded-[15px] border-black/50 bg-white pb-3"
      //   onMouseEnter={() => gsap.globalTimeline.pause()}
      //   onMouseLeave={() => gsap.globalTimeline.resume()}
    >
      <h1 className="text-[10px] text-gray-400 font-light mb-4 pt-3 pl-3">
        Skills :
      </h1>
      {renderRow("row1", skills.frontend)}
      {renderRow("row2", skills.backend)}
      {renderRow("row3", skills.tools)}
    </div>
  );
};

export default Skills;
