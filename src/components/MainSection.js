import React, { useContext, useState } from "react";
import Inputfield from "./TextInput";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from "../App";


const MainSection = () => {
  const [searchQuery, setSearchQuery] = useContext(SearchContext);
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = () => {
    setSearchQuery(localSearch);
  };

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(192,132,252, 0.7), rgba(126,34,206,0.7)), url(https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-gradient-to-bl from-purple-700 to-purple-700 h-[400px] flex flex-col justify-center items-center px-8 py-8 lg:px-[calc(100vw/12)]"
    >
      <h2 className="text-white font-bold text-3xl">
        Search for the books you love 💗 !
      </h2>
      <h3 className="mt-4 tracking-wider text-white uppercase">
        For Venmurasu Programming Contest 2023
      </h3>
      <div className="flex w-1/3 items-center space-x-4 mt-8">
        <Inputfield
          className="flex-1"
          placeholder="Search by author, book, subject, etc."
          valueState={[localSearch, setLocalSearch]}
        />
        <button onClick={handleSearch} className="bg-purple-400 p-2 rounded-full text-white hover:bg-purple-500">
          <BiSearch size={24} />
        </button>
      </div>
    </section>
  );
};

export default MainSection;
