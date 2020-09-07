import React, { useState, MouseEvent } from "react";
import Logo from "./Logo";
import Button from "../common/Button";
import AddEditPopup from "../movie/AddEditPopup";

export interface HeaderState {
  isPopupVisible: boolean;
}

const Header = () => {
  const [headerState, setHeaderState] = useState<HeaderState>({
    isPopupVisible: false,
  });

  const hidePopup = () => {
    setHeaderState({
      isPopupVisible: false,
    });
  };

  const onAddMovieButtonClicked = (event: MouseEvent) => {
    setHeaderState({
      isPopupVisible: true,
    });
  };

  const onClosePopupButtonClick = (event: MouseEvent) => {
    hidePopup();
  };

  const onResetButtonClick = (event: MouseEvent) => {
    console.log("reset");
  };

  const onSubmitButtonClick = (event: MouseEvent) => {
    hidePopup();
  };

  return (
    <>
      <div className="header">
        <Logo />
        <Button
          className="addMovieButton"
          text="+ADD MOVIE"
          onButtonClicked={onAddMovieButtonClicked}
        />
      </div>
      {headerState.isPopupVisible ? (
        <AddEditPopup
          isAddPopup={true}
          onCloseButtonClick={onClosePopupButtonClick}
          onResetButtonClick={onResetButtonClick}
          onSubmitButtonClick={onSubmitButtonClick}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
