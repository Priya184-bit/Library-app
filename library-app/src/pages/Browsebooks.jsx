import { Link } from "react-router-dom";

function BrowseBooks() {
  const filteredBooks = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Dune" },
  ];

  return (
    <div>
      <h2>Browse Books</h2>

      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <Link to={'/book/${book.id}'}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;