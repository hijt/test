const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js'
  },

  /*resolve: {
    extensions: ['.tsx']
  },*/

  devtool: "source-map",

  devServer: {
    contentBase: './dist',
    index: 'index.html',
    hot: true,
    open: true,
    port: 8080
  },

  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa||sc||c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')
                ]
              }
          },
          'sass-loader'
        ]
      },
      {
        test:/\.tsx$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
