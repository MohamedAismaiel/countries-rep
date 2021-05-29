// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faMoon, fas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-text">Where in the world?</h1>

      <FontAwesomeIcon
        icon={faMoon}
        style={{ width: "40px" }}
        className="header-icon"
      />
      <span className="header-mode">Dark mode</span>
    </div>
  );
};

export default Header;
