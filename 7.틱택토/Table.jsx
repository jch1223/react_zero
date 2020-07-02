import React from "react";
import Tr from "./Tr";

function Table({ dispatch, tableData }) {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => {
          return <Tr rowData={tableData[i]} rowIndex={i} dispatch={dispatch} />;
        })}

      {/* {tableData.map((tr, i) => {
        return <Tr rowData={tableData[i]} />;
      })} */}
    </table>
  );
}

export default Table;
