import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename="/bello-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
