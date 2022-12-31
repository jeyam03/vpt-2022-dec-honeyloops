import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./styles/tailwind.output.css";
import BookDetails from "./pages/BookDetails";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const SearchContext = createContext();
export const BookIDContext = createContext();

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookDetails, setBookDetails] = useState(null);

  return (
    <BookIDContext.Provider value={[bookDetails, setBookDetails]}>
      <SearchContext.Provider value={[searchQuery, setSearchQuery]}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="works">
              <Route path=":id" element={<BookDetails />} />
            </Route>
            <Route index element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </BookIDContext.Provider>
  );
};

export default App;
