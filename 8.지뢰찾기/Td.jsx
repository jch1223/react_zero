import React, { useContext, useCallback, memo, useMemo } from "react";
import {
  TableContext,
  CODE,
  OPEN_CELL,
  CLICK_MINE,
  QUESTION_CELL,
  FLAG_CELL,
  NORMALIZE_CELL,
} from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.CLICK_MINE:
    case CODE.OPEN:
      return {
        background: "#fff",
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: "red",
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: "yellow",
      };
    default:
      return {
        background: "#fff",
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "x";
    case CODE.CLICKED_MINE:
      return "펑";
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return "!";
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return "?";
    case CODE.OPEN:
    default:
      return code || "";
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, halted, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }

    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPEN:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return useMemo(
    () => (
      <td
        style={getTdStyle(tableData[rowIndex][cellIndex])}
        onClick={onClickTd}
        onContextMenu={onRightClickTd}
      >
        {getTdText(tableData[rowIndex][cellIndex])}
      </td>
    ),
    [tableData[rowIndex][cellIndex]]
  );
});

export default Td;
