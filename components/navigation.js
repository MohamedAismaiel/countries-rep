import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Router } from "next/router";
import { useContext, useRef, useState } from "react";
import { CountryContext } from "./context/countryContext";

const Navigation = () => {
  const reset = useContext(CountryContext).rest;
  Router.events.on("routeChangeStart", () => {
    reset();
  });

  const [search, setSearch] = useState("");
  const text = useRef();
  const getDatactx = useContext(CountryContext).getData;

  const getCountry = async (name) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);

    if (!res.ok) return;

    const data = await res.json();
    getDatactx(data);
  };

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

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = () => {
    // reset();
  };

  return (
    <div className="navbar">
      <div className="navbar-div">
        <div className="navbar-content">
          <form
            onSubmit={onSubmitHandler}
            className="form-control"
            autoComplete="off"
          >
            <input
              ref={text}
              type="search"
              name="search"
              id="search"
              placeholder="Search for a country"
              onChange={onChangeHandler}
              value={search}
            />
            <button onClick={onSubmitHandler}>
              <FontAwesomeIcon
                className="icon-search"
                icon={faSearch}
                style={{ width: "40px" }}
              />
            </button>
          </form>
          <div className="dropdown">
            <button className="dropbtn">
              Filter by region
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ width: "40px" }}
                className="nav-icon"
              />
            </button>
            <div onClick={clickHandler} className="dropdown-content">
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
