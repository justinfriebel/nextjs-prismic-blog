import { Fragment } from "react";

interface PageHeadingProps {
  heading: string;
  date?: string;
}

const PageHeading = ({ heading, date }: PageHeadingProps) => {
  return (
    <Fragment>
      <h1 className={!date ? "marginBottom" : ""}>{heading}</h1>
      {!!date && <div className={date ? "marginBottom" : ""}>{date}</div>}

      <style jsx>{`
        h1 {
          margin-top: 40px;
          margin-bottom: 12px;
        }
        .marginBottom {
          margin-bottom: 50px;
        }
      `}</style>
    </Fragment>
  );
};

export default PageHeading;
