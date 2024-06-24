const { debug } = require("console");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval", //hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"],
  },

  entry: {
    app: "./client",
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          // presets에 추가적인 brwsers 설정을 할 수 있다.
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  // plugins 추가(debug: true 같은 설정값들을 추가함)
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
