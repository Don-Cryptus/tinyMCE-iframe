const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HTMLInlineCSSWebpackPlugin =
  require('html-inline-css-webpack-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  console.log(env);
  return {
    mode: 'production',
    entry: './src/fixed_index.js',
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new Dotenv(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: 'TinyMCE',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        inject: 'body',
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new HtmlInlineScriptPlugin(),
      new HTMLInlineCSSWebpackPlugin(),
    ],

    module: {
      rules: [
        {
          test: /skin\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /content\.css$/i,
          use: ['css-loader'],
        },
      ],
    },
    optimization: {
      chunkIds: false,
      concatenateModules: true,

      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_fnames: false,
            format: { comments: false },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
    },
    output: {
      publicPath: './src',
      filename: '[name].js',

      path: path.resolve(__dirname, 'fixed'),
      clean: true,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'fixed'),
      },
    },
  };
};
