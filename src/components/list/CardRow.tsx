import Link from "next/link";

export const CardRow = () => {
  return (
    <div className="bg-gray-700 mb-4 p-5 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer">
      <Link className="text-2xl text-white" href={`/movie/${5}`}>
        movie
      </Link>
    </div>
  );
};
