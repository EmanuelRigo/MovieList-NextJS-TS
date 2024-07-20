"use client";

import { useState } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { BsSearch } from "react-icons/bs";
import Image, { ImageLoaderProps } from "next/image";

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

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
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
          {peliculas.map((pelicula: Pelicula) => (
            <div
              className="max-w-sm bg-white rounded-lg shadow-md h-4/6 relative"
              key={pelicula.id}
            >
              {pelicula.poster_path && (
                <Image
                  loader={myLoader}
                  src={pelicula.poster_path}
                  alt={pelicula.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-lg"
                />
              )}
              {pelicula.backdrop_path && (
                <Image
                  loader={myLoader}
                  src={pelicula.backdrop_path}
                  alt={pelicula.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-lg"
                />
              )}
              <h2>{pelicula.title}</h2>
              <h2>{pelicula.release_date}</h2>
              <p>{pelicula.overview}</p>
              <button>Agregar película</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
