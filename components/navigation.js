import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { CountryContext } from "./context/countryContext";

const Navigation = () => {
  const reset = useContext(CountryContext).rest;
  Router.events.on("routeChangeStart", () => {
    reset();
  });
  const modectx = useContext(CountryContext).mode;
  const route = useRouter();
  const [region, setRegion] = useState("Filter by region");
  const [search, setSearch] = useState("");
  const text = useRef();
  const getDatactx = useContext(CountryContext).getData;

  const getCountry = async (name) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);

    if (!res.ok) return;

    const data = await res.json();
    getDatactx(data);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let name = route.pathname;

  if (name === "/") {
    name = "All regions";
  } else {
    name = name.replace("/", "");
    name = capitalize(name);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let value = text.current.value;
    if (value.trim() === "") {
      getDatactx([]);
      setSearch("");

      return;
    }
    value = value.trim();

    getCountry(value);
    setSearch("");
  };
  useEffect(() => {
    setRegion(name);
  }, [route.pathname]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const navbarClass = modectx ? "navbar navbar-dark" : "navbar navbar-light";
  const buttonClass = modectx ? "dark dark-dark" : "dark dark-light";
  const iconClass = modectx ? "button button-dark" : "button button-light";
  const iconClass2 = modectx
    ? "icon-search icon-search-dark"
    : "icon-search icon-search-light";
  const dropbtnClass = modectx
    ? "dropbtn dropbtn-dark"
    : "dropbtn dropbtn-light";
  const dropcontentClass = modectx
    ? "dropdown-content dropdown-content-dark"
    : "dropdown-content dropdown-content-light";
  return (
    <div className={navbarClass}>
      <div className="navbar-div">
        <div className="navbar-content">
          <form
            onSubmit={onSubmitHandler}
            className="form-control"
            autoComplete="off"
          >
            <input
              className={buttonClass}
              ref={text}
              type="search"
              name="search"
              id="search"
              placeholder="Search for a country"
              onChange={onChangeHandler}
              value={search}
            />
            <button onClick={onSubmitHandler} className={iconClass}>
              <FontAwesomeIcon
                className={iconClass2}
                icon={faSearch}
                style={{ width: "40px" }}
              />
            </button>
          </form>
          <div className="dropdown">
            <button className={dropbtnClass}>
              {region}
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ width: "40px" }}
                className="nav-icon"
              />
            </button>
            <div className={dropcontentClass}>
              <Link href="/africa">Africa</Link>
              <Link href="/americas">America</Link>
              <Link href="/asia">Asia</Link>
              <Link href="/europe">Europe</Link>
              <Link href="/oceiana">Oceiana</Link>
              <Link href="/">All regions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
{
  /* <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form> */
}
