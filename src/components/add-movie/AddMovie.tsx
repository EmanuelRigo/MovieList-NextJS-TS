"use client";

import { useState } from "react";
import { Pelicula } from "@/interfaces/interfaces";

export const AddMovie = () => {
  const urlBase: string = "https://api.themoviedb.org/3/search/movie";
  const API_KEY: string = "67c383651f5d04b52d4a09b8a9d41b9a";

  const [busqueda, setBusqueda] = useState<string>("");
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data.results);
      setPeliculas(data.results);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Películas para agregar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribí una película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      <div className="movie-list">
        {peliculas.map((pelicula: Pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
            />{" "}
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
              alt={pelicula.title}
            />
            <h2>{pelicula.title}</h2>
            <h2>{pelicula.release_date}</h2>
            <p>{pelicula.overview}</p>
            <button className="btn btn-primary">agregar pelicula</button>
          </div>
        ))}
      </div>
    </div>
  );
};
