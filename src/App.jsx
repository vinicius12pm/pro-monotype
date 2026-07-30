import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
   
<MainLayout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</MainLayout>
  );
}

export default App;