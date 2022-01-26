import "./index.css";
import Page from "../../components/Page";
import useMarkdown from "../../hooks/useMarkdown";

const Contact = () => {
  const post = useMarkdown("Contact");
  return <Page>{post}</Page>;
};

export default Contact;
