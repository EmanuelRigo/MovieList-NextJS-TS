"use client";

import { useState, useEffect } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { useParams } from "next/navigation";
import Image, { ImageLoaderProps } from "next/image";

import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

const Page = () => {
  const params = useParams<{ id: string }>();
  console.log(params);
  console.log(params.id);

  const urlBase: string = "https://api.themoviedb.org/3/movie/";
  const API_KEY: string = "67c383651f5d04b52d4a09b8a9d41b9a";

  const [pelicula, setPelicula] = useState<Pelicula>();

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await fetch(
          `${urlBase}${params.id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setPelicula(data);
        console.log(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    if (params.id) {
      fetchPeliculas();
    }
  }, []);

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  if (!pelicula) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container rounded-lg  bg-gray-900 mx-auto flex w-full h-full lg:h-5/6 overflow-auto">
        <div
          className="rounded-lg aspect-4/6  relative m-4  outline outline-offset-3 outline-orange-500
        "
        >
          <Image
            loader={myLoader}
            src={
              pelicula.poster_path ? pelicula.poster_path : "/images/poster.jpg"
            }
            alt={pelicula.title}
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-lg "
          />
        </div>
        <div className="text-white p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl">{pelicula.title}</h1>
              <Link
                href="/add-movie"
                className="p-4 bg-orange-500 rounded-lg text-black"
              >
                Volver
              </Link>
            </div>
            <p className="mb-4">{pelicula.release_date}</p>
            {pelicula.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
            <p>{pelicula.overview}</p>
          </div>
          <div>
            <div className="flex justify-start mb-4">
              <button className="p-4 me-4 w-28 bg-gray-800 rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black">
                VHS
              </button>
              <button className="p-4 me-4 w-28 bg-gray-800 rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black">
                DVD
              </button>
              <button className="p-4 w-28 bg-gray-800 rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black">
                BLU-RAY
              </button>
            </div>
            <button className="p-5 bg-orange-500 rounded-lg w-full text-black">
              Agregar pelicula
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
