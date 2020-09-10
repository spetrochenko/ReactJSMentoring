import React from "react";
import { IMovie } from "../../models/mocks";
import Image from "../common/Image";
import Text from "../common/Text";

export interface MovieDetailsProps {
  movie: IMovie;
}

const MovieDetails = (props: MovieDetailsProps) => {
  return (
    <div className="movieDetails">
      <Image url={props.movie.picture} className="movieDetailsImage" />
      <div className="mainSection">
        <div className="movieDetailsSection">
          <Text text={props.movie.name} className="movieDetailsName" />
          <Text text={props.movie.rating} className="movieDetailsRating" />
        </div>
        <Text
          text={props.movie.genres.join(", ")}
          className="movieDetailsGenres"
        />
        <div className="movieDetailsSection">
          <Text text={props.movie.releaseYear} className="movieDetailsYear" />
          <Text
            text={`${props.movie.duration} min`}
            className="movieDetailsDuration"
          />
        </div>
        <Text
          text={props.movie.description}
          className="movieDetailsDescription"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
