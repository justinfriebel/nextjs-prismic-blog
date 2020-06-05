import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import Link from "next/link";
import {
  client,
  linkResolver,
  hrefResolver,
} from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";

const BlogHome = (props) => {
  const { data } = props.home;

  return (
    <Layout>
      <PageHeading heading={RichText.asText(data.headline)} />

      <ul>
        {props.posts.results.map((post) => (
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

BlogHome.getInitialProps = async (context) => {
  if (context.res) {
    context.res.setHeader(
      "Cache-Control",
      "s-maxage=1, stale-while-revalidate"
    );
  }

  const home = await client.getSingle("blog_home");

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  return { home, posts };
};

export default BlogHome;
