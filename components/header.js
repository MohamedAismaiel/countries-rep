// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CountryContext } from "./context/countryContext";

const Header = () => {
  const modectx = useContext(CountryContext).mode;
  const changeModectx = useContext(CountryContext).changeMode;
  const onClickHandler = () => {
    changeModectx();
  };
  const iconClass = modectx
    ? "header-icon-dark header-icon "
    : "header-icon header-icon-light ";
  const headerClass = modectx ? "header-dark header " : "header header-light ";

  const headermodeclass = modectx
    ? "header-mode header-mode-dark"
    : "header-mode header-mode-light";
  return (
    <div className={headerClass}>
      <div className="header-div">
        <h1 className="header-text">Where in the world ?</h1>

        <FontAwesomeIcon
          onClick={onClickHandler}
          icon={!modectx ? faMoon : faSun}
          style={{ width: "40px" }}
          className={iconClass}
        />
        <span className={headermodeclass}>
          {modectx ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
};

export default Header;
