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
      <Button text="" onButtonClicked={props.onCloseButtonClicked} />
      <Button text="Edit" onButtonClicked={props.onEditButtonClicked} />
      <Button text="Delete" onButtonClicked={props.onDeleteButtonClicked} />
    </div>
  );
};

export default MovieOptions;
