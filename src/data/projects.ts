import Project from "../assets/images/porject.png";

export interface ProjectProps {
  prjImg?: string;
  prjName: string;
  prjDetail?: string;
  prjLongDetail?: string;
  gitLink?: string;
  liveLink?: string;
  langs?: string[];
  status?: string; // "In Progress", "Completed"
}

//mocket data

export const projects = [
  {
    title: "Project1",
    description:
      "Project1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    detaildes:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    img: Project,
    status: "In Progress",
    lang: ["React", "Typescript", "Framer-motion"],
    liveLink: "https://example.com/project1",
    gitLink: "https://example.com/project1.git",
  },
  {
    title: "Project2",
    description:
      "Project2:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur nihil voluptatibus debitis quam ut ex temporibus, corporis alias voluptates totam excepturi deleniti cum, eum nisi harum, voluptate dolore aperiam!",
    detaildes:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    status: "Completed",
    img: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
    lang: ["React", "Typescript", "Framer-motion"],
    gitLink: "https://example.com/project2.git",
    liveLink: "https://example.com/project2",
  },
  {
    title: "Project3",
    description:
      "Project3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sit. Omnis aliquid laborum vero, temporibus dicta nam neque sunt? Mollitia quod expedita assumenda debitis dolorum eos distinctio a repellendus at!",
    detaildes:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    status: "Completed",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Typescript", "Framer-motion", "GSAP", "react-router"],
    gitLink: "https://example.com/project3.git",
  },
  {
    title: "Project4",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    detaildes:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    status: "Completed",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Javascript", "GSAP", "Leaflet"],
    liveLink: "https://example.com/project4",
  },
];
