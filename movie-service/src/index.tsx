import React, { MouseEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import ErrorBoundary from "./components/error/ErrorBoundary";

interface AppState {
  isMovieSelected: boolean;
}

const App = () => {
  const [appState, setAppState] = useState<AppState>({
    isMovieSelected: false,
  });

  const handleMovieCardClick = (event: MouseEvent<Element>) => {
    setAppState({
      isMovieSelected: true,
    });
  };

  const handleBackButtonClick = (event: MouseEvent<Element>) => {
    setAppState({
      isMovieSelected: false,
    });
  };

  return (
    <>
      <ErrorBoundary>
        <Header
          isMovieSelected={appState.isMovieSelected}
          onBackButtonClick={handleBackButtonClick}
        />
        <Main
          onMovieCardClick={handleMovieCardClick}
          isMovieSelected={appState.isMovieSelected}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
