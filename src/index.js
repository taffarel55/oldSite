import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./index.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <div className="App">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  root
);
