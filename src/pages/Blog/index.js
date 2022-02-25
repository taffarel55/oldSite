import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";
import Carousel from "../../components/Carousel";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useParams } from "react-router-dom";

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
  return <Page name={`Blog/subpages/${category}/${slug}`}></Page>;
};

export { Blog, BlogPost, BlogCategory };
