import { CardRow } from "./CardRow";

export const MovieList = () => {
  return (
    <div className="p-4 flex flex-col h-screen lg:h-full">
      <p className="text-2xl text-white">MovieList</p>
      <div className="relative my-4 rounded-lg flex-grow  scrollbar-hidden overflow-auto">
        <div className="w-full absolute">
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
