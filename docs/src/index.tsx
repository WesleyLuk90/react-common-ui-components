import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

const container = document.createElement("div");
const body = document.querySelector("body");
if (body == null) {
    throw new Error("No body element");
}
body.appendChild(container);

ReactDOM.render(<App />, container);
