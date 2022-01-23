import "./index.css";
import { BigCard } from "../../components/Cards";
import Page from "../../components/Page";
import Carousel from "../../components/Carousel";
import mauricio from "../../delete/mauricio.jpg";

const obj = {
  img: { src: mauricio, alt: "Maurício" },
  author: { src: mauricio, user: "taffarel55" },
  time: 25,
};

const Home = () => {
  return (
    <Page>
      <Carousel title={"Carousel Title"} qtd={16} obj={obj} />
      <BigCard details={obj} />
    </Page>
  );
};

export default Home;
