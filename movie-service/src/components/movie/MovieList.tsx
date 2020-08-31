import React, { Component, MouseEvent } from "react";
import Text from "../common/Text";
import { IMovie } from "../../models/mocks";
import MovieCard from "./MovieCard";
import AddEditPopup from "./AddEditPopup";
import DeleteMoviePopup from "./DeleteMoviePopup";

export interface MovieListProps {
  movies: IMovie[];
}

export interface MovieListState {
  isEditPopupVisible: boolean;
  isDeletePopupVisible: boolean;
  selectedMovie?: IMovie;
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
      selectedMovie: null,
    };
  }

  onEditButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    this.setState({
      isEditPopupVisible: true,
      selectedMovie: movie,
    });
  };

  onDeleteButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    this.setState({
      isDeletePopupVisible: true,
      selectedMovie: movie,
    });
  };

  onCloseEditPopupButtonClick = () => {
    this.setState({
      isEditPopupVisible: false,
    });
  };

  onResetButtonClick = () => {
    console.log("reset");
  };

  onSubmitEditButtonClick = () => {
    this.setState({
      isEditPopupVisible: false,
    });
  };

  onCloseDeleteButtonClick = () => {
    this.setState({ isDeletePopupVisible: false });
  };

  onConfirmButtonClick = (event: MouseEvent<Element>, movie: IMovie) => {
    console.log(`Delete : ${movie}`);
    this.setState({ isDeletePopupVisible: false, selectedMovie: movie });
  };

  renderMovies = () => {
    return (
      <>
        <div className="movieList">
          {this.props.movies.map((iMovie) => (
            <MovieCard
              key={iMovie.id}
              movie={iMovie}
              onEditButtonClick={this.onEditButtonClicked}
              onDeleteButtonClick={this.onDeleteButtonClicked}
            />
          ))}
        </div>
        {this.state.isEditPopupVisible ? (
          <AddEditPopup
            isAddPopup={false}
            onCloseButtonClick={this.onCloseEditPopupButtonClick}
            onResetButtonClick={this.onResetButtonClick}
            onSubmitButtonClick={this.onSubmitEditButtonClick}
            movie={this.state.selectedMovie}
          />
        ) : (
          <></>
        )}
        {this.state.isDeletePopupVisible ? (
          <DeleteMoviePopup
            movie={this.state.selectedMovie}
            onCloseButtonClick={this.onCloseDeleteButtonClick}
            onConfirmClicked={this.onConfirmButtonClick}
          />
        ) : (
          <></>
        )}
      </>
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
