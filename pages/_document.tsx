import Document, { Html, Main, NextScript } from "next/document";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Open Sans", "Roboto", "sans-serif"],
  },
});

class MyDocument extends Document {
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
