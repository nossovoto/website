const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const sass = require("@zeit/next-sass");
const env = process.env.NODE_ENV;
const isDevelopment = env === "development";
const isProduction = env === "production";
const isTest = env === "test";

console.log("-------------------------------------");
console.log("");
console.log("     Running in " + env);
console.log("");
console.log("-------------------------------------");

if (isDevelopment) {
  require("dotenv").config();
}

var envVariables = {
  TEST: process.env.TEST_ENV,
  ENVIRONMENT: process.env.NODE_ENV
};

const nextConfig = {
  distDir: "build",
  target: "serverless",
  env: envVariables
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImages: false
    }
  ],
  [
    sass,
    {
      /* config for sass */
    }
  ]
  // your other plugins here
  // nextConfig
]);
