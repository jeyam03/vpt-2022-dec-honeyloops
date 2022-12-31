import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import Button from "../components/Button";
import Inputfield from "../components/TextInput";
import { BiSearch } from "react-icons/bi";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import { Toaster, toast } from "react-hot-toast";
import { API_URL } from "../API";
import { GrShare } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BookIDContext, SearchContext } from "../App";

const Landing = () => {
  const [books, setBooks] = useState(null);
  const [searchQuery, setSearchQuery] = useContext(SearchContext);
  const [bookDetails, setBookDetails] = useContext(BookIDContext);

  const handleSetBookDetails = (data) => {
    setBookDetails(data);
  };

  useEffect(() => {
    if (searchQuery.length <= 0) return;
    toast.promise(
      axios.get(`${API_URL}/search.json?q=${searchQuery}&limit=30&page=1`),
      {
        loading: "Loading",
        success: (res) => {
          setBooks(
            res.data.docs
              .filter(
                (item) => item.isbn !== undefined && item.cover_i !== undefined
              )
              .map((item) => {
                return {
                  ...item,
                  key: item.key,
                  author_name: item.author_name,
                  title: item.title,
                  img_url: `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`,
                  subject: item.subject,
                  language: item.language,
                  isbn: item.isbn[0],
                };
              })
          );
          return "Loaded book details successfully";
        },
        error: "Error loading books",
      }
    );
  }, [searchQuery]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-purple-100 font-sans">
      <Navbar />
      <MainSection />
      {books === null ? (
        <div className="px-8 py-8 lg:px-[calc(100vw/12)] tracking-widest text-3xl uppercase text-center text-gray-400">
          Search books here
        </div>
      ) : books.length <= 0 ? (
        <div className="px-8 py-8 lg:px-[calc(100vw/12)] tracking-widest text-3xl uppercase text-center text-gray-400">
          {searchQuery.length <= 0 ? "Search books here" : "No books found"}
        </div>
      ) : (
        <main className="px-8 py-8 lg:px-[calc(100vw/12)] grid grid-cols-2 lg:grid-cols-6 gap-6">
          {books.map((book) => (
            <div className="bg-purple-100 border border-purple-900 shadow-purple-400 shadow-md p-4 flex flex-col justify-start items-center">
              <div
                className="h-64 w-48"
                style={{
                  background: `url(${book.img_url})`,
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <div className="flex justify-between items-start mt-4 w-full">
                <div className=" ">
                  <p className="text-black text-lg font-semibold">
                    {book.title}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {book.author_name.map((item, idx) =>
                      idx === 0 ? item : `, ${item}`
                    )}
                  </p>
                </div>
                <Link to={book.key} onClick={(e) => handleSetBookDetails(book)}>
                  <GrShare className="text-purple-400 hover:text-purple-600 mt-1" />
                </Link>
              </div>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};

export default Landing;
