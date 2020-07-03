const path = require("path");
const webpack = require("webpack");

// process.env.NODE_ENV = "production"; // 배포모드

module.exports = {
  name: "minesearch-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 배포시에는 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  entry: {
    app: ["./Client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
    ],
  }, //entry에 적용할 것들
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, //출력
};
