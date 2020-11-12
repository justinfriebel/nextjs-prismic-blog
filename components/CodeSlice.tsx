import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RichText } from "prismic-reactjs";

const customStyle = {
  lineHeight: "1",
  fontSize: "0.8em",
};

const CodeSlice = ({ content }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={synthwave84}
      showLineNumbers
      codeTagProps={{
        style: customStyle,
      }}
    >
      {RichText.asText(content)}
    </SyntaxHighlighter>
  );
};

export { CodeSlice };
