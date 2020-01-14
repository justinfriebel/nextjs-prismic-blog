import Prismic from "prismic-javascript";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://justinfriebel.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  "MC5YaHJSNlJFQUFDUUFOX0dy.dnXvv71677-9Su-_ve-_ve-_ve-_ve-_vSnvv70Q77-9VO-_ve-_vW3vv73vv73vv73vv70l77-9Jyge77-977-9aCQ";

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = doc => {
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = doc => {
  if (doc.type === "blog_post") {
    return `/blog/[uid]`;
  }
  return "/";
};

// -- Client method to query Prismic
// Connects to the given repository to facilitate data queries
export const client = Prismic.client(apiEndpoint, { accessToken });
