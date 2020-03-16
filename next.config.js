require("dotenv").config();

const nextConfig = {
  env: {
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN
  }
};

module.exports = withOffline(nextConfig);
