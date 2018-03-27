const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    'index' : path.resolve(__dirname, "src/js/index.js"),
    'blog' : path.resolve(__dirname, "src/js/blog.js"),
    'works' : path.resolve(__dirname, "src/js/works.js"),
    'about' : path.resolve(__dirname, "src/js/about.js"),

  },
  output: {
    path: path.resolve(__dirname, "build/js"),
    publicPath: "/build/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devtool: '#eval-source-map'
};