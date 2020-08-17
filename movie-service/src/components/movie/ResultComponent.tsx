import React from "react";
import TextComponent from "../common/TextComponent";

export interface ResultComponentProps {
  count: number;
}

const ResultComponent = (props: ResultComponentProps) => {
  return (
    <div className="result">
      <TextComponent text={`${props.count}`} className="resultCount" />
      <TextComponent text="movies found" className="resultInfoText" />
    </div>
  );
};

export default ResultComponent;
