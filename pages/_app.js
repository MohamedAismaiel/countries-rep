import { Router } from "next/router";
import CountryProvider from "../components/context/countryContext";
import Header from "../components/header";
import X from "../components/layout";
import Navigation from "../components/navigation";
import "../styles/globals.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {});

function MyApp({ Component, pageProps }) {
  const [countries, setCountries] = useState([]);

  const data = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    setCountries(data);
    localStorage.setItem("data", JSON.stringify(data));
  };
  useEffect(() => {
    data();
  }, []);
  console.log();
  return (
    <CountryProvider>
      <X>
        <Header />
        {pageProps.dataa ? null : <Navigation />}

        <Component {...pageProps} data={countries} />
      </X>
    </CountryProvider>
  );
}

export default MyApp;
