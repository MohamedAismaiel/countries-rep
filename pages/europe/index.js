import Countries from "../../components/countires";
import { useContext } from "react";
import { CountryContext } from "../../components/context/countryContext";

const EuropePage = (props) => {
  let datactx = useContext(CountryContext).allCountries;
  const europeData = props.data.filter(
    (country) => country.region === "Europe"
  );
  if (datactx.length !== 0 && datactx) {
    datactx = datactx.filter((country) => country.region === "Europe");

    return <Countries countries={datactx} />;
  }
  return <Countries countries={europeData} />;
};

export default EuropePage;
// export const getStaticProps = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await res.json();
//   const countires = data.filter((country) => country.region === "Europe");
//   return {
//     props: { dataa: countires },
//   };
// };
