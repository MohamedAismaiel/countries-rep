import { Router } from "next/router";
import CountryProvider from "../components/context/countryContext";
import Header from "../components/header";
import X from "../components/layout";
import Navigation from "../components/navigation";
import "../styles/globals.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
  console.log("start");
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  console.log("completed");
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  console.log("error");
});

function MyApp({ Component, pageProps }) {
  return (
    <CountryProvider>
      <X>
        <Header />
        <Navigation />
        <Component {...pageProps} />
      </X>
    </CountryProvider>
  );
}

export default MyApp;
