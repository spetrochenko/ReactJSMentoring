import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import Greeting from "./components/Greeting";

const App = () => {
  return <Greeting />;
};

ReactDOM.render(<App />, document.getElementById("root"));
