// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = (doc) => {
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === "blog_post") {
    return `/blog/[uid]`;
  }
  return "/";
};

export const tagLinkResolver = (tag) => {
  return `/blog/tag/${tag}`;
};

export const tagHrefResolver = () => {
  return `/blog/tag/[uid]`;
};
