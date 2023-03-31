/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chap_03/Library";
import Clock from "./chap_04/Clock";

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Library />
      <Clock />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);

reportWebVitals();
