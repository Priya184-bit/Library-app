import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/books/fiction">Back</Link>
    </div>
  );
}

export default BookDetails;