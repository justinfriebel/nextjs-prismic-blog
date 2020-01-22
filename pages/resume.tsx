import React from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const Resume = (props: any) => {
  const { data } = props.resume;

  return (
    <Layout>
      <PageHeading heading={RichText.asText(data.headline)} />
      {RichText.render(data.page_body)}
      <style jsx>{``}</style>
    </Layout>
  );
};

Resume.getInitialProps = async (context: any) => {
  if (context.res) {
    context.res.setHeader(
      "Cache-Control",
      "s-maxage=1, stale-while-revalidate"
    );
  }

  const resume = await client.getSingle("resume", {});

  return { resume };
};

export default Resume;
