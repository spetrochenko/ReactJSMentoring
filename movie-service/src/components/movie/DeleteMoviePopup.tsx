import React, { MouseEventHandler, MouseEvent } from "react";
import { IMovie } from "../../models/mocks";
import Popup from "../common/Popup";
import Button from "../common/Button";
import Text from "../common/Text";

export interface DeleteMoviePopupProps {
  movie: IMovie;
  onCloseButtonClick: MouseEventHandler;
  onConfirmClicked: (event: MouseEvent<Element>, movie: IMovie) => void;
}

const DeleteMoviePopup = (props: DeleteMoviePopupProps) => {
  return (
    <Popup className="deleteMoviePopup">
      <Button
        className="popupClose"
        onButtonClicked={props.onCloseButtonClick}
      />
      <div className="deleteMovieContent">
        <Text text="DELETE MOVIE" className="popupTitle" />
        <Text
          text="Are you sure you want to delete this movie?"
          className="popupText"
        />
      </div>
      <div className="movieButtonContainer">
        <Button
          text="CONFIRM"
          className="submitButton"
          onButtonClicked={(event) =>
            props.onConfirmClicked(event, props.movie)
          }
        />
      </div>
    </Popup>
  );
};

export default DeleteMoviePopup;
