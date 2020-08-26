import React from "react";
import Text from "../common/Text";

export interface ResultProps {
  count: number;
}

const Result = (props: ResultProps) => {
  return (
    <div className="result">
      <Text text={`${props.count}`} className="resultCount" />
      <Text text="movies found" className="resultInfoText" />
    </div>
  );
};

export default Result;
