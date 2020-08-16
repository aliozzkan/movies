type TArrayResult<T> = {
  Search: T[];
  totalResults: number;
  Response: TResponse;
};

type TResponse = "True" | "False";

export type TSortMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type TLongMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: TResponse;
};

export type TMovieSearchService = {
  req: {
    query: string;
    page: number;
  };
  res: TArrayResult<TSortMovie>;
};

export type TMovieDetailService = {
  req: {
    id: string;
  };
  res: TLongMovie;
};
