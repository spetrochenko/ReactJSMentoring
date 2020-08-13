import React from "react";
import EditTextComponent from "../common/EditTextComponent";
import TextComponent from "../common/TextComponent";

const SearchComponent = () => {
  return (
    <div className="search">
      <TextComponent text="FIND YOUR MOVIE" className="findTextLabel" />
      <EditTextComponent placeholder="What do you want to watch?" />
    </div>
  );
};

export default SearchComponent;
