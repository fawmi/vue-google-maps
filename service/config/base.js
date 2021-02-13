'use strict'

const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')

const resolveClientEnv = require('../utils/resolveClientEnv')
const paths = require('../utils/paths')

const config = require('../project.config')

const isProd = process.env.NODE_ENV === 'production'
const outputFileName = paths.getAssetPath(`js/[name]${isProd ? '' : ''}.js`)

module.exports = {
  context: process.cwd(),

  entry: {
    app: './src/main.js',
  },

  output: {
    path: paths.resolve(config.outputDir),
    publicPath: config.dev.publicPath,
    filename: outputFileName,
    chunkFilename: outputFileName,
  },

  resolve: {
    alias: {
      '@': paths.resolve('src'),
    },
    extensions: ['.js','.vue', '.json'],
  },

  plugins: [
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      extensions: ['.js', '.vue'],
      formatter: require('eslint-formatter-friendly'),
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      ...resolveClientEnv({ publicPath: config.dev.publicPath }),
    }),
  ],

  module: {
    noParse: /^(vue)$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
}
