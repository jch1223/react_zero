const path = require("path");

module.exports = {
  name: "gugudan-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 배포시에는 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  }, //entry에 적용할 것들
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
