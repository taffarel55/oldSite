import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import accessTime from "../../icons/access-time.svg";
import "./index.css";
import { useEffect, useState } from "react";
import profile from "../../icons/profile.svg";

const SmallCard = ({
  title,
  details: { author, time, img, slug },
  slugCategory,
}) => {
  const {
    page: { link, title: titleCategory },
  } = useGlobalContext();

  const [userImage, setUserImage] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://api.github.com/users/${author}`);
      const data = await response.json();
      // TODO: Trocar esta imagem
      setUserImage(data.avatar_url || profile);
    };
    fetchApi();
  }, [author]);

  return (
    <Link to={`${link}/${slugCategory}/${slug}`}>
      <div className="SmallCard">
        <img
          className="SmallCard__image"
          src={require(`../../pages/${titleCategory}/subpages/${slugCategory}/${slug}/imgs/${img}`)}
          alt={title}
        ></img>

        <div className="SmallCard__description">
          <img
            className="SmallCard__description--author"
            src={userImage}
            alt={author}
          ></img>
          <p className="legend">{"@" + author}</p>
          <h4 className="SmallCard__description--title">{title}</h4>
          <div className="SmallCard__description--time">
            <img src={accessTime} alt="Clock icon"></img>
            <p className="legend">{`${time} min`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

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
