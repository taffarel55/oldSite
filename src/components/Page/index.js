import "./index.css";
import Header from "../Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageProvider } from "../../contexts/PageContext";

const Page = ({ children }) => {
  const { collapse } = useGlobalContext();

  const { pathname } = useLocation();

  useEffect(() => {
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <PageProvider>
      <div className={`Page ${collapse ? "amplied" : ""}`}>
        <Header title={"Título"} />
        <div className="Page__content">{children}</div>
      </div>
    </PageProvider>
  );
};

export default Page;
