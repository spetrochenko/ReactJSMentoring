import React, { Component, MouseEvent } from "react";
import Logo from "./Logo";
import Button from "../common/Button";
import AddEditPopup from "../movie/AddEditPopup";

export interface HeaderProps {}

export interface HeaderState {
  isPopupVisible: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isPopupVisible: false,
    };
  }

  hidePopup = () => {
    this.setState({
      isPopupVisible: false,
    });
  };

  onAddMovieButtonClicked = (event: MouseEvent) => {
    this.setState({
      isPopupVisible: true,
    });
  };

  onClosePopupButtonClick = (event: MouseEvent) => {
    this.hidePopup();
  };

  onResetButtonClick = (event: MouseEvent) => {
    console.log("reset");
  };

  onSubmitButtonClick = (event: MouseEvent) => {
    console.log("submit");
    this.hidePopup();
  };

  render() {
    return (
      <>
        <div className="header">
          <Logo />
          <Button
            className="addMovieButton"
            text="+ADD MOVIE"
            onButtonClicked={this.onAddMovieButtonClicked}
          />
        </div>
        {this.state.isPopupVisible ? (
          <AddEditPopup
            isAddPopup={true}
            onCloseButtonClick={this.onClosePopupButtonClick}
            onResetButtonClick={this.onResetButtonClick}
            onSubmitButtonClick={this.onSubmitButtonClick}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Header;
