import Countries from "../../components/countires";
import { useContext } from "react";
import { CountryContext } from "../../components/context/countryContext";

const AmericaPage = (props) => {
  let datactx = useContext(CountryContext).allCountries;
  const americaData = props.data.filter(
    (country) => country.region === "Americas"
  );
  if (datactx.length !== 0 && datactx) {
    datactx = datactx.filter((country) => country.region === "Americas");

    return <Countries countries={datactx} />;
  }

  return <Countries countries={americaData} />;
};

export default AmericaPage;

// export const getStaticProps = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await res.json();
//   const countires = data.filter((country) => country.region === "Americas");
//   return {
//     props: { dataa: countires },
//   };
// };
