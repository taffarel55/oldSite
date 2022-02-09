import "./index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";
import Carousel from "../../components/Carousel";
import { BigCard } from "../../components/Cards";

const obj = {
  img: {
    src: "https://source.unsplash.com/random",
    alt: "Maurício",
  },
  author: {
    src: "https://avatars.githubusercontent.com/u/18634201?v=4",
    user: "taffarel55",
  },
  time: 25,
};

const Projects = () => {
  const post = useMarkdown("Projects");
  return (
    <Page>
      <Carousel title={"Carousel Title"} qtd={8} obj={obj} />
      <BigCard details={obj} />
      {post}
    </Page>
  );
};

export default Projects;
