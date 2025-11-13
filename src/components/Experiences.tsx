import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import GlassCard from "./GlassCard";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Under mentorship of Aung Kyaw Phyo",
    duration: "Mar 2025 - Present",
    description:
      "Collaborated in real-world group projects under professional mentorship of Aung Kyaw Phyo, Senior Full-Stack Developer at WeStride Institute of Technology	(Thailand) , focusing on UI design, API integration, and responsive component development. Built Sonique (Spotify-like app) with authentication, playlists, and dynamic content, and Sentria (disaster information platform) with multilingual support, geolocation, and real-time features using React, TypeScript, and Tailwind CSS.",
  },
  {
    role: "Backend Developer Intern",
    company: "Ovaspace Company",
    duration: "Dec 2024 - Feb 2025",
    description:
      "Assisted in developing and maintaining backend APIs using C# and .NET. Wrote optimized SQL queries in SQL Server and collaborated through Git version control. Supported backend debugging, testing, and performance improvements, gaining hands-on experience in API integration and database management.",
  },
];

const Experiences = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tlH2 = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 0%",
        scrub: true,
      },
    });
    tlH2
      .fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 / 3, ease: "none" }
      )
      .to(titleRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 5,
        ease: "none",
      })
      .to(titleRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "none",
      });
  });

  useGSAP(() => {
    const elements = gsap.utils.toArray(".exp-card");
    elements.forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        rotateX: -10,
        scale: 0.95,
        transformOrigin: "center top",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top 60%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      <h2
        ref={titleRef}
        className="text-2xl sm:text-3xl md:4xl font-semibold text-center my-4"
      >
        My Experiences
      </h2>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="exp-card"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <GlassCard className="my-0.5! p-6! font-mono">
            <h3 className="text-lg font-medium">{exp.role}</h3>
            <p className="text-sm text-black/70 dark:text-zinc-400">
              {exp.company} • {exp.duration}
            </p>
            <p className="mt-3 text-black/50 dark:text-zinc-300 text-sm leading-relaxed">
              {exp.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
};

export default Experiences;
