import React from "react";
import EditTextComponent from "../common/EditTextComponent";
import TextComponent from "../common/TextComponent";
import ButtonComponent from "../common/ButtonComponent";

const SearchComponent = () => {
  const onSearchButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="search">
      <TextComponent text="FIND YOUR MOVIE" className="findTextLabel" />
      <div className="searchItems">
        <EditTextComponent placeholder="What do you want to watch?" />
        <ButtonComponent
          className="searchButton"
          text="SEARCH"
          onButtonClicked={onSearchButtonClicked}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
