import "./index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const NotFound = () => {
  const post = useMarkdown("NotFound");
  return <Page>{post}</Page>;
};

export default NotFound;
