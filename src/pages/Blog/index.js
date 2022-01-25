import "./index.css";
import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const Blog = () => {
  const post = useMarkdown("Blog");

  return <Page>{post}</Page>;
};

export default Blog;
