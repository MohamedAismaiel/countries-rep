import React, { useState } from "react";

export const CountryContext = React.createContext({
  allCountries: [],
  // getCountry: (region) => {},
  // getPath: () => {},
  rest: () => {},
  getData: (name) => {},
  setData: (name) => {},
  countries: [],
  // detailCountry: [],
});

const CountryProvider = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  const getData = (data) => {
    setAllCountries(data);
  };
  const setData = (data) => {
    setCountries(data);
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
        setData,
        countries,
        // detailCountry: country,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
export default CountryProvider;
