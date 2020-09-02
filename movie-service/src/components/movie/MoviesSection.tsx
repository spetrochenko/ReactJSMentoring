import React, { Component, ChangeEvent } from "react";
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

export interface MoviesSectionProps {}

export interface MoviesSectionState {
  sortingParameter: string;
}

export default class MoviesSection extends Component<
  MoviesSectionProps,
  MoviesSectionState
> {
  constructor(props: MoviesSectionProps) {
    super(props);
    this.state = {
      sortingParameter: SortingConstants.releaseDate,
    };
  }

  handleSortingValueChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === SortingConstants.releaseDate) {
      this.setState({
        sortingParameter: SortingConstants.releaseDate,
      });
    } else {
      this.setState({
        sortingParameter: SortingConstants.genre,
      });
    }
  };

  sortMovies = () => {
    return getMockMovies().sort(
      this.state.sortingParameter === SortingConstants.releaseDate
        ? movieReleaseDateCompare
        : movieGenreCompare,
    );
  };

  render() {
    return (
      <div className="moviesSection">
        <div className="filterSection">
          <Filter genres={getMockGenres()} />
          <Sorting onSortingValueChanged={this.handleSortingValueChanged} />
        </div>
        <Divider />
        <div className="movies">
          <Result count={getMockCount()} />
          <MovieList movies={this.sortMovies()} />
        </div>
      </div>
    );
  }
}
