import React from "react";
import { render } from "react-dom";
import "./styles/style.css";
import Greeting from "./components/Greeting";

const App = () => {
  return <Greeting />;
};

render(<App />, document.getElementById("root"));
