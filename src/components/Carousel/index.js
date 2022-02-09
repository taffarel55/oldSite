import { SmallCard } from "../Cards";
import "./index.css";

const Carousel = ({ title, items: { subpages, slug } }) => {
  return (
    <div className="Carousel">
      <h3 className="Carousel__title">{title}</h3>
      <div className="Carousel__items">
        {subpages.map((card, index) => {
          return (
            <SmallCard
              key={index}
              category={title}
              title={Object.keys(card)[0]}
              details={Object.values(card)[0]}
              slugCategory={slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
