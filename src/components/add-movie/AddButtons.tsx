import { Pelicula, MovieToAdd } from "@/interfaces/interfaces";
import { useMovieContext } from "@/context/movieContext";

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

export const AddButtons = () => {
  const { movieToAdd, setMovieToAdd } = useMovieContext();
  return (
    <div>
      <div className="flex justify-start mb-4">
        <button
          onClick={() => handleFormatChange("vhs")}
          className={`${
            movieToAdd.formats.vhs ? "bg-red-400" : "bg-green-500"
          }p-4 me-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer  focus:text-black`}
        >
          VHS
        </button>
        <button
          onClick={() => handleFormatChange("dvd")}
          className="p-4 me-4 w-28 bg-gray-800 rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black"
        >
          DVD
        </button>
        <button
          onClick={() => handleFormatChange("bluray")}
          className="p-4 w-28 bg-gray-800 rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black"
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
  );
};
