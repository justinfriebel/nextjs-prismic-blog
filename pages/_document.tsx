import Document, { Html, Main, NextScript } from "next/document";
import { Fonts } from "components/Fonts";

class MyDocument extends Document {
  componentDidMount() {
    Fonts();
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
