import Document, { Html, Main, NextScript } from "next/document";
import WebFont from "webfontloader";

class MyDocument extends Document {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ["Open Sans", "Roboto", "sans-serif"],
      },
    });
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
