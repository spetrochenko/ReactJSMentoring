import React, { MouseEvent, Component } from "react";
import { IMovie } from "../../models/mocks";
import Image from "../common/Image";
import Text from "../common/Text";
import MovieReleaseDate from "./MovieReleaseDate";
import Button from "../common/Button";
import MovieOptions from "./MovieOptions";

export interface MovieCardProps {
  movie: IMovie;
  onEditButtonClick: (event: MouseEvent<Element>, movie: IMovie) => void;
  onDeleteButtonClick: (event: MouseEvent<Element>, movie: IMovie) => void;
}

export interface MovieCardState {
  isOptionsVisible: boolean;
}

class MovieCard extends Component<MovieCardProps, MovieCardState> {
  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      isOptionsVisible: false,
    };
  }

  onDotsButtonClick = () => {
    this.setState({
      isOptionsVisible: !this.state.isOptionsVisible,
    });
  };

  renderDots = () => {
    return (
      <Button
        onButtonClicked={this.onDotsButtonClick}
        className="movieCardDots"
      />
    );
  };

  renderOptions = () => {
    return (
      <MovieOptions
        onCloseButtonClicked={this.onDotsButtonClick}
        onDeleteButtonClicked={(event) =>
          this.props.onDeleteButtonClick(event, this.props.movie)
        }
        onEditButtonClicked={(event) =>
          this.props.onEditButtonClick(event, this.props.movie)
        }
      />
    );
  };

  render() {
    return (
      <div className="movieCard">
        <div className="imageWrapper">
          <Image url={this.props.movie.picture} className="movieCardPicture" />
          {this.state.isOptionsVisible
            ? this.renderOptions()
            : this.renderDots()}
        </div>
        <div className="movieCardNameSection">
          <Text text={this.props.movie.name} className="movieCardText" />
          <MovieReleaseDate releaseYear={this.props.movie.releaseYear} />
        </div>
        <Text
          text={`${this.props.movie.genres.join(", ")}`}
          className="movieCardGenres"
        />
      </div>
    );
  }
}

export default MovieCard;
