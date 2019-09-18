const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')


module.exports =withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImages: false
  }],
  [withSass, {
    /* config options here */
  
  }]
  // your other plugins here

]);