"use client";

import { useState, useEffect } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { useParams } from "next/navigation";
import Link from "next/link";

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
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    if (params.id) {
      fetchPeliculas();
    }
  }, []); // La dependencia params.id asegura que el efecto se ejecute solo una vez cuando id esté disponible

  if (!pelicula) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white">
      <h1>{pelicula.title} pelicula</h1>
      <p>{pelicula.overview}</p>
      {/* Otros detalles de la película */}
    </div>
  );
};

export default Page;
