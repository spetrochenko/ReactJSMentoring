import React from "react";
import TextComponent from "../common/TextComponent";

export interface MovieReleaseDateComponentProps {
  releaseYear: number;
}

const MovieReleaseDateComponent = (props: MovieReleaseDateComponentProps) => {
  return (
    <TextComponent text={`${props.releaseYear}`} className="movieReleaseDate" />
  );
};

export default MovieReleaseDateComponent;
