import React from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";

const Resume = ({ resume }) => {
  const { data } = resume;

  return (
    <Layout>
      <Head
        title="Justin Friebel's Resume | Software Engineer | JavaScript"
        description="Checkout Justin Friebel's resume, a Software Engineer focused on writing JavaScript."
      />
      <PageHeading heading={RichText.asText(data.headline)} />
      {RichText.render(data.page_body)}
      <style jsx>{``}</style>
    </Layout>
  );
};

export async function getStaticProps() {
  const resume = await client.getSingle("resume", {});

  return { props: { resume } };
}

export default Resume;
