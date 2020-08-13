import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import MainComponent from "./components/main/MainComponent";
import FooterComponent from "./components/main/FooterComponent";
import HeaderComponent from "./components/main/HeaderComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
