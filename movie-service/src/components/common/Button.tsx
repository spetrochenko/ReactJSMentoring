import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  onButtonClicked: MouseEventHandler;
  text?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={props.className} onClick={props.onButtonClicked}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
