import React, { MouseEvent, useState } from "react";
import Search from "./Search";
import MoviesSection from "../movie/MoviesSection";
import { IMovie } from "../../models/mocks";
import MovieDetails from "../movie/MovieDetails";

interface MainState {
  selectedMovie: IMovie;
}

export interface MainProps {
  isMovieSelected: boolean;
  onMovieCardClick: (event: MouseEvent<Element>) => void;
}

const Main = (props: MainProps) => {
  const [mainState, setMainState] = useState<MainState>({
    selectedMovie: null,
  });

  const handleMovieCardClick = (event: MouseEvent<Element>, movie: IMovie) => {
    setMainState({
      selectedMovie: movie,
    });

    props.onMovieCardClick(event);
  };

  return (
    <>
      {props.isMovieSelected ? (
        <MovieDetails movie={mainState.selectedMovie} />
      ) : (
        <Search />
      )}

      <MoviesSection onMovieCardClick={handleMovieCardClick} />
    </>
  );
};

export default Main;
