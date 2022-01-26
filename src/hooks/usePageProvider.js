import { useState } from "react";

const usePageProvider = () => {
  const [page2, setPage2] = useState();
  return { page2, setPage2 };
};

export default usePageProvider;
