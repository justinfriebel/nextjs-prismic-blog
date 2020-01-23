import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const Home: NextPage = () => (
  <Layout>
    <PageHeading heading="Hello! You've arrived at Justin Friebel's website." />
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

export default Home;
