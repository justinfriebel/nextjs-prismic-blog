import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head
        title="Justin Friebel | Software Engineer | JavaScript"
        description="The website of Justin Friebel, a Software Engineer focused on writing JavaScript code."
      />
      <PageHeading heading="Hello! I'm Justin Friebel." />
      <p>
        I mostly write about nerdy software things. I'm currently writing
        JavaScript for{" "}
        <a href="https://www.dealerinspire.com/careers/" target="_blank">
          Dealer Inspire
        </a>
        .
      </p>
      <p>
        I also work on my side project,{" "}
        <a href="https://helpflow.in" target="_blank">
          helpflow
        </a>
        , in my free time.
      </p>
    </Layout>
  );
};

export default Home;
