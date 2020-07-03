import React, {
  useEffect,
  useReducer,
  useCallback,
  memo,
  useMemo,
} from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TRUN = "SET_TRUN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TRUN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
    case RESET_GAME:
      return {
        ...state,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("O");
  // const [tableDate, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  useEffect(() => {
    const [row, cell] = state.recentCell;
    if (row < 0) {
      return;
    }

    let win = false;
    console.log(win);
    if (
      state.tableData[row][0] === state.turn &&
      state.tableData[row][1] === state.turn &&
      state.tableData[row][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][cell] === state.turn &&
      state.tableData[1][cell] === state.turn &&
      state.tableData[2][cell] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][0] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][2] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][0] === state.turn
    ) {
      win = true;
    }

    if (win) {
      dispatch({ type: SET_WINNER, winner: state.turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true;
      state.tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });

      if (all) {
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TRUN });
      }
    }
  }, [state.tableData]);

  return (
    <>
      <Table tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default memo(TicTacToe);
