import React, { MouseEvent, useState } from "react";
import { IMovie } from "../../models/mocks";
import Image from "../common/Image";
import Text from "../common/Text";
import MovieReleaseDate from "./MovieReleaseDate";
import Button from "../common/Button";
import MovieOptions from "./MovieOptions";

export interface MovieCardProps {
  movie: IMovie;
  onEditButtonClick: (event: MouseEvent<Element>, movie: IMovie) => void;
  onDeleteButtonClick: (event: MouseEvent<Element>, movie: IMovie) => void;
  onMovieCardClick: (event: MouseEvent<Element>, movie: IMovie) => void;
}

export interface MovieCardState {
  isOptionsVisible: boolean;
}

const MovieCard = (props: MovieCardProps) => {
  const [cardState, setCardState] = useState<MovieCardState>({
    isOptionsVisible: false,
  });

  const onDotsButtonClick = () => {
    setCardState({
      isOptionsVisible: !cardState.isOptionsVisible,
    });
  };

  const renderDots = () => {
    return (
      <Button onButtonClicked={onDotsButtonClick} className="movieCardDots" />
    );
  };

  const renderOptions = () => {
    return (
      <MovieOptions
        onCloseButtonClicked={onDotsButtonClick}
        onDeleteButtonClicked={(event) =>
          props.onDeleteButtonClick(event, props.movie)
        }
        onEditButtonClicked={(event) =>
          props.onEditButtonClick(event, props.movie)
        }
      />
    );
  };

  return (
    <div
      className="movieCard"
      onClick={(event) => props.onMovieCardClick(event, props.movie)}
    >
      <div className="imageWrapper">
        <Image url={props.movie.picture} />
        {cardState.isOptionsVisible ? renderOptions() : renderDots()}
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
