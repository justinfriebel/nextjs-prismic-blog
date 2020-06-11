import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Head from "../../components/Head";
import { GetStaticProps, GetStaticPaths } from "next";

const Post = ({ post }) => {
  const { title, date, post_body, meta_title, meta_description } = post.data;

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading
        heading={RichText.asText(title)}
        date={Date(date).toString()}
      />
      {RichText.render(post_body)}
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
