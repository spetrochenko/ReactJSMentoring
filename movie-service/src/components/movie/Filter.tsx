import React from "react";
import Button from "../common/Button";

export interface FilterProps {
  genres: string[];
}

const Filter = (props: FilterProps) => {
  const onGenreButtonClicked = (event: React.MouseEvent, genre: string) => {
    console.log(`button clicked: ${genre}`);
  };

  return (
    <div className="filter">
      {props.genres.map((genre) => (
        <Button
          key={genre}
          text={genre}
          onButtonClicked={(event) => onGenreButtonClicked(event, genre)}
        />
      ))}
    </div>
  );
};

export default Filter;
