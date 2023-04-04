import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Library from "./chap_03/Library";
// import Clock from "./chap_04/Clock";
import CommentList from "./chap_05/CommentList";

ReactDOM.render(
  <React.StrictMode>
    {/* <Library /> */}
    {/* <Clock /> */}
    <CommentList />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
