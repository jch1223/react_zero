import React, { Component } from "react";
import Try from "./Try";

const { hot } = require("react-hot-loader/root");

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tires: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tires.length}</div>
        <ul>
          {["1", "2", "3", "4", "5ddsdf3"].map((item) => {
            return <Try value={item} key={item} />;
          })}
        </ul>
      </>
    );
  }
}

export default hot(NumberBaseball);
