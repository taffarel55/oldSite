import "./index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const Projects = () => {
  const post = useMarkdown("Projects");
  return <Page>{post}</Page>;
};

export default Projects;
