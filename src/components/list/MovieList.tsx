import { CardRow } from "./CardRow";

export const MovieList = () => {
  return (
    <div className="p-3 flex flex-col h-screen lg:h-full">
      <p className="text-2xl p-1 text-white">MovieList</p>
      <div className="relative my-4 rounded-lg flex-grow  scrollbar-hidden overflow-auto">
        <div className="w-full absolute p-1">
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow> <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
          <CardRow></CardRow>
        </div>
      </div>
    </div>
  );
};
