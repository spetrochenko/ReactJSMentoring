import React, { MouseEventHandler } from "react";
import Popup from "../common/Popup";
import Button from "../common/Button";
import Text from "../common/Text";
import EditText from "../common/EditText";
import { IMovie, getMockGenres } from "../../models/mocks";
import Dropdown from "../common/Dropdown";

export interface AddEditPopupProps {
  isAddPopup: boolean;
  onCloseButtonClick: MouseEventHandler;
  onResetButtonClick: MouseEventHandler;
  onSubmitButtonClick: MouseEventHandler;
  movie?: IMovie;
}

const AddEditPopup = (props: AddEditPopupProps) => {
  return (
    <Popup className={props.isAddPopup ? "addMoviePopup" : "editMoviePopup"}>
      <Button
        className="popupClose"
        onButtonClicked={props.onCloseButtonClick}
      />
      <div className="addMovieContent">
        <Text
          text={props.isAddPopup ? "ADD MOVIE" : "EDIT MOVIE"}
          className="popupTitle"
        />
        {!props.isAddPopup ? (
          <>
            <Text text="MOVIE ID" className="popupLabel" />
            <Text text={props.movie.id} className="movieId" />
          </>
        ) : (
          <></>
        )}
        <Text text="TITLE" className="popupLabel" />
        <EditText
          placeholder="Title"
          text={props.movie?.name}
          className="popupEdit"
        />
        <Text text="RELEASE DATE" className="popupLabel" />
        <EditText
          placeholder="Release date"
          text={props.movie?.releaseYear}
          className="popupEdit"
        />
        <Text text="MOVIE URL" className="popupLabel" />
        <EditText
          placeholder="Movie URL here"
          text={props.movie?.picture}
          className="popupEdit"
        />
        <Text text="GENRE" className="popupLabel" />
        <Dropdown values={getMockGenres()} className="popupDropdown" />
        <Text text="OVERVIEW" className="popupLabel" />
        <EditText
          placeholder="Overview here"
          text={props.movie?.overview}
          className="popupEdit"
        />
        <Text text="RUNTIME" className="popupLabel" />
        <EditText
          placeholder="Runtime here"
          text={props.movie?.runtime}
          className="popupEdit"
        />
      </div>
      <div className="movieButtonContainer">
        <Button
          text="RESET"
          className="resetButton"
          onButtonClicked={props.onResetButtonClick}
        />
        <Button
          text={props.isAddPopup ? "SUBMIT" : "SAVE"}
          className="submitButton"
          onButtonClicked={props.onSubmitButtonClick}
        />
      </div>
    </Popup>
  );
};

export default AddEditPopup;
