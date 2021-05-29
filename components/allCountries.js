import Country from "./countryCard";

const Layout = (props) => {
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
          />
        ))}
      </div>
    </section>
  );
};

export default Layout;
