import React from "react";

export interface TextComponentProps {
  className?: string;
  text: string;
}

const TextComponent = (props: TextComponentProps) => {
  return <p className={props.className}>{props.text}</p>;
};

export default TextComponent;
