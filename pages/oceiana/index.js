import Countries from "../../components/countires";

import { useContext } from "react";
import { CountryContext } from "../../components/context/countryContext";
const OceianaPage = ({ dataa }) => {
  let datactx = useContext(CountryContext).allCountries;

  if (datactx.length !== 0 && datactx) {
    datactx = datactx.filter((country) => country.region === "Oceania");

    return <Countries countries={datactx} />;
  }
  return <Countries countries={dataa} />;
};

export default OceianaPage;
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  const countires = data.filter((country) => country.region === "Oceania");
  return {
    props: { dataa: countires },
  };
};
