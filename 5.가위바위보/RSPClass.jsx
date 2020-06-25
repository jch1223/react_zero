import React, { Component } from "react";

const rspCoord = {
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

const scores = {
  rock: 0,
  scissor: 1,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoord).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: "0",
    score: 0,
  };

  interval;
  loading = false;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const intervalID = this.interval;

    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(this.state.imgCoord)];
    const diff = myScore - cpuScore;

    console.log(intervalID, this.interval);

    if (!this.loading) {
      if (diff === 0) {
        this.setState({
          result: "비겼습니다",
        });
      } else if ([-1, 2].includes(diff)) {
        this.setState((prevState) => {
          return { result: "이겼습니다", score: prevState.score + 1 };
        });
      } else {
        this.setState((prevState) => {
          return { result: "졌습니다", score: prevState.score - 1 };
        });
      }
    }

    this.loading = true;

    setTimeout(() => {
      if (intervalID === this.interval) {
        console.log("restart");
        this.interval = setInterval(this.changeHand, 50);
        this.loading = false;
      }
    }, 2000);
  };

  changeHand = () => {
    const { imgCoord } = this.state;

    if (imgCoord === rspCoord.rock) {
      this.setState({ imgCoord: rspCoord.scissor });
    } else if (imgCoord === rspCoord.scissor) {
      this.setState({ imgCoord: rspCoord.paper });
    } else if (imgCoord === rspCoord.paper) {
      this.setState({ imgCoord: rspCoord.rock });
    }
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("rock")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("scissor")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("paper")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score} 점</div>
      </>
    );
  }
}

export default RSP;
