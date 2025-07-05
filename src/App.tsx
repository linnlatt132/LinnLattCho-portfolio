import Background from "./components/Background";
import { useTheme } from "./data/useTheme";
import Home from "./pages/Home";

function App() {
  useTheme();
  return (
    <div className="relative">
      <Background />
      <Home />
    </div>
  );
}

export default App;
