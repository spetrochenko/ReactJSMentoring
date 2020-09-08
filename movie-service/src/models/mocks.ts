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
    buildMovie(
      "1",
      "Pulp Fiction",
      ["Action & Adventures"],
      "2004",
      "4.3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      143,
    ),
    buildMovie(
      "2",
      "Bohemia Rapsody",
      ["Drama", "Biography", "Music"],
      "2003",
      "5",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      154,
    ),
    buildMovie(
      "3",
      "Kill Bill 2",
      ["Oskar winning movie"],
      "1994",
      "4.1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      160,
    ),
    buildMovie(
      "4",
      "Avengers: Infinity War",
      ["Action & Adventures"],
      "2004",
      "4.1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      120,
    ),
    buildMovie(
      "5",
      "Inception",
      ["Action & Adventures"],
      "2003",
      "4.2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      154,
    ),
    buildMovie(
      "6",
      "Reservoir dogs",
      ["Oskar winning movie"],
      "1994",
      "4.6",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam blandit sem, nec bibendum sapien varius tempus. Fusce enim tellus, feugiat accumsan pharetra ut, feugiat eget est. In eleifend venenatis enim sit amet vulputate. Cras vitae pulvinar libero. Donec commodo risus in ullamcorper cursus. Donec semper varius vulputate. Sed gravida urna at nunc ornare, in vulputate dolor mattis. Suspendisse magna erat, vulputate in est non, iaculis aliquam nisl. Maecenas sed faucibus ipsum. Nunc vel tristique diam. Quisque mi est, efficitur ac orci sed, ullamcorper fermentum sapien. Proin quis ultricies velit. Aenean mollis sem lorem, et finibus nunc volutpat quis. Quisque gravida augue rhoncus ipsum cursus, ullamcorper lobortis neque gravida. Pellentesque vitae tortor vitae libero vestibulum porttitor eu quis nisl. Suspendisse lacinia aliquet interdum. Duis molestie scelerisque neque. Integer vel elit id nibh euismod porttitor quis sed ligula. Maecenas magna urna, consequat quis ullamcorper vel, ultrices vitae mauris. Nullam mollis risus tellus, quis imperdiet erat bibendum ut. Nulla facilisi.",
      134,
    ),
  ];
};

const buildMovie = (
  id: string,
  name: string,
  genres: string[],
  releaseYear: string,
  rating: string,
  description: string,
  duration: number,
  picture?: string,
  overview?: string,
  runtime?: string,
) => {
  let movie: IMovie = {
    id: id,
    picture: picture,
    name: name,
    genres: genres,
    releaseYear: releaseYear,
    rating: rating,
    description: description,
    duration: duration,
    overview: overview,
    runtime: runtime,
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
  rating: string;
  description: string;
  duration: number;
}

export class SortingConstants {
  static releaseDate: string = "REALEASE DATE";
  static genre: string = "GENRE";
}
