import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";

const Home = ({ home }) => {
  const { headline, page_body, meta_title, meta_description } = home.data;

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading heading={RichText.asText(headline)} />
      {RichText.render(page_body)}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getSingle("home", {});

  return { props: { home } };
};

export default Home;
