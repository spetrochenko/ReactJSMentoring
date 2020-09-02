export const getMockGenres = () => {
  return ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
};

export const getMockSortParams = () => {
  return ["REALEASE DATE", "GENRE"];
};

export const getMockCount = () => {
  return 39;
};

export const getMockMovies = () => {
  return [
    buildMovie("1", "Pulp Fiction", ["Action & Adventures"], "2004"),
    buildMovie("2", "Bohemia Rapsody", ["Drama", "Biography", "Music"], "2003"),
    buildMovie("3", "Kill Bill 2", ["Oskar winning movie"], "1994"),
    buildMovie("4", "Avengers: Infinity War", ["Action & Adventures"], "2004"),
    buildMovie("5", "Inception", ["Action & Adventures"], "2003"),
    buildMovie("6", "Reservoir dogs", ["Oskar winning movie"], "1994"),
  ];
};

const buildMovie = (
  id: string,
  name: string,
  genres: string[],
  releaseYear: string,
  picture?: string,
) => {
  let movie: IMovie = {
    id: id,
    picture: picture,
    name: name,
    genres: genres,
    releaseYear: releaseYear,
  };
  return movie;
};

export interface IMovie {
  id: string;
  picture?: string;
  name: string;
  genres: string[];
  releaseYear: string;
  overview?: string;
  runtime?: string;
}

export class SortingConstants {
  static releaseDate: string = "REALEASE DATE";
  static genre: string = "GENRE";
}
