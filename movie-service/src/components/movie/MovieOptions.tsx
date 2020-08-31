import React, { MouseEventHandler } from "react";
import Button from "../common/Button";

export interface MovieOptionsProps {
  onEditButtonClicked: MouseEventHandler;
  onDeleteButtonClicked: MouseEventHandler;
  onCloseButtonClicked: MouseEventHandler;
}

const MovieOptions = (props: MovieOptionsProps) => {
  return (
    <div className="movieOptions">
      <Button
        text="&times;"
        className="closeMovieOptionsButton"
        onButtonClicked={props.onCloseButtonClicked}
      />
      <Button
        text="Edit"
        className="movieOptionsButton"
        onButtonClicked={props.onEditButtonClicked}
      />
      <Button
        text="Delete"
        className="movieOptionsButton"
        onButtonClicked={props.onDeleteButtonClicked}
      />
    </div>
  );
};

export default MovieOptions;
