import React, { MouseEvent, ChangeEvent, useState, useEffect } from "react";
import Filter from "./Filter";
import {
  getMockGenres,
  getMockCount,
  getMockMovies,
  SortingConstants,
  IMovie,
} from "../../models/mocks";
import Sorting from "./Sorting";
import Divider from "../common/Divider";
import Result from "./Result";
import MovieList from "./MovieList";
import {
  movieGenreCompare,
  movieReleaseDateCompare,
} from "../../infrastracture/Comparison";

export interface MoviesSectionProps {
  onMovieCardClick: (event: MouseEvent<Element>, movie: IMovie) => void;
}

export interface MoviesSectionState {
  sortingParameter: string;
  movieList?: IMovie[];
}

const MoviesSection = (props: MoviesSectionProps) => {
  const [sectionState, setSectionState] = useState<MoviesSectionState>({
    sortingParameter: SortingConstants.releaseDate,
    movieList: new Array<IMovie>(),
  });

  useEffect(() => {
    setSectionState({
      sortingParameter: SortingConstants.releaseDate,
      movieList: getMockMovies(),
    });
  }, []);

  const handleSortingValueChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === SortingConstants.releaseDate) {
      setSectionState({
        sortingParameter: SortingConstants.releaseDate,
        movieList: getMockMovies(),
      });
    } else {
      setSectionState({
        sortingParameter: SortingConstants.genre,
        movieList: getMockMovies(),
      });
    }
  };

  const sortMovies = () => {
    return sectionState.movieList.sort(
      sectionState.sortingParameter === SortingConstants.releaseDate
        ? movieReleaseDateCompare
        : movieGenreCompare,
    );
  };

  return (
    <div className="moviesSection">
      <div className="filterSection">
        <Filter genres={getMockGenres()} />
        <Sorting onSortingValueChanged={handleSortingValueChanged} />
      </div>
      <Divider />
      <div className="movies">
        <Result count={getMockCount()} />
        <MovieList
          movies={sortMovies()}
          onMovieCardClick={props.onMovieCardClick}
        />
      </div>
    </div>
  );
};

export default MoviesSection;
