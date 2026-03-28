import { Link } from "react-router-dom";
import books from "../data/books";

function Home() {
  const categories = ["fiction", "non-fiction", "sci-fi"];

  return (
    <div>
      <h1>Welcome to Online Library 📚</h1>

      <h3>Categories:</h3>
      {categories.map((cat) => (
        <Link key={cat} to={'/books/${cat}'} style={{ marginRight: "10px" }}>
          {cat}
        </Link>
      ))}

      <h3>Popular Books:</h3>
      {books.slice(0, 3).map((book) => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <Link to={'/book/${book.id}'}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;