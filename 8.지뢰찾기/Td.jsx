import React, { useContext } from "react";
import { TableContext, CODE } from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPEN:
      return {
        background: "#fff",
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
    case CODE.OPEN:
    default:
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
