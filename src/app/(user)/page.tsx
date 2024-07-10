"use client";

import { CardRow, FooterMainMenu, MainNavbar } from "@/components";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";
import { useEffect, useState } from "react";

const page = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap3 h-screen">
      <div className="bg-zinc-500">
        <MainNavbar />
        page11
        <FooterMainMenu />
      </div>
      {screenWidth >= 1024 && (
        <div className=" bg-slate-500">
          <CardRow />
        </div>
      )}{" "}
      {screenWidth >= 1024 && (
        <div className=" bg-orange-600">
          <CardMovieViewer />
        </div>
      )}
    </div>
  );
};

export default page;
