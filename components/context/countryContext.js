import React, { useState } from "react";

export const CountryContext = React.createContext({
  allCountries: [],
  // getCountry: (region) => {},
  // getPath: () => {},
  rest: () => {},
  getData: (name) => {},
  // detailCountry: [],
});

const CountryProvider = (props) => {
  const [allCountries, setAllCountries] = useState([]);

  const getData = (data) => {
    setAllCountries(data);
  };
  const rest = () => {
    setAllCountries([]);
  };
  return (
    <CountryContext.Provider
      value={{
        allCountries,
        // getCountry,
        // getPath,
        getData,
        rest,
        // detailCountry: country,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
export default CountryProvider;
