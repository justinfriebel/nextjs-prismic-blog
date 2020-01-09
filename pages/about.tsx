import { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1>About Justin Friebel</h1>
    <h2>Who am I?</h2>
    <p>I'm a Software Engineer focused on writing JavaScript.</p>
    <p>User Agent: {userAgent}</p>
  </Layout>
);

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default About;
