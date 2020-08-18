export const getMockGenres = () => {
  return ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
};

export const getMockSortParams = () => {
  return ["REALEASE DATE, GENRE"];
};

export const getMockCount = () => {
  return 39;
};

export const getMockMovies = () => {
  return [
    buildMovie("Pulp Fiction", ["Action & Adventures"], 2004),
    buildMovie("Bohemia Rapsody", ["Drama", "Biography", "Music"], 2003),
    buildMovie("Kill Bill 2", ["Oskar winning movie"], 1994),
    buildMovie("Avengers: Infinity War", ["Action & Adventures"], 2004),
    buildMovie("Inception", ["Action & Adventures"], 2003),
    buildMovie("Reservoir dogs", ["Oskar winning movie"], 1994),
  ];
};

const buildMovie = (
  name: string,
  genres: string[],
  releaseYear: number,
  picture?: string,
) => {
  let movie: IMovie = {
    picture: picture,
    name: name,
    genres: genres,
    releaseYear: releaseYear,
  };
  return movie;
};

export interface IMovie {
  picture?: string;
  name: string;
  genres: string[];
  releaseYear: number;
}
