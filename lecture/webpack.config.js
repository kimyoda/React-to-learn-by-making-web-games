// node 경로 지정 방법
const path = require("path");

module.exports = {
  name: "Wordrelay-setting",
  mode: "development", // 실서비스: production
  devtool: "evel",
  resovle: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, // 입력
  output: {
    path: path.join(__dirname, "dist"),
  }, // 출력
};
