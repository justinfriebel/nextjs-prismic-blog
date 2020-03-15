require("dotenv").config();
const withOffline = require("next-offline");

const nextConfig = {
  env: {
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN
  },
  dontAutoRegisterSw: true
};

module.exports = withOffline(nextConfig);
