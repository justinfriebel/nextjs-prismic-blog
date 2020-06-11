import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";

const About = ({ about }) => {
  const { headline, page_body, meta_title, meta_description } = about.data;

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading heading={RichText.asText(headline)} />
      {RichText.render(page_body)}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const about = await client.getSingle("about", {});

  return { props: { about } };
};

export default About;
