import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import { Layout } from "components/Layout";
import { PageHeading } from "components/PageHeading";
import { Head } from "components/Head";

const Home = ({ home }) => {
  if (!home?.data) return "loading...";

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
  if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN)
    return { props: {} };

  const home = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).getSingle("home", {});

  return { props: { home } };
};

export default Home;
