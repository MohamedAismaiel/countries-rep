import { useContext } from "react";
import { CountryContext } from "../../components/context/countryContext";
import Countries from "../../components/countires";

const AsiaPage = (props) => {
  let datactx = useContext(CountryContext).allCountries;
  const asiaData = props.data.filter((country) => country.region === "Asia");

  if (datactx.length !== 0 && datactx) {
    datactx = datactx.filter((country) => country.region === "Asia");

    return <Countries countries={datactx} />;
  }

  return <Countries countries={asiaData} />;
};

export default AsiaPage;

// export const getStaticProps = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await res.json();
//   const countires = data.filter((country) => country.region === "Asia");
//   return {
//     props: { dataa: countires },
//   };
// };
