import Link from "next/link";

export const CardRow = () => {
  return (
    <div className="bg-gradient-to-bl from-green-400 to-blue-500 p-9">
      <Link className="text-2xl text-white" href={`/movie/${5}`}>
        movie
      </Link>
    </div>
  );
};
