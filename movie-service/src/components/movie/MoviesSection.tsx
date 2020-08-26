import React from "react";
import Filter from "./Filter";
import { getMockGenres, getMockCount, getMockMovies } from "../../models/mocks";
import Sorting from "./Sorting";
import Divider from "../common/Divider";
import Result from "./Result";
import MovieList from "./MovieList";

const MoviesSection = () => {
  return (
    <div className="moviesSection">
      <div className="filterSection">
        <Filter genres={getMockGenres()} />
        <Sorting />
      </div>
      <Divider />
      <div className="movies">
        <Result count={getMockCount()} />
        <MovieList movies={getMockMovies()} />
      </div>
    </div>
  );
};

export default MoviesSection;
