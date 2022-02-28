import "./index.css";
import useGlobalContext from "../../hooks/useGlobalContext";
import github from "../../icons/github.png";

const Header = ({ title }) => {
  const { page } = useGlobalContext();

  return (
    <header className="Header menu-effect">
      <h3 className="Header__title">{title}</h3>
      <div className="Header__items">
        <p>A</p>
        <p>B</p>
        <a
          class="github-icon"
          rel="noreferrer"
          target="_blank"
          href={`https://github.com/taffarel55/taffarel55.github.io/issues/new?assignees=taffarel55&labels=edit&template=edit.md&title[]=Describe+your+proposal+here+for ${page.link}`}
        >
          <img src={github} alt="Github logo"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
