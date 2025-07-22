import Background from "./components/Background";
// import { useTheme } from "./data/ThemeContext";
import Home from "./pages/Home";
import ReactLenis from "lenis/react";

function App() {
  // useTheme();
  return (
    <ReactLenis root className="relative">
      <Background />
      <Home />
    </ReactLenis>
  );
}

export default App;
