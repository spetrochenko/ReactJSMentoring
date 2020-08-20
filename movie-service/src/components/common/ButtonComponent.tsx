import React, { MouseEvent, MouseEventHandler } from "react";

export interface ButtonComponentProps {
  className?: string;
  onButtonClicked: MouseEventHandler;
  text?: string;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <>
      <button className={props.className} onClick={props.onButtonClicked}>
        {props.text}
      </button>
    </>
  );
};

export default ButtonComponent;
