import ProjectCard from "./ProjectCard";
import Project from "../assets/images/porject.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

export const projects = [
  {
    title: "Project1",
    description:
      "Project1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    img: Project,
    lang: ["React", "Typescript", "Framer-motion"],
  },
  {
    title: "Project2",
    description:
      "Project2:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur nihil voluptatibus debitis quam ut ex temporibus, corporis alias voluptates totam excepturi deleniti cum, eum nisi harum, voluptate dolore aperiam!",
    img: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
    lang: ["React", "Typescript", "Framer-motion"],
  },
  {
    title: "Project3",
    description:
      "Project3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sit. Omnis aliquid laborum vero, temporibus dicta nam neque sunt? Mollitia quod expedita assumenda debitis dolorum eos distinctio a repellendus at!",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Typescript", "Framer-motion", "GSAP", "react-router"],
  },
  {
    title: "Project4",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Javascript", "GSAP", "Leaflet"],
  },
];

const MyProjects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const exploreRef = useRef(null);

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
        A collection of personal and practice projects I've built with React and
        modern tools.
      </p>

      {/* Projects List */}
      <ul className="relative">
        {projects.map((p, index) => (
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
            />
          </li>
        ))}
      </ul>

      {/* Explore More */}
      <div
        ref={exploreRef}
        onClick={() => navigate("/projects")}
        className="flex space-x-5 items-center align-middle justify-center mt-9 font-mono text-[14px] sm:text-[16px] md:text-[20px] lg:text-2xl hover:cursor-pointer"
      >
        <p>Explore More Project</p> <ChevronsRight />
      </div>
    </div>
  );
};
export default MyProjects;
