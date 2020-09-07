import React, { ChangeEvent, useState } from "react";
import Filter from "./Filter";
import {
  getMockGenres,
  getMockCount,
  getMockMovies,
  SortingConstants,
} from "../../models/mocks";
import Sorting from "./Sorting";
import Divider from "../common/Divider";
import Result from "./Result";
import MovieList from "./MovieList";
import {
  movieGenreCompare,
  movieReleaseDateCompare,
} from "../../infrastracture/Comparison";

export interface MoviesSectionState {
  sortingParameter: string;
}

const MoviesSection = () => {
  const [sectionState, setSectionState] = useState<MoviesSectionState>({
    sortingParameter: SortingConstants.releaseDate,
  });

  const handleSortingValueChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === SortingConstants.releaseDate) {
      setSectionState({
        sortingParameter: SortingConstants.releaseDate,
      });
    } else {
      setSectionState({
        sortingParameter: SortingConstants.genre,
      });
    }
  };

  const sortMovies = () => {
    return getMockMovies().sort(
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
        <MovieList movies={sortMovies()} />
      </div>
    </div>
  );
};

export default MoviesSection;
