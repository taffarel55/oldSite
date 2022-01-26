// import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import useLanguage from "../settings/global";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkHeading from "remark-heading-id";
import rehypeRaw from "rehype-raw";
import { load } from "js-yaml";

const useMarkdown = (page) => {
  const [post, setPost] = useState("");
  const language = useLanguage();

  useEffect(() => {
    import(`../pages/${page}/content/index.${language}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const yaml = post.split("<!--\n")[1]?.split("\n-->")[0];
  // eslint-disable-next-line no-unused-vars
  const config = load(yaml);

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
