import React from "react";
import EditText from "../common/EditText";
import Text from "../common/Text";
import Button from "../common/Button";

const Search = () => {
  const onSearchButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="search">
      <Text text="FIND YOUR MOVIE" className="findTextLabel" />
      <div className="searchItems">
        <EditText placeholder="What do you want to watch?" />
        <Button
          className="searchButton"
          text="SEARCH"
          onButtonClicked={onSearchButtonClicked}
        />
      </div>
    </div>
  );
};

export default Search;
