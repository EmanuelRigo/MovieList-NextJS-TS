import Link from "next/link";

export const CardRow = () => {
  return (
    <div className="bg-gray-700 mb-4 p-5 rounded-lg">
      <Link className="text-2xl text-white" href={`/movie/${5}`}>
        movie
      </Link>
    </div>
  );
};
