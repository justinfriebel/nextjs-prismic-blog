import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

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
}
