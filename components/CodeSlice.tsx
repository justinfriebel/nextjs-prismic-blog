import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RichText } from "prismic-reactjs";

const CodeSlice = ({ content }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={synthwave84}
      showLineNumbers
    >
      {RichText.asText(content)}
    </SyntaxHighlighter>
  );
};

export { CodeSlice };
