import "./index.css";
import accessTime from "../../icons/access-time.svg";

const SmallCard = ({ details: { img, author, time } }) => (
  <div className="SmallCard">
    <img className="SmallCard__image" src={img.src} alt={img.alt}></img>

    <div className="SmallCard__description">
      <img
        className="SmallCard__description--author"
        src={author.src}
        alt={author.user}
      ></img>
      <p className="legend">{"@" + author.user}</p>
      <h4 className="SmallCard__description--title">Title</h4>
      <div className="SmallCard__description--time">
        <img src={accessTime} alt="Clock icon"></img>
        <p className="legend">{`${time} min`}</p>
      </div>
    </div>
  </div>
);

const BigCard = ({ details: { img, author, time } }) => (
  <div className="BigCard">
    <img className="BigCard__image" src={img.src} alt={img.alt}></img>
    <div className="BigCard__content">
      <div className="BigCard__description">
        <h4 className="BigCard__description--category">Category</h4>
        <h3 className="BigCard__description--title">Title</h3>
        <div className="BigCard__description--author">
          <img src={author.src} alt={author.user}></img>
          <p className="legend">{author.user}</p>
        </div>
        <div className="BigCard__description--time">
          <img src={accessTime} alt="Clock icon"></img>
          <p className="legend">{`${time} min`}</p>
        </div>
      </div>
      {/* TODO: Puts the button */}
      <h4>Button here</h4>
    </div>
  </div>
);

export { BigCard, SmallCard };
