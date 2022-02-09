import "./index.css";
import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";
import Carousel from "../../components/Carousel";

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

const Blog = () => {
  const post = useMarkdown("Blog");

  return (
    <Page>
      <Carousel title={"Categoria 1"} qtd={8} obj={obj} />
      <Carousel title={"Categoria 2"} qtd={8} obj={obj} />
      <Carousel title={"Categoria 3"} qtd={8} obj={obj} />
      {post}
    </Page>
  );
};

export default Blog;
