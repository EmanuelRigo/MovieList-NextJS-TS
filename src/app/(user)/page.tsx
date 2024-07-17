import { FooterMainMenu, MainNavbar, MovieList } from "@/components";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";
import { CardMovie } from "@/components/ui/CardMovie";
import { SearchBar } from "@/components/ui/SearchBar";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container rounded-lg bg-gray-900 mx-auto grid lg:grid-cols-3 gap3 h-full lg:h-5/6 overflow-auto">
        <div className="flex flex-col justify-between p-4">
          <div>
            <MainNavbar />
            <CardMovie></CardMovie>
          </div>

          <SearchBar></SearchBar>
          <FooterMainMenu />
        </div>
        <div className="hidden lg:block h-full">
          <MovieList></MovieList>
        </div>
        <div className="hidden lg:block h-full">
          <CardMovieViewer />
        </div>
      </div>
    </div>
  );
};

export default page;
