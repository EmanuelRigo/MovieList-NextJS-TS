import { FooterMainMenu, MainNavbar, MovieList } from "@/components";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";
import { CardMovie } from "@/components/ui/CardMovie";
import { SearchBar } from "@/components/ui/SearchBar";
import { MovieProvider } from "@/context/movieContext";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center">
      <div
        className="container rounded-lg bg-gray-900 mx-auto grid lg:grid-cols-3 gap3 h-full lg:h-5/6 overflow-auto"
        style={{ gridTemplateColumns: "1fr 1fr 25rem" }}
      >
        <div className="h-full flex flex-col justify-between p-4 mb-8 lg:mb-auto">
          <div className="">
            <MainNavbar />
            <CardMovie></CardMovie>
          </div>

          <FooterMainMenu />
          <SearchBar></SearchBar>
        </div>
        <div className="hidden lg:block h-full ">
          <MovieList></MovieList>
        </div>
        <div className="hidden lg:block h-full ">
          <CardMovieViewer />
        </div>
      </div>
    </div>
  );
};

export default page;
