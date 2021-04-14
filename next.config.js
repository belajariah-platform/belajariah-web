const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const plugins = [
  withFonts,
  withImages
]

module.exports = withPlugins([...plugins])