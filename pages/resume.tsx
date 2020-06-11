import React from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";
import { GetStaticProps } from "next";

const Resume = ({ resume }) => {
  const { headline, page_body, meta_title, meta_description } = resume.data;

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading heading={RichText.asText(headline)} />
      {RichText.render(page_body)}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resume = await client.getSingle("resume", {});

  return { props: { resume } };
};

export default Resume;
