import React from "react";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";

const Post = props => (
  <Layout>
    {/* {RichText.render(props.post.data.title)} */}
    <PageHeading
      heading={RichText.asText(props.post.data.title)}
      date={Date(props.post.data.date).toString()}
    />
    {/* <span>{Date(props.post.data.date).toString()}</span> */}
    {RichText.render(props.post.data.post_body)}
  </Layout>
);

Post.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader(
      "Cache-Control",
      "s-maxage=1, stale-while-revalidate"
    );
  }

  const { uid } = context.query;
  const post = await client.getByUID("blog_post", uid);

  return { post };
};

export default Post;
