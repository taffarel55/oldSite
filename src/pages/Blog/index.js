import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";
import Carousel from "../../components/Carousel";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useParams } from "react-router-dom";
import ShareButtons from "../../components/ShareButtons";
import profile from "../../icons/profile.svg";
import { Link } from "react-router-dom";
import "./index.css";

const Blog = () => {
  useMarkdown("Blog");
  const {
    page: { subpages },
  } = useGlobalContext();

  return (
    <Page name="Blog">
      {subpages?.map((subpage, index) => {
        return (
          <Carousel
            key={index}
            title={Object.keys(subpage)[0]}
            items={Object.values(subpage)[0]}
          />
        );
      })}
    </Page>
  );
};

const BlogCategory = () => {
  const { category } = useParams();
  return <Page name={`Blog/subpages/${category}/content`}></Page>;
};

const BlogPost = () => {
  const { category, slug } = useParams();
  useMarkdown(`Blog/subpages/${category}/${slug}`);
  const { page } = useGlobalContext();
  return (
    <Page name={`Blog/subpages/${category}/${slug}`}>
      <div className="Page__description">{page.description}</div>
      <PageDetails page={page} />
      <ShareButtons page={page} />
    </Page>
  );
};

const PageDetails = ({ page }) => {
  const { category, slug } = useParams();
  return (
    <div className="Page__details">
      <div className="Page__breadcumb">
        <Link to="/">
          <img src={require("../../icons/house.svg").default} alt="Home"></img>
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to={page.categoryLink || "/"}>{page.categoryTitle || ""}</Link>
        <Link to={page.link || "/"}>{page.title || ""}</Link>
      </div>
      <img
        className="Page__banner"
        src={require(`./subpages/${category}/${slug}/imgs/logo.png`)}
        alt="Imagem de logo do post"
      ></img>
      <div className="Page__info">
        <a
          href={`https://github.com/${page.authorNick}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="Page__info-img"
            src={
              `https://avatars3.githubusercontent.com/u/${page.authorId}` ||
              profile
            }
            alt={`Imagem do GitHub de ${page.authorName}`}
          ></img>
        </a>
        <div className="Page__info-text">
          <a
            href={`https://github.com/${page.authorNick}`}
            className="Page__info-author"
            target="_blank"
            rel="noreferrer"
          >
            {page.authorName}
          </a>
          <div className="Page__info-date">
            {/* TODO: Colocar pra receber idioma do lugar */}
            Postado em {new Date(page.date).toLocaleDateString("pt-br")}
          </div>
          <div className="Page__info-time">
            <img
              src={require("../../icons/access-time.svg").default}
              alt="Time"
            ></img>
            {page.time} min
          </div>
        </div>
        <div className="Page__info-tags">
          {page.tags?.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Blog, BlogPost, BlogCategory };
