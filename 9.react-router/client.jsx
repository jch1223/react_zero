import React from "react";
import ReactDOM from "react-dom";
import Games from "./Games";

import { hot } from "react-hot-loader/root";
const Hot = hot(Games);

ReactDOM.render(<Hot />, document.querySelector("#root"));
