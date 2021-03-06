const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    map: "./js/map/map.js",
    photographer: "./js/photographer.js",
    updatePassword: "./js/updatePassword.js",
    upload: "./js/upload.js",
    reportProblem: "./js/reportProblem.js",
    settings: "./js/settings/settings.js",
    basic: "./js/basic.js",
    station: "./js/station.js",
    inbox: "./js/inbox.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|mp3)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
          publicPath: "../fonts",
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./map"),
    filename: "js/[name].js",
    library: "[name]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
    new webpack.EnvironmentPlugin({
      API_URL: process.env.npm_package_config_api_url,
    }),
  ],
};
