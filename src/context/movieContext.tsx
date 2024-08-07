import React, { createContext, ReactNode, useState } from "react";
import { Movie } from "@/interfaces/interfaces";

interface MovieContextProps {
  movie: Movie;
  setMovie: React.Dispatch<React.SetStateAction<Movie>>;
}

const defaultMovie: Movie = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  origin_country: [],
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

interface MovieContextProps {
  movie: Movie;
  setMovie: React.Dispatch<React.SetStateAction<Movie>>;
}

const MovieContext = createContext<MovieContextProps>({
  movie: defaultMovie,
  setMovie: () => {}, // Placeholder
});

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState<Movie>(defaultMovie);

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
