import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import MainComponent from "./components/main/MainComponent";
import FooterComponent from "./components/main/FooterComponent";
import HeaderComponent from "./components/main/HeaderComponent";
import ErrorBoundary from "./components/error/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <HeaderComponent />
        <MainComponent />
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
