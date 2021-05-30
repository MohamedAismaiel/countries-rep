import Link from "next/link";
import { useContext } from "react";
import { CountryContext } from "./context/countryContext";

const Borders = (props) => {
  const modectx = useContext(CountryContext).mode;
  const filtered = props.countries.filter(
    (cu) => cu.alpha3Code === props.borders
  );
  if (filtered.length === 0) {
    return <p>No borders</p>;
  }
  const borderspan = modectx
    ? "border-span border-span-dark"
    : "border-span border-span-light";
  return (
    <Link href={`/${filtered[0].alpha3Code}`}>
      <span className={borderspan}>{filtered[0].name}</span>
    </Link>
  );
};

export default Borders;
