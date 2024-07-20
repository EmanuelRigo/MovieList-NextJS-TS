"use client";

import { useState } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import CardMovieViewer from "../movie-viewer/CardMovieViewer";

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
    <div className="h-screen w-screen flex items-center">
      <div className="container rounded-lg bg-gray-900 mx-auto h-full lg:h-5/6 overflow-auto flex flex-col items-start lg:items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex w-4/5 lg:w-2/4 bg-white items-center rounded-full overflow-hidden shadow-sm"
        >
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full py-3 px-4 focus:outline-none"
            value={busqueda}
            onChange={handleInputChange}
          />
          <button type="submit" className="py-3 px-4">
            <BsSearch />
          </button>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>
          <CardMovieViewer></CardMovieViewer>

          {peliculas.map((pelicula: Pelicula) => (
            <CardMovieViewer></CardMovieViewer>
            // <div className="max-w-sm bg-white rounded-lg shadow-md" key={pelicula.id}>
            //   <Image
            //     src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            //     alt={pelicula.title}
            //   />{" "}
            //   <Image
            //     src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
            //     alt={pelicula.title}
            //   />
            //   <h2>{pelicula.title}</h2>
            //   <h2>{pelicula.release_date}</h2>
            //   <p>{pelicula.overview}</p>
            //   <button>agregar pelicula</button>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};
