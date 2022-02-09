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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { SmallCard } from "../components/Cards";

const ErrorPage = (err) => {
  return `
  ## Ops, essa página não tem tradução! 😭\n
  Me ajude a traduzir para o {language} clicando neste [link](link.com).\n
  O que causou o erro foi:\n
    ${err.message}
  `;
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

  const customComponents = (node, children, type, props) => {
    if (type === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube Video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      );
    }
    if (type === "SmallCard") {
      return (
        <SmallCard
          details={{ link: props.link, author: props.author, time: props.time }}
        />
      );
    }

    return <div></div>;
  };

  return (
    <div className="Page__markdown">
      <ReactMarkdown
        children={post}
        remarkPlugins={[remarkMath, remarkGfm, remarkHeading, remarkShortcodes]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          del: ({ node, children, type, ...props }) =>
            customComponents(node, children, type, props),
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                style={vscDarkPlus}
                customStyle={{
                  backgroundColor: "transparent",
                  opacity: "1",
                  margin: "-1.5rem",
                }}
                showLineNumbers={true}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default useMarkdown;
