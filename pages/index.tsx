import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head
        title="Justin Friebel | Software Engineer | JavaScript"
        description="The website of Justin Friebel, a Software Engineer focused on writing JavaScript code."
      />
      <PageHeading heading="Hello! I'm Justin Friebel." />
      <p>
        I currently work for{" "}
        <a href="https://www.dealerinspire.com/careers/" target="_blank">
          Dealer Inspire
        </a>{" "}
        writing JavaScript as a Product Developer.
      </p>
      <p>
        I also work on my side project{" "}
        <a href="https://helpflow.in" target="_blank">
          helpflow
        </a>{" "}
        in my free time.
      </p>
      <p>
        Make sure to check out my <Link href="/blog">blog</Link>.
      </p>
    </Layout>
  );
};

export default Home;
