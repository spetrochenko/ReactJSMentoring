import React, {
  MouseEvent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from "react";
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
  sortingParameter?: string;
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
    sortMoviesMemoizedCallback(event.currentTarget.value);
  };

  const sortMovies = (sortingParameter: string) => {
    setSectionState({
      sortingParameter: sortingParameter,
      movieList: getMockMovies().sort(
        sortingParameter === SortingConstants.releaseDate
          ? movieReleaseDateCompare
          : movieGenreCompare,
      ),
    });
  };

  const sortMoviesMemoizedCallback = useCallback(
    (sortingParameter: string) => {
      sortMovies(sortingParameter);
    },
    [setSectionState],
  );

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
          movies={sectionState.movieList}
          onMovieCardClick={props.onMovieCardClick}
        />
      </div>
    </div>
  );
};

export default MoviesSection;
