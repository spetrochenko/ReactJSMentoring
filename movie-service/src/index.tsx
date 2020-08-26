import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import ErrorBoundary from "./components/error/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
