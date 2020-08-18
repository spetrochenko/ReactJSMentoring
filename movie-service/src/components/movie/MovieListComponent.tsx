import React from "react";
import TextComponent from "../common/TextComponent";
import { IMovie } from "../../models/mocks";
import MovieCardComponent from "./MovieCardComponent";

export interface MovieListComponentProps {
  movies: IMovie[];
}

const MovieListComponent = (props: MovieListComponentProps) => {
  const renderMovies = () => {
    return (
      <div className="movieList">
        {props.movies.map((iMovie) => (
          <MovieCardComponent key={iMovie.name} movie={iMovie} />
        ))}
      </div>
    );
  };

  return (
    <>
      {props.movies.length == 0 ? (
        <TextComponent text="No Movie Found" className="noMovieFound" />
      ) : (
        renderMovies()
      )}
    </>
  );
};

export default MovieListComponent;
