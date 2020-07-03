import React, { memo } from "react";
import Td from "./Td";

function Tr({ rowData, rowIndex, dispatch }) {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            cellIndex={i}
            cellData={rowData[i]}
            rowIndex={rowIndex}
            dispatch={dispatch}
          >
            {""}
          </Td>
        ))}

      {/* {rowData.map((td) => {
        return <Td>a</Td>;
      })} */}
    </tr>
  );
}

export default memo(Tr);
