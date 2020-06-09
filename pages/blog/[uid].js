import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Head from "../../components/Head";

const Post = (props) => (
  <Layout>
    <Head
      title={RichText.asText(props.post.data.title)}
      description={RichText.asText(props.post.data.title)}
    />
    <PageHeading
      heading={RichText.asText(props.post.data.title)}
      date={Date(props.post.data.date).toString()}
    />
    {RichText.render(props.post.data.post_body)}
  </Layout>
);

export async function getStaticPaths() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  const paths = posts.results.map((post) => `/blog/${post.uid}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await client.getByUID("blog_post", params.uid);

  return { props: { post } };
}

export default Post;
