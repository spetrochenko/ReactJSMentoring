import React from "react";
import { IMovie } from "../../models/mocks";
import ImageComponent from "../common/ImageComponent";
import TextComponent from "../common/TextComponent";
import MovieReleaseDateComponent from "./MovieReleaseDateComponent";

export interface MovieCardComponentProps {
  movie: IMovie;
}

const MovieCardComponent = (props: MovieCardComponentProps) => {
  return (
    <div className="movieCard">
      <ImageComponent url={props.movie.picture} className="movieCardPicture" />
      <div className="movieCardNameSection">
        <TextComponent text={props.movie.name} className="movieCardText" />
        <MovieReleaseDateComponent releaseYear={props.movie.releaseYear} />
      </div>
      <TextComponent
        text={`${props.movie.genres.join(", ")}`}
        className="movieCardGenres"
      />
    </div>
  );
};

export default MovieCardComponent;
