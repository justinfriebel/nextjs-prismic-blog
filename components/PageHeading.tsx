import { Fragment } from "react";
import { Author, AuthorImage, AuthorName } from "components/Author";

interface PageHeadingProps {
  heading: string;
  date?: string;
  author?: {
    author_name: AuthorName[];
    author_image: AuthorImage;
  };
}

const PageHeading = ({ heading, date, author }: PageHeadingProps) => {
  return (
    <Fragment>
      <h1 className={!date ? "marginBottom" : ""}>{heading}</h1>
      {!!date && (
        <div className="marginBottom dateAuthorContainer">
          {date}
          {author && <Author author={author} />}
        </div>
      )}

      <style jsx>{`
        h1 {
          margin-top: 40px;
          margin-bottom: 12px;
          line-height: 36px;
        }
        .marginBottom {
          margin-bottom: 50px;
        }
        .dateAuthorContainer {
          display: flex;
          align-items: center;
        }
      `}</style>
    </Fragment>
  );
};

export { PageHeading };
