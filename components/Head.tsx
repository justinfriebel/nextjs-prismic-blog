import NextHead from "next/head";

interface HeadProps {
  description: string;
  title: string;
}

const Head = ({ description, title }: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description}></meta>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

export { Head };
