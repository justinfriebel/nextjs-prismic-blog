import React from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { linkResolver, hrefResolver } from "prismic-configuration";
import { Layout } from "components/Layout";
import { PageHeading } from "components/PageHeading";
import { Head } from "components/Head";
import { PrettyDate } from "components/PrettyDate";
import { Author } from "components/Author";
import { colors } from "colors";
import { Tags } from "components/Tags";

const BlogTagListing = ({ posts, singleTagTitle }) => {
  const tagPageTitle = `${RichText.asText(singleTagTitle)} blog posts`;

  return (
    <Layout>
      <Head
        title={tagPageTitle}
        description={`Find and read ${tagPageTitle}.`}
      />
      <PageHeading heading={tagPageTitle} />

      <ul>
        {posts.results.map((post) => {
          const { blog_post_tags, date, author } = post.data;

          return (
            <li key={post.uid} className="blogPost">
              <Link href={linkResolver(post)} passHref>
                <a>
                  <h2 className="subtitle">
                    {RichText.asText(post.data.title)}
                  </h2>
                </a>
              </Link>

              <span className="dateAuthorContainer">
                {PrettyDate(date)}
                <Author author={author.data} />
              </span>

              <Tags blogPostTags={blog_post_tags} />
            </li>
          );
        })}
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

  const tags = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).query(Prismic.Predicates.at("document.type", "blog_post_tag"), {});

  const paths = tags.results.map((tag) => `/blog/tag/${tag.uid}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (
    !params?.uid ||
    !process.env.PRISMIC_API_ENDPOINT ||
    !process.env.PRISMIC_ACCESS_TOKEN
  )
    return { props: {} };

  const allTags = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).query([Prismic.Predicates.at("document.type", "blog_post_tag")], {});

  const singleTag = allTags.results.filter((tag) => {
    return tag.uid === params.uid;
  });

  const tagId = singleTag.map((tag) => {
    return tag.id;
  });

  const tagTitle = singleTag.map((tag) => {
    return tag.data.title;
  });

  const singleTagId = tagId.values().next().value;
  const singleTagTitle = tagTitle.values().next().value;

  const posts = await Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }).query(
    [
      Prismic.Predicates.at("document.type", "blog_post"),
      Prismic.Predicates.at("my.blog_post.blog_post_tags.tag", singleTagId),
    ],
    {
      orderings: "[my.blog_post.date desc]",
      fetchLinks: [
        "author.author_name",
        "author.author_image",
        "blog_post_tag.title",
      ],
    }
  );

  return { props: { posts, singleTagTitle } };
};

export default BlogTagListing;
