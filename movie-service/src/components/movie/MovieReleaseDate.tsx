import React from "react";
import Text from "../common/Text";

export interface MovieReleaseDateProps {
  releaseYear: number;
}

const MovieReleaseDate = (props: MovieReleaseDateProps) => {
  return <Text text={`${props.releaseYear}`} className="movieReleaseDate" />;
};

export default MovieReleaseDate;
