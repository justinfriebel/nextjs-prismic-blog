import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { GetStaticProps } from "next";
import Link from "next/link";
import {
  client,
  linkResolver,
  hrefResolver,
} from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Head from "../../components/Head";

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
            <span>{Date(post.data.date).toString()}</span>
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
          color: #fcfcfc;
        }
        .subtitle:hover {
          -webkit-filter: drop-shadow(0px 0px 3px #828282);
          filter: drop-shadow(0px 0px 3px #828282);
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getSingle("blog_home", {});

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  return { props: { home, posts } };
};

export default BlogHome;
