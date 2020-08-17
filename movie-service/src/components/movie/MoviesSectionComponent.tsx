import React from "react";
import FilterComponent from "./FilterComponent";
import { getMockGenres, getMockCount, getMockMovies } from "../../models/mocks";
import SortingComponent from "./SortingComponent";
import DividerComponent from "../common/DividerComponent";
import ResultComponent from "./ResultComponent";
import MovieListComponent from "./MovieListComponent";

const MoviesSectionComponent = () => {
  return (
    <div className="moviesSection">
      <div className="filterSection">
        <FilterComponent genres={getMockGenres()} />
        <SortingComponent />
      </div>
      <DividerComponent />
      <div className="movies">
        <ResultComponent count={getMockCount()} />
        <MovieListComponent movies={getMockMovies()} />
      </div>
    </div>
  );
};

export default MoviesSectionComponent;
