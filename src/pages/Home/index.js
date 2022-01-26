import "./index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const Home = () => {
  const post = useMarkdown("Home");
  return <Page>{post}</Page>;
};

export default Home;
