import React from "react";
import { IMovie } from "../../models/mocks";
import Image from "../common/Image";
import Text from "../common/Text";
import MovieReleaseDate from "./MovieReleaseDate";
import Button from "../common/Button";

export interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: MovieCardProps) => {
  const onDotsButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="movieCard">
      <div className="imageWrapper">
        <Image url={props.movie.picture} className="movieCardPicture" />
        <Button
          onButtonClicked={onDotsButtonClicked}
          className="movieCardDots"
        />
      </div>
      <div className="movieCardNameSection">
        <Text text={props.movie.name} className="movieCardText" />
        <MovieReleaseDate releaseYear={props.movie.releaseYear} />
      </div>
      <Text
        text={`${props.movie.genres.join(", ")}`}
        className="movieCardGenres"
      />
    </div>
  );
};

export default MovieCard;
