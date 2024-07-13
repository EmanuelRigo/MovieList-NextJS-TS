import Image from "next/image";
import Link from "next/link";

export const CardMovie = () => {
  return (
    <div>
      <div className="aspect-square pt-0">
        <div className="h-full w-full flex overflow-hidden rounded-lg relative">
          <div className="absolute ">
            <p>DUNE PART I</p>
            <p>2020</p>
            <p>vhs</p>
          </div>

          <Image
            src="/images/poster.jpg"
            width={500}
            height={500}
            sizes="width: 100%"
            alt="Picture of the author"
            className="w-full object-cover"
          />
        </div>
        <Link
          href="/movie-page"
          className="bg-slate-600 rounded-lg w-full p-4 block text-center text-white text-2xl mt-4"
        >
          Pelicula Random
        </Link>
      </div>
    </div>
  );
};
