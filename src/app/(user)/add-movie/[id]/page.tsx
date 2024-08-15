"use client";

import { useState, useEffect } from "react";
import { Pelicula, MovieToAdd } from "@/interfaces/interfaces";
import { useParams } from "next/navigation";
import Image, { ImageLoaderProps } from "next/image";
import { useMovieContext } from "@/context/movieContext";

import Link from "next/link";

const Page = () => {
  const { movieToAdd, setMovieToAdd } = useMovieContext();
  const [pelicula, setPelicula] = useState<MovieToAdd>();

  console.log(movieToAdd);

  const checkFormats = () => {
    const { vhs, dvd, bluray } = movieToAdd.formats;
    if (vhs || dvd || bluray) {
      alert(
        "¡Atención! Alguno de los formatos (VHS, DVD o Blu-ray) está disponible."
      );
    } else alert("todo bien");
  };

  const handleFormatChange = (format: "vhs" | "dvd" | "bluray") => {
    setMovieToAdd((prev) => {
      const newValue = !prev.formats[format];
      return {
        ...prev,
        formats: {
          ...prev.formats,
          [format]: newValue,
        },
      };
    });
  };

  const params = useParams<{ id: string }>();
  console.log(params);
  console.log(params.id);

  const urlBase: string = "https://api.themoviedb.org/3/movie/";
  const API_KEY: string = "67c383651f5d04b52d4a09b8a9d41b9a";

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await fetch(
          `${urlBase}${params.id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);

        setPelicula(data);
        setMovieToAdd({
          ...data,
          formats: {
            vhs: false,
            dvd: false,
            bluray: false,
          },
        });
        console.log(movieToAdd, "pelicula 27");
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    if (params.id) {
      fetchPeliculas();
    }
  }, [params.id]);

  console.log(movieToAdd);

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
              <button
                onClick={() => handleFormatChange("vhs")}
                className={`${
                  movieToAdd.formats.vhs ? "bg-orange-500" : "bg-gray-800"
                } p-4 me-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                VHS
              </button>
              <button
                onClick={() => handleFormatChange("dvd")}
                className={`${
                  movieToAdd.formats.dvd ? "bg-orange-500" : "bg-gray-800"
                } p-4 me-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                DVD
              </button>
              <button
                onClick={() => handleFormatChange("bluray")}
                className={`${
                  movieToAdd.formats.bluray ? "bg-orange-500" : "bg-gray-800"
                } p-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                BLU-RAY
              </button>
            </div>
            <button
              onClick={checkFormats}
              className="p-5 bg-orange-500 rounded-lg w-full text-black"
            >
              Agregar pelicula
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
