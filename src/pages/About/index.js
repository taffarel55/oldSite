import "./index.css";
import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const About = () => {
  const post = useMarkdown("About");

  return <Page>{post}</Page>;
};

export default About;
