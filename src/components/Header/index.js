import "./index.css";

const Header = ({ title }) => (
  <div className="Header menu-effect">
    <h3 className="Header__title">{title}</h3>
    <div className="Header__items">
      <p>A</p>
      <p>B</p>
      <p>C</p>
    </div>
  </div>
);

export default Header;
