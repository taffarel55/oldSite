import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SmallCard } from "../Cards";
import "./index.css";
import Mermaid from "../Mermaid";

const CustomComponents = ({
  node,
  inline,
  className,
  type,
  children,
  ...props
}) => {
  if (node.tagName === "code") {
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
  }
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
  if (type === "desmos") {
    return (
      <iframe
        src={`https://www.desmos.com/calculator/${props.id}`}
        title="Desmos Calculator"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  }
  if (type === "circuit") {
    return (
      <iframe
        src={`https://circuitverse.org/simulator/embed/${props.id}`}
        id="projectPreview"
        title="Circuit Simulator"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    );
  }
  if (type === "falstad") {
    return (
      <div className="iframe">
        <iframe
          src={props.src}
          title="Falstad Simulator"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          id="falstad"
        ></iframe>
      </div>
    );
  }
  if (type === "mermaid") {
    return <Mermaid code={children[0]} />;
  }
  if (type === "SmallCard") {
    return (
      <SmallCard
        details={{ link: props.link, author: props.author, time: props.time }}
      />
    );
  }

  return <div>Isso aqui era pra ser algum componente customizado</div>;
};

export default CustomComponents;
