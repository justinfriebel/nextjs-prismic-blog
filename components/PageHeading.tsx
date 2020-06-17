import { Fragment } from "react";

interface PageHeadingProps {
  heading: string;
  date?: string;
  author?: string;
}

const PageHeading = ({ heading, date, author }: PageHeadingProps) => {
  return (
    <Fragment>
      <h1 className={!date ? "marginBottom" : ""}>{heading}</h1>
      {!!date && (
        <div className="marginBottom">{`${date} ${
          author && `by ${author}`
        }`}</div>
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
      `}</style>
    </Fragment>
  );
};

export default PageHeading;
