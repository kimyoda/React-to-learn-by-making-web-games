const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const path = require("path");

module.exports = {
  name: "Lotto-dev",
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
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  // plugins 추가(debug: true 같은 설정값들을 추가함)
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  // 프론트 개발 편의를 위해 세팅(강의버젼과 다름)
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
