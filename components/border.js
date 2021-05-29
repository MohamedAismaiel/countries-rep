import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Borders = (props) => {
  const filtered = props.countries.filter(
    (cu) => cu.alpha3Code === props.borders
  );
  console.log(filtered);
  return (
    <Link href={`/${filtered[0].name}`}>
      <span className="layout-detailedCountry-content-borders">
        {" "}
        {filtered[0].name}
      </span>
    </Link>
  );
};

export default Borders;
