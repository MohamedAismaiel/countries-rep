import { useContext } from "react";
import { CountryContext } from "./context/countryContext";
import Country from "./countryCard";

const Layout = (props) => {
  const modectx = useContext(CountryContext).mode;

  const layoutClass = modectx ? "layout layout-dark" : "layout layout-light";

  return (
    <section className={layoutClass}>
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

export default Layout;
