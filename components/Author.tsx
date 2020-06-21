import { RichText } from "prismic-reactjs";

export interface AuthorName {
  spans: [];
  text: string;
  type: string;
}

export interface AuthorImage {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

export interface AuthorProps {
  author: {
    author_name: AuthorName[];
    author_image: AuthorImage;
  };
}

const Author = ({ author }: AuthorProps) => {
  const { author_name, author_image } = author;

  return (
    <>
      {` - ${RichText.asText(author_name)}`}{" "}
      <img src={author_image.url} className="authorImage"></img>
      <style jsx>{`
        .authorImage {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-left: 12px;
        }
      `}</style>
    </>
  );
};

export { Author };
