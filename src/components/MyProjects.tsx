import ProjectCard from "./ProjectCard";
import Project from "../assets/images/porject.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsRight } from "lucide-react";

const projects = [
  {
    title: "Project1",
    description:
      "Project1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    img: Project,
  },
  {
    title: "Project2",
    description:
      "Project2:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur nihil voluptatibus debitis quam ut ex temporibus, corporis alias voluptates totam excepturi deleniti cum, eum nisi harum, voluptate dolore aperiam!",
    img: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
  },
  {
    title: "Project3",
    description:
      "Project3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sit. Omnis aliquid laborum vero, temporibus dicta nam neque sunt? Mollitia quod expedita assumenda debitis dolorum eos distinctio a repellendus at!",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
  },
  {
    title: "Project4",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
  },
];

const MyProjects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  return (
    <div ref={containerRef} className="relative px-4">
      <ul className="relative">
        {projects.map((p, index) => (
          <li
            className="project-card sticky z-10"
            key={index}
            style={{
              top: `${5 + index * 3}rem`,
            }}
          >
            <ProjectCard
              prjImg={p.img}
              prjName={p.title}
              prjDetail={p.description}
            />
          </li>
        ))}
      </ul>
      <div className="flex space-x-9">
        <p>Explore More Project</p> <ChevronsRight />
      </div>
    </div>
  );
};
export default MyProjects;
