import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Layout } from "components/Layout";
import { PageHeading } from "components/PageHeading";
import { Head } from "components/Head";
import { PrettyDate } from "components/PrettyDate";

const Post = ({ post }) => {
  const {
    author,
    title,
    date,
    post_body,
    meta_title,
    meta_description,
  } = post.data;

  const author_name = author?.data?.author_name || "";

  const prettyDate = PrettyDate(date);

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading
        heading={RichText.asText(title)}
        date={prettyDate}
        author={author_name && RichText.asText(author_name)}
      />
      {RichText.render(post_body)}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN)
    return { paths: [], fallback: false };

  const posts = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).query(Prismic.Predicates.at("document.type", "blog_post"), {
    orderings: "[my.blog_post.date desc]",
  });

  const paths = posts.results.map((post) => `/blog/${post.uid}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (
    !params?.uid ||
    !process.env.PRISMIC_API_ENDPOINT ||
    !process.env.PRISMIC_ACCESS_TOKEN
  )
    return { props: {} };

  const post = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).getByUID("blog_post", params?.uid as string, {
    fetchLinks: ["author.author_name", "author.author_image"],
  });

  return { props: { post } };
};

export default Post;
