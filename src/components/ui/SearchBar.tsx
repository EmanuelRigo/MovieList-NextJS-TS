import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <div className="flex bg-white items-center rounded-full overflow-hidden shadow-sm">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full py-3 px-4 focus:outline-none"
      />
      <button className="py-3 px-4">
        <BsSearch />
      </button>
    </div>
  );
};
