import "./index.css";
import Header from "../Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useMarkdown from "../../hooks/useMarkdown";

const Page = ({ name, children }) => {
  const post = useMarkdown(name);
  const { collapse, page } = useGlobalContext();

  const { pathname } = useLocation();

  useEffect(() => {
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div className={`Page ${collapse ? "amplied" : ""}`}>
      <Header title={page.title} />
      <div className="Page__content">
        {children}
        {post}
      </div>
    </div>
  );
};

export default Page;
