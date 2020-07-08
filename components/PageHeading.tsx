import { Fragment } from "react";

interface PageHeadingProps {
  heading: string;
}

const PageHeading = ({ heading }: PageHeadingProps) => {
  return (
    <Fragment>
      <h1 className="pageHeading">{heading}</h1>

      <style jsx>{`
        .pageHeading {
          margin-top: 40px;
          margin-bottom: 12px;
          line-height: 36px;
        }
      `}</style>
    </Fragment>
  );
};

export { PageHeading };
