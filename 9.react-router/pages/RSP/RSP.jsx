import React, { useState, useRef, useEffect } from "react";

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

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoord.rock);
  const [score, setScore] = useState(0);

  const interval = useRef();
  const loading = useRef(false);

  useEffect(() => {
    interval.current = setInterval(changeHand, 50);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoord.rock) {
      setImgCoord(rspCoord.scissor);
    } else if (imgCoord === rspCoord.scissor) {
      setImgCoord(rspCoord.paper);
    } else if (imgCoord === rspCoord.paper) {
      setImgCoord(rspCoord.rock);
    }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const intervalID = interval.current;

    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (!loading.current) {
      if (diff === 0) {
        setResult("비겼습니다");
      } else if ([-1, 2].includes(diff)) {
        setResult("이겼습니다");
        setScore((prevState) => prevState + 1);
      } else {
        setResult("졌습니다");
        setScore((prevState) => prevState - 1);
      }
    }

    loading.current = true;

    setTimeout(() => {
      if (intervalID === interval.current) {
        console.log("restart");
        interval.current = setInterval(changeHand, 50);
        loading.current = false;
      }
    }, 2000);
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          width: "142px",
          height: "200px",
          backgroundPosition: "0 0",
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("rock")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("scissor")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("paper")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score} 점</div>
    </>
  );
};

export default RSP;
