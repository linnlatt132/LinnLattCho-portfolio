import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

const MyProjects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const exploreRef = useRef(null);
  const latestProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 4);

  const navigate = useNavigate();

  useGSAP(
    // for explore
    () => {
      const tlExp = gsap.timeline({
        scrollTrigger: {
          trigger: exploreRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      });

      // Animate in from bottom to middle
      tlExp.fromTo(
        exploreRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          duration: 1 / 3, // First third of scroll
        }
      );

      // Stay still in center (no changes)
      tlExp.to(exploreRef.current, {
        y: 0,
        opacity: 1,
        duration: 1 / 3,
        ease: "none",
      });

      // Animate out to top
      tlExp.to(exploreRef.current, {
        y: -100,
        opacity: 0,
        duration: 1 / 3,
        ease: "none",
      });

      // === h2 scroll animation timeline ===
      const tlH2 = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%",
          end: "top 0%",
          scrub: true,
          // markers: true,
        },
      });

      tlH2
        .fromTo(
          titleRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 / 3, ease: "none" }
        )
        .to(titleRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "none",
        })
        .to(titleRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "none",
        });

      // === p (description) scroll animation timeline ===
      const tlDesc = gsap.timeline({
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 100%",
          end: "top 0%",
          scrub: true,
          // markers: true,
        },
      });

      tlDesc
        .fromTo(
          descRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 / 3, ease: "none" }
        )
        .to(descRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "none",
        })
        .to(descRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "none",
        });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    cards.forEach((card, index) => {
      gsap.to(card, {
        scale: 0.8 + 0.2 * (index / (cards.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top" + (15 + 35 * index),
          end: "bottom bottom",
          endTrigger: ".container",
          scrub: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return (
    <div ref={containerRef} className="container relative">
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-2xl sm:text-3xl md:4xl font-semibold text-center mb-4"
      >
        My Feature Projects
      </h2>

      {/* Description */}
      <p
        ref={descRef}
        className="text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mb-5 text-[16px] sm:text-[18px] md:text-[20px]"
      >
        A curated selection of my most recent work, built to solve real-world
        problems using modern web technologies and best coding practices.
      </p>

      {/* Projects List */}
      <ul className="relative">
        {latestProjects.map((p, index) => (
          <li
            className="project-card sticky z-10"
            key={index}
            style={{
              top: `${2 + index * 2}rem`,
            }}
          >
            <ProjectCard
              prjImg={p.img}
              prjName={p.title}
              prjDetail={p.description}
              langs={p.lang}
              gitLink={p.gitLink}
              liveLink={p.liveLink}
            />
          </li>
        ))}
      </ul>

      {/* Explore More */}
      <div
        ref={exploreRef}
        onClick={() => navigate("/projects")}
        className="flex space-x-5 items-center align-middle justify-center my-9 font-mono text-[14px] sm:text-[16px] md:text-[20px] lg:text-2xl hover:cursor-pointer"
      >
        <p>Explore More Project</p> <ChevronsRight />
      </div>
    </div>
  );
};
export default MyProjects;
