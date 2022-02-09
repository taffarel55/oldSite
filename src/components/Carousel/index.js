import "./index.css";
import { SmallCard } from "../Cards";

const Carousel = ({ title, items }) => {
  return (
    <div className="Carousel">
      <h3 className="Carousel__title">{title}</h3>
      <div className="Carousel__items">
        {items.map((card, index) => (
          <SmallCard
            key={index}
            category={title}
            title={Object.keys(card)[0]}
            details={Object.values(card)[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
