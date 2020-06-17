import React, { Component } from "react";

const rspCoord = {
  rock: "0",
  scissor: "-142px",
  paper: "-248px",
};

const score = {
  rock: 1,
  scissor: 0,
  paper: -1,
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };

  interval;

  componentDidMount() {
    const { imgCoord } = this.state;

    this.interval = setInterval(() => {
      if (imgCoord === rspCoord.rock) {
        this.setState({ imgCoord: rspCoord.scissor });
      } else if (imgCoord === rspCoord.scissor) {
        this.setState({ imgCoord: rspCoord.paper });
      } else if (imgCoord === rspCoord.paper) {
        this.setState({ imgCoord: rspCoord.rock });
      }
    }, 1000);
  }

  componentWillUpdate() {}

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
          <button id="rock" className="btn" onClick={() => onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={() => onClickBtn("보")}>
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
