import React from "react";
import { IMovie } from "../../models/mocks";
import ImageComponent from "../common/ImageComponent";
import TextComponent from "../common/TextComponent";
import MovieReleaseDateComponent from "./MovieReleaseDateComponent";
import ButtonComponent from "../common/ButtonComponent";

export interface MovieCardComponentProps {
  movie: IMovie;
}

const MovieCardComponent = (props: MovieCardComponentProps) => {
  const onDotsButtonClicked = (event: React.MouseEvent) => {
    console.log("button clicked");
  };

  return (
    <div className="movieCard">
      <div className="imageWrapper">
        <ImageComponent
          url={props.movie.picture}
          className="movieCardPicture"
        />
        <ButtonComponent
          onButtonClicked={onDotsButtonClicked}
          className="movieCardDots"
        />
      </div>
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
