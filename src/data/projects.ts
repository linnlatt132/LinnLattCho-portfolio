import Project from "../assets/images/porject.png";

export interface ProjectProps {
  prjImg?: string;
  prjName: string;
  prjDetail?: string;
  keyPoints?: string[];
  gitLink?: string;
  liveLink?: string;
  langs?: string[];
  status?: string; // "In Progress", "Completed"
}

//example data
export const projects = [
  {
    id: 1,
    title: "Project0",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    status: "Completed",
    lang: ["React", "Javascript", "GSAP", "Leaflet"],
    liveLink: "https://example.com/project4",
    detailPoints: [
      "Fact 1: Key feature implemented.",
      "Fact 2: Optimized for mobile responsiveness.",
      "Fact 3: Utilized a custom API endpoint.",
      "dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    ],
  },
  {
    id:2,
    title: "Project5",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    status: "Completed",
    lang: ["React", "Javascript", "GSAP", "Leaflet"],
    liveLink: "https://example.com/project4",
    detailPoints: [
      "Fact 1: Achieved 95% test coverage.",
      "Fact 2: Deployed using serverless functions.",
      "Fact 3: Integrated real-time data updates.",
      "Fact 4: Implemented dark mode theme.",
    ],
  },
  {
    id:3,
    title: "Project1",
    description:
      "Project1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi delectus nostrum beatae ad, omnis sapiente excepturi aspernatur quo officiis impedit aliquid earum quas suscipit mollitia accusantium ea necessitatibus.",
    img: Project,
    status: "In Progress",
    detailPoints: [
      "Fact1 ....",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat commodi",
      "Fact 3 .....",
    ], // Existing points are kept as they were.
    lang: ["React", "Typescript", "Framer-motion"],
    liveLink: "https://example.com/project1",
    gitLink: "https://example.com/project1.git",
  },
  {
    id:4,
    title: "Project2",
    description:
      "Project2:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur nihil voluptatibus debitis quam ut ex temporibus, corporis alias voluptates totam excepturi deleniti cum, eum nisi harum, voluptate dolore aperiam!",
    status: "Completed",
    img: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
    lang: ["React", "Typescript", "Framer-motion"],
    gitLink: "https://example.com/project2.git",
    liveLink: "https://example.com/project2",
    detailPoints: [
      "Fact 1: Reduced load time by 40%.",
      "Fact 2: Features a drag-and-drop interface.",
      "Fact 3: Secured with OAuth 2.0.",
      "Fact 4: Supports multiple user roles.",
      "Fact 5: Utilized Redux for state management.",
    ],
  },
  {
    id:5,
    title: "Project3",
    description:
      "Project3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sit. Omnis aliquid laborum vero, temporibus dicta nam neque sunt? Mollitia quod expedita assumenda debitis dolorum eos distinctio a repellendus at!",
    status: "Completed",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Typescript", "Framer-motion", "GSAP", "react-router"],
    gitLink: "https://example.com/project3.git",
    detailPoints: [
      "Fact 1: Implemented custom transition animations.",
      "Fact 2: Designed for accessibility (WCAG compliant).",
      "Fact 3: Integrated a third-party payment gateway.",
    ],
  },
  {
    id:6,
    title: "Project4",
    description:
      "Project4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
    status: "In Progress",
    img: "https://www.lifewire.com/thmb/3deu6vHFpwwP-WmW9RoYcgS2dus=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/is-spotify-premium-worth-it-01-1541f7e533634227be75b715184dd793.jpg",
    lang: ["React", "Javascript", "GSAP", "Leaflet"],
    liveLink: "https://example.com/project4",
    detailPoints: [
      "Fact 1: Used geospatial data visualization.",
      "dolor sit amet, consectetur adipisicing elit. Id at obcaecati consequuntur rerum cum repellendus saepe in dicta! Vel quod similique quae iusto pariatur adipisci iste porro quasi! Debitis, dolores?",
      "Fact 2: Built with modern JavaScript features.",
      "Fact 3: Successfully completed user acceptance testing.",
      "Fact 4: Managed project tasks using Jira.",
    ],
  },
];
