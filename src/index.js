import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./index.css";
import { Blog, BlogCategory, BlogPost } from "./pages/Blog";
import Page from "./components/Page";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <div className="App">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Page name="Home" />} />
            <Route path="/projects" element={<Page name="Projects" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            <Route path="/blog/:category" element={<BlogCategory />} />
            <Route path="/contact" element={<Page name="Contact" />} />
            <Route path="/about" element={<Page name="About" />} />
            <Route path="*" element={<Page name="NotFound" />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  root
);
