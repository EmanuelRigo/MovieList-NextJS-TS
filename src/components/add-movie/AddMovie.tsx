"use client";

import { useState } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { BsSearch } from "react-icons/bs";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";

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
      <div className="container rounded-lg bg-gray-900 p-4 mx-auto h-full lg:h-5/6 flex flex-col items-start lg:items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-4/5 lg:w-2/4 mb-4 bg-white items-center rounded-full overflow-hidden shadow-sm"
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
        <div
          className="relative flex-grow w-full
        overflow-auto scrollbar-hidden "
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 absolute w-full p-1">
            {peliculas.map((pelicula: Pelicula) => (
              <div className="h-80 pt-0 rounded-lg overflow-hidden  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer">
                <div className="h-full w-full flex relative">
                  <div className="absolute bottom-0 bg-black bg-opacity-45 w-full text-white">
                    <p>{pelicula.title}</p>
                    <p>{pelicula.release_date}</p>
                  </div>
                  {pelicula.poster_path && (
                    <Image
                      loader={myLoader}
                      src={
                        pelicula.poster_path
                          ? pelicula.poster_path
                          : "/images/poster.jpg"
                      }
                      alt={pelicula.title}
                      width={500}
                      height={500}
                      sizes="width: 100%"
                      className="w-full object-cover"
                    />
                  )}
                </div>
              </div>

              // <div
              //   className="max-w-sm bg-white rounded-lg shadow-md h-96 relative"
              //   key={pelicula.id}
              // >
              //   {pelicula.poster_path && (
              //     <Image
              //       loader={myLoader}
              //       src={pelicula.poster_path}
              //       alt={pelicula.title}
              //       layout="fill"
              //       objectFit="cover"
              //       className="object-cover rounded-lg"
              //     />
              //   )}

              //   <h2 className="bg-black  text-white z-10">{pelicula.title}</h2>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
