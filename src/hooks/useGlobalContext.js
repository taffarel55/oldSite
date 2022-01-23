import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
