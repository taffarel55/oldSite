import { createContext } from "react";
import usePageProvider from "../hooks/usePageProvider";

const PageContext = createContext();

export function PageProvider(props) {
  const pageProvider = usePageProvider();

  return (
    <PageContext.Provider value={pageProvider}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContext;
