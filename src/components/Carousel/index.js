import "./index.css";
import { SmallCard } from "../Cards";

const Carousel = ({ title, qtd, obj }) => (
  <div className="Carousel">
    <h3 className="Carousel__title">{title}</h3>
    <div className="Carousel__items">
      {Array(qtd)
        .fill(obj)
        .map((card, index) => (
          <SmallCard key={index} details={card} />
        ))}
    </div>
  </div>
);

export default Carousel;
