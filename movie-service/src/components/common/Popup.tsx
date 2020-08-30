import React from "react";

export interface PopupProps {
  className?: string;
  children?: JSX.Element[];
}

const Popup = (props: PopupProps) => {
  return (
    <div className="popup">
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

export default Popup;
