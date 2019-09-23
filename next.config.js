const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const sass = require("@zeit/next-sass");
const webpack = require("webpack");
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT
} = require("next-server/constants");

const enviroment = {
  MY_SECRET_KEY: process.env.MY_SECRET_KEY
};

const nextConfig = {
  distDir: "build",
  webpack: (config, options) => {
    // modify the `config` here

    return config;
  },
  env: enviroment
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
        optimizeImages: false
      }
    ],
    [sass, {}]

    // your other plugins here
  ],
  nextConfig
);
