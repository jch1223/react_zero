const React = require("react");

class GuGuDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevFirst: "",
      prevSecond: "",
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
      resultNum: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: "정답",
          prevFirst: prevState.first,
          prevSecond: prevState.second,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          resultNum: prevState.value,
          value: "",
        };
      });

      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        prevFirst: this.state.first,
        prevSecond: this.state.second,
        resultNum: this.state.value,
        value: "",
      });

      this.input.focus();
    }
  };

  onChange = (e) => this.setState({ value: e.target.value });

  input;

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.first}곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type='number'
            ref={(c) => {
              this.input = c;
            }}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type='submit'> 입력! </button>
        </form>
        <div>
          {this.state.result &&
            `${this.state.prevFirst} X ${this.state.prevSecond} =  ${this.state.resultNum} ${this.state.result}`}
        </div>
      </React.Fragment>
    );
  }
}

module.exports = GuGuDan;
