// import Markdown from "markdown-to-jsx";
import { load } from "js-yaml";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Markdown from "../components/Markdown";
import useLanguage from "../settings/global";
import useGlobalContext from "./useGlobalContext";

const ErrorPage = (err) => {
  return `
  ## Ops, essa página não tem tradução! 😭\n
  Me ajude a traduzir para o pt-br clicando neste [link](link.com).\n
  O que causou o erro foi:\n
    ${err.message}
  `;
};

const useMarkdown = (pageName) => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const language = useLanguage();
  const { setPage } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    import(`../pages/${pageName}/index.${language}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            setPost(res);
          })
          .catch((err) => setPost(ErrorPage(err)));
      })
      .catch((err) => {
        setPost(ErrorPage(err));
      });
  }, [pageName, language]);

  useEffect(() => {
    const yaml = post.split("<!--\n")[1]?.split("\n-->")[0];
    const config = load(yaml);
    setPage(config);
    setLoading(false);
  }, [post, setPage]);

  return (
    <div className="Page__markdown">
      {loading ? <Loading /> : <Markdown post={post} />}
    </div>
  );
};

export default useMarkdown;
