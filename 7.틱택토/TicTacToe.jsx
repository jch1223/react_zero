import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "o",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("o");
  // const [tableDate, setTableData] = useState([["", "", ""], ["", "", ""], ["", "", ""] ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "o" });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
      {"asdf"}
    </>
  );
};

export default TicTacToe;
