import { IMovie } from "../models/mocks";

export function movieGenreCompare(a: IMovie, b: IMovie) {
  if (a.genres < b.genres) {
    return -1;
  }
  if (a.genres > b.genres) {
    return 1;
  }
  return 0;
}

export function movieReleaseDateCompare(a: IMovie, b: IMovie) {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
}
