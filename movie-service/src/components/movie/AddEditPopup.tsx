import React, { MouseEventHandler } from "react";
import Popup from "../common/Popup";
import Button from "../common/Button";
import Text from "../common/Text";
import EditText from "../common/EditText";

export interface AddEditPopupProps {
  isAddPopup: boolean;
  onCloseButtonClick: MouseEventHandler;
  onResetButtonClick: MouseEventHandler;
  onSubmitButtonClick: MouseEventHandler;
}

const AddEditPopup = (props: AddEditPopupProps) => {
  return (
    <Popup className="addMoviePopup">
      <Button
        className="popupClose"
        onButtonClicked={props.onCloseButtonClick}
      />
      <div className="addMovieContent">
        <Text
          text={props.isAddPopup ? "ADD MOVIE" : "EDIT MOVIE"}
          className="popupTitle"
        />
        {!props.isAddPopup ?? <Text text="MOVIE ID" className="popupLabel" />}
        <Text text="TITLE" className="popupLabel" />
        <EditText placeholder="Title" className="popupEdit" />
        <Text text="RELEASE DATE" className="popupLabel" />
        <EditText placeholder="Title" className="popupEdit" />
        <Text text="MOVIE URL" className="popupLabel" />
        <EditText placeholder="Movie URL here" className="popupEdit" />
        <Text text="GENRE" className="popupLabel" />
        <EditText placeholder="Genre" className="popupEdit" />
        <Text text="OVERVIEW" className="popupLabel" />
        <EditText placeholder="Overview here" className="popupEdit" />
        <Text text="RUNTIME" className="popupLabel" />
        <EditText placeholder="Runtime here" className="popupEdit" />
      </div>
      <div className="addMovieButtonContainer">
        <Button
          text="RESET"
          className="resetButton"
          onButtonClicked={props.onResetButtonClick}
        />
        <Button
          text="SUBMIT"
          className="submitButton"
          onButtonClicked={props.onSubmitButtonClick}
        />
      </div>
    </Popup>
  );
};

export default AddEditPopup;
