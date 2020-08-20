import React from "react";
import LogoComponent from "./logoComponent";
import ButtonComponent from "../common/ButtonComponent";

const HeaderComponent = () => {
  const onAddMovieButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="header">
      <LogoComponent />
      <ButtonComponent
        className="addMovieButton"
        text="+ADD MOVIE"
        onButtonClicked={onAddMovieButtonClicked}
      />
    </div>
  );
};

export default HeaderComponent;
