import React from "react";
import TextComponent from "../common/TextComponent";

export interface FilterComponentProps {
  genres: string[];
}

const FilterComponent = (props: FilterComponentProps) => {
  return (
    <div className="filter">
      {props.genres.map((genre) => (
        <TextComponent key={genre} text={genre} />
      ))}
    </div>
  );
};

export default FilterComponent;
