const path = require("path");
const webpack = require("webpack");

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
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  }, //entry에 적용할 것들
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};

// preset은 plugin들의 집합
// preset을 세팅하려할 경우 배열로 만들고, 첫번째에는 preset을 넣고 두번째에는 설정을 넣는다
// 위의 설정은 targets안에 browsers 옵션으로 크롬의 이전 2개의 버전만 지원하도록 한다
// preset-env의 설정이 중요한 이유는 이전 버전의 브라우저( ie)를 모두 적용을 시킬 경우 바벨의 작업량이 늘어나서 느려진다.
// 해당 설정의 값은 https://github.com/browserslist/browserslist 에서 확인 할 수 있다
//  '> 5% in KR'로 설정할 경우 한국에서 점유율이 5%이상인 브라우저를 바벨 한다

// plugins 세팅은 debug 옵션을 모두 추가하는 세팅이다
