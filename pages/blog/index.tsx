import React from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { GetStaticProps } from "next";
import Link from "next/link";
import { linkResolver, hrefResolver } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Head from "../../components/Head";
import PrettyDate from "../../components/PrettyDate";
import { colors } from "../../colors";

const BlogHome = ({ home, posts }) => {
  const { headline, meta_title, meta_description } = home.data;

  return (
    <Layout>
      <Head title={meta_title} description={meta_description} />
      <PageHeading heading={RichText.asText(headline)} />

      <ul>
        {posts.results.map((post) => (
          <li key={post.uid} className="blogPost">
            <Link href={hrefResolver(post)} as={linkResolver(post)} passHref>
              <a>
                <h2 className="subtitle">
                  {RichText.asText(post.data.subtitle)}
                </h2>
              </a>
            </Link>
            <span>{PrettyDate(post.data.date)}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .blogPost {
          margin-bottom: 40px;
        }
        .subtitle {
          margin-bottom: 12px;
          line-height: 30px;
          color: ${colors.link};
        }
        .subtitle:hover {
          -webkit-filter: drop-shadow(0px 0px 3px ${colors.linkHover});
          filter: drop-shadow(0px 0px 3px ${colors.linkHover});
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN)
    return { props: {} };

  const home = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).getSingle("blog_home", {});

  const posts = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).query(Prismic.Predicates.at("document.type", "blog_post"), {
    orderings: "[my.blog_post.date desc]",
  });

  return { props: { home, posts } };
};

export default BlogHome;
