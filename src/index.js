import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./index.css";
import About from "./pages/About";
import Blog, { SubPage } from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <div className="App">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<NotFound />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category/:slug" element={<SubPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  root
);
