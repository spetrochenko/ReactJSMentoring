import React from "react";

export interface TextProps {
  className?: string;
  text: string;
}

const Text = (props: TextProps) => {
  return <p className={props.className}>{props.text}</p>;
};

export default Text;
