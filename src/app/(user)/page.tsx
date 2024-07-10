import { CardRow, FooterMainMenu, MainNavbar } from "@/components";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";

const page = () => {
  return (
    <div className="grid lg:grid-cols-3 gap3 h-screen">
      <div className="bg-zinc-500">
        <MainNavbar />
        page11
        <FooterMainMenu />
      </div>
      <div className="hidden lg:block bg-slate-500">
        <CardRow />
      </div>
      <div className="hidden lg:block bg-orange-600">
        <CardMovieViewer />
      </div>
    </div>
  );
};

export default page;
