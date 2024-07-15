import { CardRow } from "./CardRow";

export const MovieList = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col bg-blue-800">
      <p className="p-4 text-2xl">MovieList</p>
      <div className="flex-grow bg-green-800">
        <div className="">
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
        </div>
      </div>

      <p className="p-4 text-2xl">MovieList</p>
    </div>
  );
};
