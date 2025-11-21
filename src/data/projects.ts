import clock from "../assets/images/prj/clock.png";
import todo from "../assets/images/prj/todo.png";
import weather from "../assets/images/prj/weather.png";
import generator from "../assets/images/prj/generator.png";

// available languages for filtering
export const availableLanguages = [
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Tailwind CSS",
  "Bootstrap",
  "C++",
  "Java",
  "GSAP",
  "React-Leaflet",
  "Framer Motion",
];

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
    title: "Myanmar Baydin Calculator",
    description:
      "A C++ console program that calculates the Myanmar zodiac (ဗေဒင်) based on the user's birth date, month, year, and day of the week.",
    status: "Completed",
    lang: ["C++"],
    gitLink: "https://github.com/linnlatt132/Myan_Badin",
    detailPoints: [
      "Calculates Myanmar year from Gregorian date considering month and day.",
      "Determines the corresponding zodiac (ဗေဒင်) based on day of the week and year remainder.",
      "Practiced arrays, loops, conditional statements, and user input in C++.",
    ],
  },
  {
    id: 2,
    title: "CoffeeHouseShop",
    description:
      "A Java console and GUI program that simulates a coffee shop ordering system. Users can select coffee, noodle, and juice items, enter quantities, and see the total cost.",
    status: "Completed",
    lang: ["Java", "Swing (JOptionPane)"],
    gitLink: "https://github.com/linnlatt132/CoffeeShop",
    detailPoints: [
      "Implements an ordering system for coffee, noodles, and juice with price calculation.",
      "Uses Java classes, objects, arrays, and methods for each product category.",
      "Practiced user input handling with JOptionPane dialogs and console output.",
      "Calculates total cost dynamically based on user input for multiple customers.",
    ],
  },
  {
    id: 3,
    title: "WeatherForecast",
    description:
      "A weather app that fetches current weather and 6-day forecast using the OpenWeatherMap API. Built with HTML, CSS, JavaScript, and Bootstrap.",
    status: "Completed",
    img: weather,
    lang: ["HTML", "CSS", "JavaScript", "Bootstrap", "Axios"],
    liveLink: "https://weather-forecast-ten-zeta.vercel.app/",
    gitLink: "https://github.com/linnlatt132/WeatherForecast",
    detailPoints: [
      "Displays current weather information including temperature, humidity, wind speed, and description.",
      "Fetches and displays a 6-day forecast with icons using OpenWeatherMap API.",
      "Implemented date and time formatting for last updated info.",
      "Handles user search input to fetch weather for any city.",
    ],
  },
  {
    id: 4,
    title: "Random Quote Generator",
    description:
      "A simple web app that displays a random motivational quote each time a button is clicked. Built with HTML, CSS, and JavaScript.",
    status: "Completed",
    img: generator,
    lang: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://random-quote-generator-virid-gamma.vercel.app/",
    gitLink: "https://github.com/linnlatt132/random-quote-generator",
    detailPoints: [
      "Displays a new random quote from a predefined array on button click.",
      "Practiced DOM manipulation and event handling in JavaScript.",
    ],
  },
  {
    id: 5,
    title: "Digital Clock & Stopwatch",
    description:
      "A web app that shows the current time and date with a live digital clock and includes a fully functional stopwatch with start, stop, and reset features. Built with HTML, CSS, and JavaScript.",
    status: "Completed",
    img: clock,
    lang: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    liveLink: "https://digital-clock-and-stopwatch.vercel.app/",
    gitLink: "https://github.com/linnlatt132/DigitalClock-and-Stopwatch",
    detailPoints: [
      "Displays live digital clock with formatted hours, minutes, seconds, AM/PM, day, and date.",
      "Stopwatch feature with start, pause, and reset functionality using JavaScript timers.",
      "Practiced DOM manipulation, setInterval, and event handling.",
      "Clean responsive layout using CSS and Font Awesome icons for buttons.",
    ],
  },
  {
    id: 6,
    title: "To Do List App",
    description:
      "A simple and responsive To-Do List web app that allows users to add, edit, delete, check, and manage daily tasks with persistent local storage. Built using HTML, CSS, and JavaScript.",
    status: "Completed",
    img: todo,
    lang: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    liveLink: "https://to-do-list-wheat-chi-28.vercel.app/",
    gitLink: "https://github.com/linnlatt132",
    detailPoints: [
      "Allows users to add, edit, delete, and mark tasks as completed with a clean and responsive UI.",
      "Separates active tasks and completed tasks into different sections with smooth interaction.",
      "Uses localStorage to save both active and completed tasks, ensuring data persistence on reload.",
    ],
  },
  {
    id: 7,
    title: "Sonique - Music Streaming App",
    description:
      "A Spotify-like music streaming app built with React, TypeScript, Tailwind CSS, Framer Motion, and Zustand. Includes user authentication, playlist management, and dynamic content rendering.",
    status: "Completed",
    img: "",
    lang: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Query",
      "useDebounce Hook",
    ],
    gitLink: "https://github.com/AungKyawPhyo1142/fe-sonique",
    detailPoints: [
      "Implemented secure user authentication with sign-in and login flows.",
      "Rendered dynamic content efficiently using React Query.",
      "Built reusable and responsive UI components styled with Tailwind CSS.",
      "Developed search functionality with debounce using a custom useDebounce hook for optimized performance.",
      "Implemented song upload, edit, delete, and play features, where only artist users can upload songs while general users can play them.",
    ],
  },
  {
    id: 8,
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React and TypeScript showcasing my projects, skills, certificates, experiences, and contact information. Includes modern animations, theme switching, and dynamic project filtering.",
    status: "Completed",
    img: "",
    lang: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Router",
      "GSAP",
      "Framer Motion",
    ],
    liveLink: "https://linn-latt-cho-portfolio.vercel.app/projects",
    gitLink: "https://github.com/linnlatt132/LinnLattCho-portfolio",
    detailPoints: [
      "Implemented page routing with React Router for Home, Projects, About Me, and Contact pages.",
      "Designed a modern, responsive layout with Tailwind CSS and CSS animations.",
      "Created dynamic project features including search, filter, and sort functionality.",
      "Integrated day/night theme switcher for enhanced user experience.",
      "Added smooth animations with GSAP and Framer Motion for interactive UI elements.",
    ],
  },
  {
    id: 9,
    title: "ReelSpot - Movie Discovery Platform",
    description:
      "A movie discovery web app built with Vite + React that fetches data from TMDB API. Users can browse popular, trending, and upcoming movies, search by title, filter by genre, and view detailed movie info.",
    status: "Completed",
    img: "",
    lang: [
      "React",
      "Vite",
      "JavaScript",
      "React Query",
      "Axios",
      "React Router DOM",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "useDebounce Hook",
      "TMDB API",
    ],
    liveLink: "https://reel-spot-kohl.vercel.app/",
    gitLink: "https://github.com/linnlatt132/react-movie-project",
    detailPoints: [
      "Integrated TMDB API using React Query for efficient data fetching, caching, and error handling.",
      "Implemented page routing with React Router and dynamic movie details pages with overview, release date, rating, and cast.",
      "Added debounced search and genre-based filtering using a custom useDebounce hook for smoother user experience.",
      "Designed responsive mobile-first layouts with Tailwind CSS and modern animations using Framer Motion and GSAP.",
      "Maintained clean, organized code with reusable components for scalability and maintainability.",
    ],
  },
  {
    id: 10,
    title: "Sentria - Disaster Info Platform",
    description:
      "A real-time disaster information platform with multilingual support, geolocation features, and API integration. Built using React, TypeScript, Tailwind CSS, i18next, and React-Leaflet.",
    status: "In Progress",
    img: "",
    lang: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Query",
      "i18next",
      "useDebounce Hook",
      "React-Leaflet",
      "Socket.io",
    ],
    gitLink: "https://github.com/AungKyawPhyo1142/fe-sentria",
    detailPoints: [
      "Built user authentication system with sign-in and login flows.",
      "Implemented Myanmar-English language toggle using i18next for multilingual support.",
      "Developed post upload system with favorites, real-time notifications, and geolocation features.",
      "Focused on UI design, API integration, and responsive component development.",
      "Optimized search and filter functionality using a custom useDebounce hook.",
    ],
  },
];
