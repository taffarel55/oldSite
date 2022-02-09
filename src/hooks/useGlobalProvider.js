import { useState } from "react";

import usePages from "../settings/pages";

const useGlobalProvider = () => {
  const pages = usePages();
  const [collapse, setCollapse] = useState(false);

  const [page, setPage] = useState("");

  return {
    collapse,
    setCollapse,
    pages,
    page,
    setPage,
  };
};

export default useGlobalProvider;
