import { useContext } from "react";
import PageContext from "../contexts/PageContext";

const usePageContext = () => {
  return useContext(PageContext);
};

export default usePageContext;
