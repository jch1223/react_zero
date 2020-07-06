import React from "react";
import Tr from "./Tr";
import { TableContext } from "./MineSearch";

const Table = () => {
  const { tableData } = useContext(TableContext);

  return (
    <table>
      <Tr />
    </table>
  );
};

export default Table;
