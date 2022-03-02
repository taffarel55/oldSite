import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkHeading from "remark-heading-id";
import remarkMath from "remark-math";
import remarkShortcodes from "remark-shortcodes";
import CustomComponents from "../CustomComponents";

const Markdown = ({ post }) => (
  <ReactMarkdown
    children={post}
    remarkPlugins={[remarkMath, remarkGfm, remarkHeading, remarkShortcodes]}
    rehypePlugins={[rehypeKatex, rehypeRaw]}
    components={{
      del: (options) => CustomComponents(options),
      code: (options) => CustomComponents(options),
    }}
  />
);

export default Markdown;
