"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { MovieToAdd } from "@/interfaces/interfaces";

interface MovieContext {
  movieToAdd: MovieToAdd;
  setMovieToAdd: React.Dispatch<React.SetStateAction<MovieToAdd>>;
}

const defaultMovie: MovieToAdd = {
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
  formats: {
    vhs: false,
    dvd: false,
    bluray: false,
  },
};

const defaultContextValue: MovieContext = {
  movieToAdd: defaultMovie,
  setMovieToAdd: () => {},
};

const MovieContext = createContext<MovieContext>(defaultContextValue);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext debe usarse dentro de MovieProvider");
  }
  return context;
};

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movieToAdd, setMovieToAdd] = useState<MovieToAdd>(defaultMovie);

  return (
    <MovieContext.Provider value={{ movieToAdd, setMovieToAdd }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
