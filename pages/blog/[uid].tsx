import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Head from "../../components/Head";
import { GetStaticProps, GetStaticPaths } from "next";

const Post = ({ post }) => {
  const { data } = post;

  return (
    <Layout>
      <Head
        title={RichText.asText(data.title)}
        description={RichText.asText(data.title)}
      />
      <PageHeading
        heading={RichText.asText(data.title)}
        date={Date(data.date).toString()}
      />
      {RichText.render(data.post_body)}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  const paths = posts.results.map((post) => `/blog/${post.uid}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.uid) return { props: {} };
  const post = await client.getByUID("blog_post", params?.uid as string, {});

  return { props: { post } };
};

export default Post;
