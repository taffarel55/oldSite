import "./index.css";
import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";

const MenuBar = () => {
  const { collapse, setCollapse, pages } = useGlobalContext();
  return (
    <div className={`MenuBar ${collapse ? "collapsed" : ""}`}>
      <div
        className={`MenuBar__button ${collapse ? "rotated" : ""}`}
        onClick={() => setCollapse(!collapse)}
      ></div>
      {pages.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
};

const MenuItem = ({ item: { title, link, img, subpages } }) => {
  const { page } = useGlobalContext();

  // TOFIX: Fazer isso de uma forma melhor
  let linkPage = page.link;
  let categoryName = "";
  if (typeof linkPage !== "function") {
    linkPage = "/" + linkPage.split("/")[1];
    categoryName = page.link.split("/")[2];
  }

  return (
    <>
      <Link to={link}>
        <div className={`MenuItem ${linkPage === link ? "active" : ""}`}>
          <img src={img} alt={Object.keys({ img })[0]}></img>
          <p>{title}</p>
        </div>
      </Link>
      {linkPage === link && subpages && (
        <div className="MenuItem__subpages">
          {subpages?.map((subpage, index) => {
            return (
              <SubPageItem
                key={index}
                item={subpage}
                parentLink={link}
                active={subpage.slug === categoryName}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

const SubPageItem = ({ active, parentLink, item: { slug, category } }) => {
  return (
    <Link to={`${parentLink}/${slug}`}>
      <div className={`SubPageItem ${active ? "active" : ""}`}>{category}</div>
    </Link>
  );
};

export default MenuBar;
