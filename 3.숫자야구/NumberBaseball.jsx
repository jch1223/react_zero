import React, { Component } from "react";
import Try from "./Try";

const { hot } = require("react-hot-loader/root");

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - 1)), 1)[0];
    array.push(chosen);
  }

  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런",
        tries: [...this.state.tries, { try: this.state.value, result: "홈런" }],
      });
      alert("게임을 다시 시작합니다");

      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split("").map((item) => parseInt(item));
      let strike = 0;
      let ball = 0;

      if (this.state.tries.length >= 9) {
        this.setState({
          result: `실패! 정답 : ${this.state.answer.join(",")}`,
        });

        alert("게임을 다시 시작합니다");

        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        this.setState({
          tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다` }],
        });
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((item, i) => {
            return <Try tryInfo={item} key={`${i + 1}차시도`} />;
          })}
        </ul>
      </>
    );
  }
}

export default hot(NumberBaseball);
