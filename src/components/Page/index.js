import "./index.css";
import Header from "../Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import useMarkdown from "../../hooks/useMarkdown";
import { useState } from "react";
// import { ReactingButtons } from "../../components/ShareButtons";

const Page = ({ name, children }) => {
  const post = useMarkdown(name);
  const { collapse, page } = useGlobalContext();

  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // TOFIX: Melhorar como isso é feito!
  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className={`Page ${collapse ? "amplied" : ""}`}>
      <Header title={page.title} />
      <div className="Page__content">
        {children}
        {post}
        {/* {page.tags && <ReactingButtons />} */}
      </div>
      <div
        className={`scroll-back MenuBar__button ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
      ></div>
    </div>
  );
};

export default Page;
