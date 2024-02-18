import { Link } from "@tanstack/react-router";

function Book({ book }) {
  return (
    <div className="border-2 p-2">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>{book.finished ? "finished" : "not finished"}</p>
      <p>Pages: {book.pages}</p>
      <Link to={`/book?id=${book._id}`} className="border-2 px-2 py-1 ">
        Link
      </Link>
    </div>
  );
}

export default Book;
