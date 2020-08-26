import React from "react";
import Logo from "./Logo";
import Button from "../common/Button";

const Header = () => {
  const onAddMovieButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="header">
      <Logo />
      <Button
        className="addMovieButton"
        text="+ADD MOVIE"
        onButtonClicked={onAddMovieButtonClicked}
      />
    </div>
  );
};

export default Header;
