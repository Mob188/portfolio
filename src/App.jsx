import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
import { NotFound } from "./components/notFound/notFound";
import { Projects } from "./pages/ProjectsPage/Projects";
import { StockProject } from "./pages/StockProjectPage/StockProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stockProject" element={<StockProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
