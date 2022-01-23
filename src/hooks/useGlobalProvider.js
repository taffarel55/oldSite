import { useState } from "react";

import usePages from "../settings/pages";

const useGlobalProvider = () => {
  const pages = usePages();
  const [collapse, setCollapse] = useState(false);

  const getPage = (path) => pages.find((p) => p.link === path);
  const newPage = (path) => setPage(getPage(path));

  const [page, setPage] = useState(getPage(window.location.pathname));

  return {
    collapse,
    setCollapse,
    page,
    setPage,
    pages,
    newPage,
  };
};

export default useGlobalProvider;
