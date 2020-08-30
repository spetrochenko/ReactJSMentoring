import React, { Component, MouseEvent } from "react";
import Text from "../common/Text";
import { IMovie } from "../../models/mocks";
import MovieCard from "./MovieCard";

export interface MovieListProps {
  movies: IMovie[];
}

export interface MovieListState {
  isEditPopupVisible: boolean;
  isDeletePopupVisible: boolean;
}

export default class MovieList extends Component<
  MovieListProps,
  MovieListState
> {
  constructor(props: MovieListProps) {
    super(props);
    this.state = {
      isEditPopupVisible: false,
      isDeletePopupVisible: false,
    };
  }

  onEditButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    console.log(movie);
  };

  onDeleteButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    console.log(movie);
  };

  renderMovies = () => {
    return (
      <div className="movieList">
        {this.props.movies.map((iMovie) => (
          <MovieCard
            key={iMovie.name}
            movie={iMovie}
            onEditButtonClick={this.onEditButtonClicked}
            onDeleteButtonClick={this.onDeleteButtonClicked}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <>
        {this.props.movies.length == 0 ? (
          <Text text="No Movie Found" className="noMovieFound" />
        ) : (
          this.renderMovies()
        )}
      </>
    );
  }
}
