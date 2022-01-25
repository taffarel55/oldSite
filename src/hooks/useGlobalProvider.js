import { useState } from "react";

import usePages from "../settings/pages";

const useGlobalProvider = () => {
  const pages = usePages();
  const [collapse, setCollapse] = useState(false);

  const getPage = (path) => pages.find((p) => p.link === path);
  const newPage = (path) => setPage(getPage(path));

  const [path, subPath] = window.location.hash.split("/").slice(1);
  const fullPath = Object.fromEntries(
    new Map([
      ["page", "/" + path],
      ["subpage", "/" + subPath],
    ])
  );

  const [page, setPage] = useState(getPage(fullPath?.page));

  console.log(fullPath, page);

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
