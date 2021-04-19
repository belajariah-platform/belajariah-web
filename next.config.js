// const webpack = require('webpack')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
// const { parsed: localEnv } = require('dotenv').config()

const plugins = [
  withFonts,
  withImages
]

module.exports = withPlugins([...plugins])