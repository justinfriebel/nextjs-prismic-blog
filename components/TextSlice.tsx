import { RichText } from "prismic-reactjs";

const TextSlice = ({ slice }) => {
  return <div>{RichText.render(slice.primary.rich_text)}</div>;
};

export { TextSlice };
