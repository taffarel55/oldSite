// import Markdown from "markdown-to-jsx";
import { load } from "js-yaml";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkHeading from "remark-heading-id";
import remarkMath from "remark-math";
import remarkShortcodes from "remark-shortcodes";
import useLanguage from "../settings/global";
import useGlobalContext from "./useGlobalContext";
import CustomComponents from "../components/CustomComponents";

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
  const [loaded, setLoaded] = useState(false);
  const language = useLanguage();
  const { setPage } = useGlobalContext();

  useEffect(() => {
    setLoaded(false);
    import(`../pages/${pageName}/content/index.${language}.md`)
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
  }, [post, setPage]);

  return (
    <div className={`Page__markdown ${loaded ? "" : "loading"}`}>
      <ReactMarkdown
        children={post}
        remarkPlugins={[remarkMath, remarkGfm, remarkHeading, remarkShortcodes]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          del: (options) => CustomComponents(options),
          code: (options) => CustomComponents(options),
        }}
      />
    </div>
  );
};

export default useMarkdown;
