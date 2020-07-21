import React, { useContext } from "react";
import { TableContext } from "./MineSearch";

const getTdStyle = (code) => {};

const getTdText = (code) => {};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);
  let i;
  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
