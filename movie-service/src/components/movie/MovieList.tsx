import React from "react";
import Text from "../common/Text";
import { IMovie } from "../../models/mocks";
import MovieCard from "./MovieCard";

export interface MovieListProps {
  movies: IMovie[];
}

const MovieList = (props: MovieListProps) => {
  const renderMovies = () => {
    return (
      <div className="movieList">
        {props.movies.map((iMovie) => (
          <MovieCard key={iMovie.name} movie={iMovie} />
        ))}
      </div>
    );
  };

  return (
    <>
      {props.movies.length == 0 ? (
        <Text text="No Movie Found" className="noMovieFound" />
      ) : (
        renderMovies()
      )}
    </>
  );
};

export default MovieList;
