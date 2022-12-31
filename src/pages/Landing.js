import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import Inputfield from "../components/TextInput";
import { IoCloseOutline } from "react-icons/io5";

const Landing = () => {

  const [booksCount, setBooksCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    axios
      .get(`https://openlibrary.org/search/authors.json?q=${search}`)
      .then((res) => {
        console.log(res.data);
        setBooksCount(res.data.numFound);
        setBooks(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  }

  const clearSearch = () => {
    setSearch("");
    setBooksCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen overflow-x-hidden min-h-screen bg-red-300 space-y-12 lg:px-[calc(100vw/12)]">
      <p className="text-5xl font-bold text-center py-6 px-12">Books Search</p>
      <div className="flex flex-col lg:flex-row w-full px-6 lg:px-40 space-y-6 lg:space-y-0 lg:space-x-6 font-mono items-end">
        <Inputfield
          title="Search"
          placeholder="Search for authors"
          className="w-full"
          valueState={[search, setSearch]}
        />
        <div className="flex w-1/2 items-center space-x-6">

        <button
          className="rounded-full h-1/2 bg-gray-300 p-1 hover:text-gray z-40"
          onClick={clearSearch}
        >
          <IoCloseOutline />
        </button>
        <Button
          text="Search"
          className="flex-1"
          handleClick={handleSearch}
        />
          </div>
      </div>

      {booksCount <= 0 ? (
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-3xl font-semibold text-center mb-4">No Books Found</p>
        </div>
      ) : (
        <div>
          <div className="mx-auto w-1/2 h-1 bg-slate-600 "></div>
          <div className="mt-4">
            <p className="text-3xl font-semibold text-center mb-4">{search} Books</p>
            <p className="text-xl text-center">Books Found: {booksCount}</p>
            <div className="flex flex-col lg:grid space-y-4  px-6 lg:px-36 py-6">
              {books.map((book) => (
                <div className="shadow-lg border-2 border-black rounded-xl px-12 py-6 space-y-2">
                  <p className="font-mono bg-slate-400 text-xl w-fit">Authors: {book.name}</p>
                  <p className="text-lg text-slate-600">Key: {book.key}</p>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
