import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Head from "../components/Head";

const About: NextPage = () => (
  <Layout>
    <Head
      title="About Justin Friebel | Software Engineer | JavaScript"
      description="Learn about Justin Friebel, a Software Engineer focused on writing JavaScript."
    />
    <PageHeading heading="About Justin Friebel" />
    <h2>Who am I?</h2>
    <p>
      I'm a Software Engineer focused on writing JavaScript. I love playing
      video games and writing code in my free time. My Boston Terrier Belle
      loves to play as well!
    </p>
  </Layout>
);

export default About;
