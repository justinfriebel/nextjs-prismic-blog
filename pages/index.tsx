import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const Home: NextPage = () => (
  <Layout>
    <PageHeading heading="Justin Friebel" />
    <p>
      Welcome to Justin Friebel's website. I mostly write about nerdy software
      things.
    </p>
  </Layout>
);

export default Home;
