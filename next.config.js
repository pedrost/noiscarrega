// next.config.js
const withImages = require('next-images');
const withPWA = require('next-pwa');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache')

module.exports = withPlugins([
  [withPWA, {
    pwa: {
        runtimeCaching,
    }
  }],
  [withImages],
  [withFonts]
]);