import React from "react";
import ButtonComponent from "../common/ButtonComponent";

export interface FilterComponentProps {
  genres: string[];
}

const FilterComponent = (props: FilterComponentProps) => {
  const onGenreButtonClicked = (event: React.MouseEvent, genre: string) => {
    console.log(`button clicked: ${genre}`);
  };

  return (
    <div className="filter">
      {props.genres.map((genre) => (
        <ButtonComponent
          key={genre}
          text={genre}
          onButtonClicked={(event) => onGenreButtonClicked(event, genre)}
        />
      ))}
    </div>
  );
};

export default FilterComponent;
