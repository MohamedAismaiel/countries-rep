import { useContext } from "react";
import Layout from "../components/allCountries";
import { CountryContext } from "../components/context/countryContext";
const HomePage = (props) => {
  console.log(props);
  const datactx = useContext(CountryContext).allCountries;

  if (datactx.length !== 0 && datactx) {
    return <Layout countries={datactx} />;
  }
  return <Layout countries={props.dataa} />;
};

export default HomePage;
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  return {
    props: { dataa: data },
  };
};
