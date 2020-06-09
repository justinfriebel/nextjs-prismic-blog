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
    <h2>I love animals.</h2>
    <p>
      A little 22 pound female Boston Terrier owns a big part of my heart. She's
      a huge cuddler and loves to play when she's not napping or farting!
    </p>
    <h2>I love playing video games.</h2>
    <p>
      My current game of choice is{" "}
      <a href="https://www.escapefromtarkov.com/" target="_blank">
        Escape from Tarkov
      </a>
      . Takov has a lot of traits that I've enjoyed in the past such as SOCOM,
      Runescape (PVP looting and quests), and Counterstrike. Other games I've
      played in the past are PUBG and Apex Legends. Growing up our family played
      on Nintendo and N64.
    </p>
    <h2>Camping and hiking.</h2>
    <p>
      Every summer I go camping and hiking. As much as I love computers,
      disconnecting a few times a year is lovely and necessary.
    </p>
  </Layout>
);

export default About;
