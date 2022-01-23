import "./index.css";
import del from "../../delete/warning.png";

const MenuBar = () => (
  <div className="MenuBar">
    <img className="delete" src={del} alt="delete"></img>
    <h4>Cooming Soon</h4>
  </div>
);

export default MenuBar;
