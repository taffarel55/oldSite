import mermaid from "mermaid";
import { useEffect, useState } from "react";
import './index.css'

const useMermaid = (id, content) => {
  const [svg, setSvg] = useState(null);
  mermaid.mermaidAPI.initialize({
    theme: "dark",
    logLevel: 3,
    flowchart: { curve: "linear" },
    gantt: { axisFormat: "%m/%d/%Y" },
    sequence: { actorMargin: 20 },
  });

  useEffect(() => {
    mermaid.mermaidAPI.render(id, content, (svgraph) => {
      setSvg(svgraph);
    });
  }, [id, content]);

  return svg;
};

const Mermaid = ({ code }) => {
  const svg = useMermaid("exampleID", code);
  if (!svg) return <div className="mermaid">Loading...</div>;
  return <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Mermaid;
