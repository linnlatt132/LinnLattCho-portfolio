import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home";
import ReactLenis from "lenis/react";
import ProjectPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root className="relative">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <NavBar />
      <Footer />
    </ReactLenis>
  );
}

export default App;
