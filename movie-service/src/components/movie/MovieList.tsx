import React, { useState, MouseEvent } from "react";
import Text from "../common/Text";
import { IMovie } from "../../models/mocks";
import MovieCard from "./MovieCard";
import AddEditPopup from "./AddEditPopup";
import DeleteMoviePopup from "./DeleteMoviePopup";

export interface MovieListProps {
  movies: IMovie[];
  onMovieCardClick: (event: MouseEvent<Element>, movie: IMovie) => void;
}

export interface MovieListState {
  isEditPopupVisible?: boolean;
  isDeletePopupVisible?: boolean;
  selectedMovie?: IMovie;
}

const MovieList = (props: MovieListProps) => {
  const [movieListState, setMovieListState] = useState<MovieListState>({
    isEditPopupVisible: false,
    isDeletePopupVisible: false,
    selectedMovie: null,
  });

  const onEditButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    setMovieListState({
      isEditPopupVisible: true,
      selectedMovie: movie,
    });
  };

  const onDeleteButtonClicked = (event: MouseEvent<Element>, movie: IMovie) => {
    setMovieListState({
      isDeletePopupVisible: true,
      selectedMovie: movie,
    });
  };

  const onCloseEditPopupButtonClick = () => {
    setMovieListState({
      isEditPopupVisible: false,
    });
  };

  const onResetButtonClick = () => {
    console.log("reset");
  };

  const onSubmitEditButtonClick = () => {
    setMovieListState({
      isEditPopupVisible: false,
    });
  };

  const onCloseDeleteButtonClick = () => {
    setMovieListState({
      isDeletePopupVisible: false,
    });
  };

  const onConfirmButtonClick = (event: MouseEvent<Element>, movie: IMovie) => {
    setMovieListState({
      isDeletePopupVisible: false,
      selectedMovie: movie,
    });
  };

  const renderMovies = () => {
    return (
      <>
        <div className="movieList">
          {props.movies.map((iMovie) => (
            <MovieCard
              key={iMovie.id}
              movie={iMovie}
              onEditButtonClick={onEditButtonClicked}
              onDeleteButtonClick={onDeleteButtonClicked}
              onMovieCardClick={props.onMovieCardClick}
            />
          ))}
        </div>
        {movieListState.isEditPopupVisible ? (
          <AddEditPopup
            isAddPopup={false}
            onCloseButtonClick={onCloseEditPopupButtonClick}
            onResetButtonClick={onResetButtonClick}
            onSubmitButtonClick={onSubmitEditButtonClick}
            movie={movieListState.selectedMovie}
          />
        ) : (
          <></>
        )}
        {movieListState.isDeletePopupVisible ? (
          <DeleteMoviePopup
            movie={movieListState.selectedMovie}
            onCloseButtonClick={onCloseDeleteButtonClick}
            onConfirmClicked={onConfirmButtonClick}
          />
        ) : (
          <></>
        )}
      </>
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
