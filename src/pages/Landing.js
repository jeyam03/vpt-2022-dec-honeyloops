import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import Button from "../components/Button";
import Inputfield from "../components/TextInput";
import { BiSearch } from "react-icons/bi";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import { Toaster, toast } from "react-hot-toast";
import { API_URL } from "../API";

export const SearchContext = createContext();

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("potter");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchQuery.length <= 0) return;
    axios
      .get(`${API_URL}/search.json?q=${searchQuery}&limit=30&page=1`)
      .then((res) => {
        toast.success("Loaded book details successfully");
        setBooks(
          res.data.docs
            .filter(
              (item) => item.isbn !== undefined && item.cover_i !== undefined
            )
            .map((item) => {
              return {
                author_name: item.author_name,
                title: item.title,
                img_url: `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`,
                subject: item.subject,
                language: item.language,
                isbn: item.isbn[0],
              };
            })
        );
      });
  }, [searchQuery]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <React.Fragment>
      <Toaster />
      <SearchContext.Provider value={[searchQuery, setSearchQuery]}>
        <div className="w-screen h-screen overflow-x-hidden bg-pruple-100 font-sans">
          <Navbar />
          <MainSection />
          {books.length <= 0 ? (
            <div className="px-8 py-8 lg:px-[calc(100vw/12)] tracking-widest text-3xl uppercase text-center text-gray-400">
              {searchQuery.length <= 0 ? "SEarch books here" : "No books found"}
            </div>
          ) : (
            <main className="px-8 py-8 lg:px-[calc(100vw/12)] grid grid-cols-2 lg:grid-cols-6 gap-6">
              {books.map((book) => (
                <div className="bg-pruple-100 shadow-lg p-4 flex flex-col justify-start items-center">
                  <div
                    className="h-64 w-48"
                    style={{
                      background: `url(${book.img_url})`,
                      backgroundPosition: "top center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  />
                  <p className="text-black text-lg font-semibold text-center mt-4">
                    {book.title}
                  </p>
                  <div className="text-sm text-gray-400 text-center">
                    {book.author_name.map((item, idx) =>
                      idx === 0 ? item : `, ${item}`
                    )}
                  </div>
                </div>
              ))}
            </main>
          )}
        </div>
      </SearchContext.Provider>
    </React.Fragment>
  );
};

export default Landing;
