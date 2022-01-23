import "./index.css";
import Header from "../Header";
import { BigCard } from "../Cards";
import Carousel from "../Carousel";
import mauricio from "../../delete/mauricio.jpg";

const obj = {
  img: { src: mauricio, alt: "Maurício" },
  author: { src: mauricio, user: "taffarel55" },
  time: 25,
};

const Page = () => (
  <div className="Page">
    <Header title="Início" />
    <div className="Page__content">
      <BigCard details={obj} />
      <Carousel title={"Carousel Title"} qtd={16} obj={obj} />
    </div>
  </div>
);

export default Page;
