import { useTheme } from "./data/useTheme";
import Home from "./pages/Home";

function App() {
  useTheme();
  return (
    <>
      <Home />
    </>
  );
}

export default App;
