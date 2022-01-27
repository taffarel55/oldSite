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
import useLanguage from "../settings/global";
import useGlobalContext from "./useGlobalContext";

const ErrorPage = (err) => {
  return "# Ops, deu ruim\n\n" + err.message;
};

const useMarkdown = (page) => {
  const [post, setPost] = useState("");
  const language = useLanguage();
  const { setPage } = useGlobalContext();

  useEffect(() => {
    import(`../pages/${page}/content/index.${language}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => setPost(ErrorPage(err)));
      })
      .catch((err) => setPost(ErrorPage(err)));
  }, [page, language]);

  useEffect(() => {
    const yaml = post.split("<!--\n")[1]?.split("\n-->")[0];
    const config = load(yaml);
    setPage(config);
  }, [post, setPage]);

  return (
    <div className="Page__markdown">
      <ReactMarkdown
        children={post}
        remarkPlugins={[remarkMath, remarkGfm, remarkHeading]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </div>
  );
};

export default useMarkdown;
