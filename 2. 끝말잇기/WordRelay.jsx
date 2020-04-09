const React = require("react");
const { useState, useRef } = React;
const { Component } = React;

const WordRelay = () => {
  const [word, setWord] = useState("끝말잇기");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input type='text' ref={inputRef} value={state.value} onChange={onChangeInput} />
        <button type='submit'>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
