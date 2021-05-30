import React, { useState } from "react";

export const CountryContext = React.createContext({
  allCountries: [],
  // getCountry: (region) => {},
  // getPath: () => {},
  rest: () => {},
  getData: (name) => {},
  setData: (name) => {},
  changeMode: () => {},
  mode: true,
  countries: [],
  // detailCountry: [],
});

const CountryProvider = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode((state) => !state);
  };

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
        mode,
        changeMode,
        // detailCountry: country,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
export default CountryProvider;
