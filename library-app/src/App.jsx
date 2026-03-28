import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/Browsebooks";
import BookDetails from "./pages/BookDetails";
import Addbook from "./pages/Addbook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/Addbook" element={<Addbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;