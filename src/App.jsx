import "./App.css";
import "./components/style.css";
import Header from "./main/Header"
import Home from "./components/Home";
import Skills from "./components/Skills"
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Route , Routes } from "react-router";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/skills" element={<Skills />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/project" element={<Project />} />
        </Routes>
    </>
  );
}

export default App;