import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "./context/countryContext";
import Link from "next/link";
import Borders from "./border";
const DetailedPage = (props) => {
  // const [countryy, setCountry] = useState([]);
  const router = useRouter();

  const getCountryName = () => {
    let name = router.asPath.replace("/", "");
    // name = name.replace("%20", " ");
    // name = name.replace("%C3%85", "Å");
    return name;
  };
  const name = getCountryName();
  console.log(name);
  const country = props.data.filter((country) => country.alpha3Code === name);

  let borders = [];

  const bordersArray = () => {
    if (country[0].borders.length === 0) return;
    country[0].borders.forEach((country) => borders.push(country));
  };
  bordersArray();

  return (
    <section className="layout">
      {country.map((country) => (
        <div key={country.name} className="layout-detailedCountry">
          <img
            src={country.flag}
            className="layout-detailedCountry-image"
          ></img>
          <div className="layout-detailedCountry-content">
            <h2 className="layout-detailedCountry-content-title">
              {country.name}
            </h2>
            <ul className="layout-detailedCountry-content-list">
              <li className="layout-detailedCountry-content-list-native">
                <span>Native Name: </span>
                {country.nativeName}
              </li>
              <li className="layout-detailedCountry-content-list-population">
                <span>Population: </span>
                {country.population}
              </li>
              <li className="layout-detailedCountry-content-list-region">
                <span>Region: </span>
                {country.region}
              </li>
              <li className="layout-detailedCountry-content-list-subregion">
                <span>Sub Region: </span>
                {country.subregion}
              </li>
              <li className="layout-detailedCountry-content-list-capital">
                <span>Capital: </span>
                {country.capital}
              </li>
              <li className="layout-detailedCountry-content-list-toplevel">
                <span>Top Level Domain: </span>
                {country.topLevelDomain}
              </li>
              <li className="layout-detailedCountry-content-list-currency">
                <span>Currencies: </span>
                {country.currencies[0].name}
              </li>
              <li className="layout-detailedCountry-content-list-languages">
                <span>Languages: </span>
                {country.languages[0].name}
              </li>
            </ul>
            <p className="layout-detailedCountry-content-border">
              Border Countries:
              {borders.length !== 0 &&
                borders.map((cu) => (
                  <Borders key={cu} borders={cu} countries={props.data} />
                ))}
            </p>
          </div>
        </div>
      ))}
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
