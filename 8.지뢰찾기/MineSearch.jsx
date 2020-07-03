import React, { useReducer } from "react";
import Table from "./Table";

const initialState = {
  tableData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <Form /> */}
      <div>{state.timer}</div>
      <Table></Table>
      <div>{}</div>
    </>
  );
};

export default MineSearch;
