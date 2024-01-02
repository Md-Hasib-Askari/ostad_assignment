import logo from "../assets/images/logo.webp";
import { TopHeader } from "./TopHeader.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { Navbar } from "./Navbar.jsx";

export const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 border-gray-200 px-4 lg:px-6 pt0-2.5 dark:bg-gray-800">
        <div className="pt-5 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-5 w-full">
            <TopHeader />
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};
