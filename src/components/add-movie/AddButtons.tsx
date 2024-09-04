// import { Pelicula, MovieToAdd } from "@/interfaces/interfaces";
// import { useMovieContext } from "@/context/movieContext";

// export const AddButtons = () => {
//   const { movieToAdd, setMovieToAdd } = useMovieContext();

//   const handleFormatChange = (format: "vhs" | "dvd" | "bluray") => {
//     setMovieToAdd((prev) => {
//       const newValue = !prev.formats[format];
//       return {
//         ...prev,
//         formats: {
//           ...prev.formats,
//           [format]: newValue,
//         },
//       };
//     });
//   };

//   const checkFormats = () => {
//     // Aquí deberías implementar la lógica para verificar los formatos seleccionados
//     console.log("Formatos seleccionados:", movieToAdd.formats);
//   };

//   return (
//     <div>
//       <div className="flex justify-start mb-4">
//         <button
//           onClick={() => handleFormatChange("vhs")}
//           className={`${
//             movieToAdd.formats.vhs ? "bg-red-400" : "bg-green-500"
//           } p-4 mr-4 w-28 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:text-black`}
//         >
//           VHS
//         </button>
//         <button
//           onClick={() => handleFormatChange("dvd")}
//           className={`${
//             movieToAdd.formats.dvd ? "bg-red-400" : "bg-gray-800"
//           } p-4 mr-4 w-28 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black`}
//         >
//           DVD
//         </button>
//         <button
//           onClick={() => handleFormatChange("bluray")}
//           className={`${
//             movieToAdd.formats.bluray ? "bg-red-400" : "bg-gray-800"
//           } p-4 w-28 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer focus:bg-orange-500 focus:text-black`}
//         >
//           BLU-RAY
//         </button>
//       </div>
//       <button
//         onClick={checkFormats}
//         className="p-5 bg-orange-500 rounded-lg w-full text-black"
//       >
//         Agregar película
//       </button>
//     </div>
//   );
// };
