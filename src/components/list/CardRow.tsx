import Link from "next/link";

export const CardRow = () => {
  return (
    <div>
      <Link className="text-2xl text-white" href={`/movie/${5}`}>
        movie
      </Link>
    </div>
  );
};
