import React from "react";
import { Container } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap"
          rel="stylesheet"
          key="google-font-open-sans-roboto"
        />
      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
        html {
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
        }
        body {
          font-family: "Roboto", sans-serif;
          background-color: #26547c;
          color: #ffd166;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Open Sans", sans-serif;
          color: #fcfcfc;
        }
        ul {
          padding-inline-start: 0px;
        }
        li {
          list-style-type: none;
        }
        a {
          text-decoration: none;
          color: #fcfcfc;
        }
      `}</style>
    </Container>
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
