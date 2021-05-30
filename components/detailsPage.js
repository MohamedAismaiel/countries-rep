import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useContext } from "react";

import Borders from "./border";
import { CountryContext } from "./context/countryContext";
const DetailedPage = (props) => {
  const router = useRouter();
  const modectx = useContext(CountryContext).mode;
  const getCountryName = () => {
    let name = router.asPath.replace("/", "");
    return name;
  };
  const name = getCountryName();

  const country = props.data.filter((country) => country.alpha3Code === name);

  let borders = [];

  const bordersArray = () => {
    if (country[0].borders.length === 0) return;
    country[0].borders.forEach((country) => borders.push(country));
  };
  bordersArray();
  const clickHandler = () => {
    router.back();
  };
  const layoutDetail = modectx
    ? "layout layout-detail layout-detail-dark"
    : "layout layout-detail layout-detail-light";

  const layoutcontent = modectx
    ? "layout-detailedCountry-content layout-detailedCountry-content-dark"
    : "layout-detailedCountry-content layout-detailedCountry-content-light";
  const spanclass = modectx ? "span span-dark" : "span span-light";
  const titleclass = modectx
    ? "layout-detailedCountry-content-title layout-detailedCountry-content-title-dark"
    : "layout-detailedCountry-content-title layout-detailedCountry-content-title-light";
  const borderClass = modectx
    ? "layout-detailedCountry-content-border layout-detailedCountry-content-border-dark"
    : "layout-detailedCountry-content-border layout-detailedCountry-content-border-light";

  return (
    <section className={layoutDetail}>
      <div className="layout-detail-div">
        <div className="back-btn">
          <button
            onClick={clickHandler}
            className={
              modectx
                ? "back-btn-btn back-btn-btn-dark"
                : "back-btn-btn back-btn-btn-light"
            }
          >
            <FontAwesomeIcon
              className={
                modectx
                  ? "icon-back icon-back-dark"
                  : "icon-back icon-back-light "
              }
              icon={faArrowLeft}
              style={{ width: "3rem" }}
            />
            <span className="text">Back</span>
          </button>
        </div>
        {country.map((country) => (
          <div key={country.name} className="layout-detailedCountry">
            <img
              src={country.flag}
              className="layout-detailedCountry-image"
            ></img>
            <div className={layoutcontent}>
              <h2 className={titleclass}>{country.name}</h2>
              <ul className="layout-detailedCountry-content-list">
                <li className="layout-detailedCountry-content-list-native">
                  <span className={spanclass}>Native Name: </span>
                  {country.nativeName}
                </li>
                <li className="layout-detailedCountry-content-list-population">
                  <span className={spanclass}>Population: </span>
                  {country.population}
                </li>
                <li className="layout-detailedCountry-content-list-region">
                  <span className={spanclass}>Region: </span>
                  {country.region}
                </li>
                <li className="layout-detailedCountry-content-list-subregion">
                  <span className={spanclass}>Sub Region: </span>
                  {country.subregion}
                </li>
                <li className="layout-detailedCountry-content-list-capital">
                  <span className={spanclass}>Capital: </span>
                  {country.capital}
                </li>
                <li className="layout-detailedCountry-content-list-toplevel">
                  <span className={spanclass}>Top Level Domain: </span>
                  {country.topLevelDomain}
                </li>
                <li className="layout-detailedCountry-content-list-currency">
                  <span className={spanclass}>Currencies: </span>
                  {country.currencies[0].name}
                </li>
                <li className="layout-detailedCountry-content-list-languages">
                  <span className={spanclass}>Languages: </span>
                  {country.languages[0].name}
                </li>
              </ul>
              <p className={borderClass}>
                <span style={{ marginLeft: "1rem" }}>Border Countries:</span>
                {borders.length === 0 ? (
                  <span> {country.name} has no countries at their borders</span>
                ) : (
                  borders.map((cu) => (
                    <Borders key={cu} borders={cu} countries={props.data} />
                  ))
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedPage;

// const getCountry = async () => {
//   const url = `https://restcountries.eu/rest/v2/name/${getCountryName()}?fullText=true`;

//   const response = await fetch(url);
//   const data = await response.json();
//   setCountry(data);
//   // console.log(data);
// };

// useEffect(() => {
//   getCountry();
// }, []);
// console.log(props.data);
