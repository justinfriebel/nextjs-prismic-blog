import React, { useEffect } from "react";
import Router from "next/router";
import { colors } from "colors";
import * as gtag from "gtag";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />

      <style global jsx>{`
        html {
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
        }
        body {
          font-family: "Roboto", sans-serif;
          background-color: ${colors.background};
          color: ${colors.textNormal};
          font-size: 18px;
          line-height: 22px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${colors.heading};
          font-family: "Open Sans", sans-serif;
          margin-top: 50px;
          margin-bottom: 10px;
          line-height: 30px;
        }
        ul {
          padding-inline-start: 0px;
        }
        li {
          list-style-type: none;
        }
        a {
          text-decoration: none;
          color: ${colors.link};
        }
        a:hover {
          -webkit-filter: drop-shadow(0px 0px 3px ${colors.linkHover});
          filter: drop-shadow(0px 0px 3px ${colors.linkHover});
        }
      `}</style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
