import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import MainComponent from "./components/main/MainComponent";

const App = () => {
  return <MainComponent />;
};

ReactDOM.render(<App />, document.getElementById("root"));
