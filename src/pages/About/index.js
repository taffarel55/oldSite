import "./index.css";
import "../../settings/markdown/index.css";
import Page from "../../components/Page";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";

// TODO: Ver se é possível criar um hook useMarkdown para retornar somente o post
const About = () => {
  const [post, setPost] = useState("");
  const fileName = "index.pt-br.md";
  useEffect(() => {
    import(`./content/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <Page>
      <div className="Page__markdown">
        <Markdown>{post}</Markdown>
      </div>
    </Page>
  );
};

export default About;
