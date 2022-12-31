import React, { useContext, useState } from "react";
import Inputfield from "./TextInput";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from "../pages/Landing";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useContext(SearchContext);
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = () => {
    setSearchQuery(localSearch);
  };

  return (
    <nav className="bg-white flex items-center justify-between px-8 lg:px-[calc(100vw/12)] py-4 font-sans">
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/207/207114.png"
          className="h-16"
          alt=""
        />
        <h1 className="text-black font-semibold text-2xl tracking-widest uppercase">
          BooksHub
        </h1>
      </div>
      <div className="flex w-1/3 items-center space-x-4">
        <Inputfield
          className="flex-1"
          placeholder="Search by author, book, subject, etc."
          valueState={[localSearch, setLocalSearch]}
        />
        <button
          onClick={handleSearch}
          className="bg-pruple-400 p-2 rounded-full"
        >
          <BiSearch size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
