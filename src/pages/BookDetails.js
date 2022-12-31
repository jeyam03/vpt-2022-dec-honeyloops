import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";
import axios from "axios";
import { API_URL } from "../API";
import { BookIDContext } from "../App";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useContext(BookIDContext);

  useEffect(() => {
    if (bookDetails === null) {
      navigate("/");
      return;
    }
    console.log(bookDetails);
    toast.promise(axios.get(`${API_URL}/works/${id}.json`), {
      loading: "Fetching...",
      success: (res) => {
        setBookDetails({ ...bookDetails, description: res.data.description });
        return "Successfully fetched!";
      },
      error: (err) => {
        // navigate("/");
        return "Error fetching details";
      },
    });
  }, []);

  return bookDetails ? (
    <div className="w-screen h-screen overflow-x-hidden font-sans">
      <Navbar />
      <main className="w-full bg-purple-400 p-8 lg:px-[calc(100vw/12)] flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
        <div
          className="h-[400px] w-[300px]"
          style={{
            background: `url("${bookDetails.img_url}")`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <section className="flex-1">
          <h1 className="text-purple-700 text-3xl font-bold">
            {bookDetails.title}
          </h1>
          <h2 className="text-gray-700 text-lg mt-2">
            {bookDetails.author_name.map((item, idx) =>
              idx === 0 ? item : `, ${item}`
            )}
          </h2>
          <p className="text-black text-lg mt-4">{bookDetails.description}</p>
          <p className="mt-1 text-lg">
            <b>Languages:</b>
            {bookDetails.language.map((item, idx) =>
              idx === 0 ? item : `, ${item}`
            )}
          </p>
          <Link to="/">
            <button className="bg-purple-600 px-4 py-2 rounded-lg text-white mt-8">
              Go Back
            </button>
          </Link>
        </section>
      </main>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default BookDetails;
