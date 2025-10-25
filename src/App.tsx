import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home";
import ReactLenis from "lenis/react";
import ProjectPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <ReactLenis root className="relative">
      <Background />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <NavBar />
      <Footer />
      <ScrollTopButton />
    </ReactLenis>
  );
}

export default App;
