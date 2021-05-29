import { useContext, useEffect } from "react";
import Country from "./countryCard";
import { CountryContext } from "./context/countryContext";

const Countries = (props) => {
  // const datactx = useContext(CountryContext).country;
  // const getCountriesctx = useContext(CountryContext).getCountry;
  // const getPathctx = useContext(CountryContext).getPath;
  // useEffect(() => {
  //   getCountriesctx(getPathctx());
  // }, []);
  // console.log(datactx);

  return (
    <section className="layout">
      <div className="layout-container">
        {props.countries.map((country) => (
          <Country
            key={country.name}
            image={country.flag}
            name={country.name}
            region={country.region}
            capital={country.capital}
            population={country.population}
            code={country.alpha3Code}
          />
        ))}
      </div>
    </section>
  );
};

export default Countries;

// export const getStaticProps = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// };
