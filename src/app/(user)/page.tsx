import { CardRow, FooterMainMenu, MainNavbar, MovieList } from "@/components";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";
import { CardMovie } from "@/components/ui/CardMovie";
import { SearchBar } from "@/components/ui/SearchBar";

const page = () => {
  return (
    <div className="container bg-gray-900 mx-auto grid lg:grid-cols-3 gap3 h-screen">
      <div className="flex flex-col justify-between p-4">
        <div>
          <MainNavbar />
          <CardMovie></CardMovie>
        </div>

        <SearchBar></SearchBar>
        <FooterMainMenu />
      </div>
      <div className="hidden bg-red-800 lg:block h-full">
        <MovieList></MovieList>
      </div>
      <div className="hidden lg:block ">
        <CardMovieViewer />
      </div>
    </div>
  );
};

export default page;
