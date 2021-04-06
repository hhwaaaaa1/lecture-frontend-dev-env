const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist",
          filename: "[name].[ext]?[hash]",
          limit: 20000,
        },
      },
    ],
  },
};
