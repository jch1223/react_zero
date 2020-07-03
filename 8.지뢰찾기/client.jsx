import React from "react";
import ReactDOM from "react-dom";
import MineSearch from "./MineSearch";

import { hot } from "react-hot-loader/root";
const Hot = hot(MineSearch);

ReactDOM.render(<Hot />, document.querySelector("#root"));
