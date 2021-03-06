const webpack = require("webpack");
const path = require("path");

module.exports = {
  // mode: 'development',
  entry: {
    'index' : path.resolve(__dirname, "src/js/index.js"),
    'blog' : path.resolve(__dirname, "src/js/blog.js"),
    'works' : path.resolve(__dirname, "src/js/works.js"),
    'about' : path.resolve(__dirname, "src/js/about.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build/js"),
    publicPath: "/build/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader", 
          "css-loader",
          "svg-fill-loader/encodeSharp",
          "sass-loader"
        ]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: [
              "vue-style-loader",
              "css-loader",
              "sass-loader",
              {
                loader: "sass-resources-loader",
                options: {
                  resources: [
                    "./src/styles/variables.scss",
                    "./src/styles/mixins.scss"
                  ]
                }
              }
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.svg$/,
        use: [
          "url-loader",
          {
            loader: 'svg-fill-loader?fill=#fff'
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      simpleVueValidator$: 'simple-vue-validator/dist/plugin.js',
      // vue$: 'vue/dist/vue.common.js',
      styles: path.resolve(__dirname, "src/scss/blocks/"),
      images: path.resolve(__dirname, "src/img/")
    },
    // extensions: ["*", ".js", ".vue", ".json"]
    // extensions: [ ".js", ".vue", ".json"]
    // extensions: [ ".vue"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true,
    open: false
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

// if (process.env.NODE_ENV) {
//   module.exports.entry = Object.assign(module.exports.entry, {
//     admin: path.resolve(__dirname, "src/admin/main.js")
//   })
// }

// if (process.env.NODE_ENV === "production") {
//   module.exports.devtool = "#source-map";
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ]);
// }

// if (process.env.NODE_ENV === "production") {
//   module.exports.devtool = "#source-map";
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ]);
// }