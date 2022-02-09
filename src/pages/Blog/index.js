import "./index.css";
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
    <Page>
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

const SubPage = () => {
  const { category, slug } = useParams();
  const { page } = useGlobalContext();
  const post = useMarkdown(`${page?.title}/subpages/${category}/${slug}`);

  return <Page>{post}</Page>;
};

export default Blog;

export { SubPage };
