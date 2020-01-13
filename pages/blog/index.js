import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import {
  client,
  linkResolver,
  hrefResolver
} from "../../prismic-configuration";
import Link from "next/link";

const BlogHome = props => {
  const { data } = props.home;

  return (
    <div>
      {/* <img src={props.home.data.image.url} alt="avatar image" /> */}
      <h1>{RichText.asText(data.headline)}</h1>
      <p>{RichText.asText(data.description)}</p>

      <ul>
        {props.posts.results.map(post => (
          <li key={post.uid}>
            <Link href={hrefResolver(post)} as={linkResolver(post)} passHref>
              <a>{RichText.render(post.data.title)}</a>
            </Link>
            <span>{Date(post.data.date).toString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogHome.getInitialProps = async context => {
  const home = await client.getSingle("blog_home");

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.blog_post.date desc]" }
  );

  return { home, posts };
};

export default BlogHome;
