import React, { useState, memo } from "react";
import Try from "./Try";

// const { hot } = require("react-hot-loader/root");

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const random = Math.random() * candidate.length;

    const chosen = candidate.splice(random, 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런" }];
      });

      alert("게임을 다시 시작합니다");

      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split("").map((item) => parseInt(item));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        setResult(`실패! 정답 : ${answer.join(",")}`);

        alert("게임을 다시 시작합니다");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setValue("");
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` },
          ];
        });
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((item, i) => {
          return <Try tryInfo={item} key={`${i + 1}차시도`} />;
        })}
      </ul>
    </>
  );
});

export default NumberBaseball;
