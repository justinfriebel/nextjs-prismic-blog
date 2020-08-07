import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Layout } from "components/Layout";
import { PageHeading } from "components/PageHeading";
import { Head } from "components/Head";
import { PrettyDate } from "components/PrettyDate";
import { Tags } from "components/Tags";
import { Author } from "components/Author";
import { CodeSlice } from "components/CodeSlice";
import { TextSlice } from "components/TextSlice";

const Post = ({ post }) => {
  const {
    author,
    blog_post_tags,
    title,
    date,
    post_body,
    body,
    meta_title,
    meta_description,
  } = post.data;

  const blogContent = body.map((slice, index) => {
    if (slice.slice_type === "text") {
      return <TextSlice slice={slice} key={index} />;
    } else if (slice.slice_type === "code_snippet") {
      return <CodeSlice content={slice.primary.code_snippet} key={index} />;
    } else {
      return null;
    }
  });

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading heading={RichText.asText(title)} />

      <span className="dateAuthorContainer">
        {PrettyDate(date)}
        <Author author={author.data} />
      </span>

      <Tags blogPostTags={blog_post_tags} />

      {blogContent}

      <style jsx>{`
        .dateAuthorContainer {
          display: flex;
          align-items: center;
        }
      `}</style>
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
    fetchLinks: [
      "author.author_name",
      "author.author_image",
      "blog_post_tag.title",
    ],
  });

  return { props: { post } };
};

export default Post;
