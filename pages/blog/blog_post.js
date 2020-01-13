import React from "react";
import { RichText, Date } from "prismic-reactjs";
import Link from "next/link";
import { client } from "../../prismic-configuration";
import Layout from "../../components/Layout";

const Post = props => (
  <Layout>
    {RichText.render(props.post.data.title)}
    <span>{Date(props.post.data.date).toString()}</span>
    {RichText.render(props.post.data.post_body)}
  </Layout>
);

Post.getInitialProps = async context => {
  const { uid } = context.query;
  const post = await client.getByUID("blog_post", uid);

  return { post };
};

export default Post;
