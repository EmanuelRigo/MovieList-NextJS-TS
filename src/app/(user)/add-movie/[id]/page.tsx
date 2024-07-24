"use client";

import { useState, useEffect } from "react";
import { Pelicula } from "@/interfaces/interfaces";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const urlBase: string = "https://api.themoviedb.org/3/movie/";
  const API_KEY: string = "67c383651f5d04b52d4a09b8a9d41b9a";

  const [pelicula, setPelicula] = useState<Pelicula | undefined>();

  useEffect(() => {
    if (router.isReady && id) {
      fetchPeliculas();
    }
  }, [router.isReady, id]);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}${id}?api_key=${API_KEY}`);
      const data = await response.json();
      setPelicula(data);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };

  if (!pelicula) {
    return <div>Loading...</div>;
  }

  return <div>{pelicula.title} pelicula</div>;
};

export default Page;
