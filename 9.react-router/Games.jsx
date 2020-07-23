import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import NumberBaseball from "./pages/NumberBaseball/NumberBaseball";
import RSP from "./pages/RSP/RSP";
import Lotto from "./pages/Lotto/Lotto";

const Games = () => {
  return (
    <BrowserRouter>
      {/* <a href="/number-baseball">숫자야구</a> */}
      <Link to="/">home</Link>
      &nbsp;
      <Link to="/number-baseball">숫자야구</Link>
      &nbsp;
      <Link to="/rock-scissor-paper">가위바위보</Link>
      &nbsp;
      <Link to="/lotto-generator">로또생성기</Link>
      <div>
        {/* <Route path="/" component={<>home</>}></Route> */}
        <Route path="/number-baseball" component={NumberBaseball}></Route>
        <Route path="/rock-scissor-paper" component={RSP}></Route>
        <Route path="/lotto-generator" component={Lotto}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
