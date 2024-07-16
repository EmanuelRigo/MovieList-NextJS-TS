import { CardRow } from "./CardRow";

export const MovieList = () => {
  return (
    <div className="bg-blue-800 justify-between flex flex-col h-screen">
      <p className="p-4 text-2xl">MovieList</p>
      <div className="h-full bg-yellow-400 overflow-auto">
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
        <CardRow></CardRow>
      </div>
      <p className="p-4 text-2xl">MovieList</p>
    </div>
  );
};
