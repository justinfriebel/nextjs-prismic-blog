import { NextPage } from "next";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const About: NextPage = () => (
  <Layout>
    <PageHeading heading="About Justin Friebel" />
    <h2>Who am I?</h2>
    <p>I'm a Software Engineer focused on writing JavaScript.</p>
  </Layout>
);

export default About;
