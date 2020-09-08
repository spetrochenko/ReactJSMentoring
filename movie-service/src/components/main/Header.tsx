import React, { useState, MouseEvent, MouseEventHandler } from "react";
import Logo from "./Logo";
import Button from "../common/Button";
import AddEditPopup from "../movie/AddEditPopup";

export interface HeaderProps {
  isMovieSelected: boolean;
  onBackButtonClick: MouseEventHandler;
}

export interface HeaderState {
  isPopupVisible: boolean;
}

const Header = (props: HeaderProps) => {
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

  const onBackButtonClick = (event: MouseEvent) => {
    props.onBackButtonClick(event);
  };

  return (
    <>
      <div className="header">
        <Logo />
        {props.isMovieSelected ? (
          <Button className="backButton" onButtonClicked={onBackButtonClick} />
        ) : (
          <Button
            className="addMovieButton"
            text="+ADD MOVIE"
            onButtonClicked={onAddMovieButtonClicked}
          />
        )}
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
