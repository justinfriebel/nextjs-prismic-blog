import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const About: NextPage = () => (
  <Layout>
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
