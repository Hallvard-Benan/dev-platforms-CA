import { useEffect, useState } from "react";
import Book from "./book";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://my-fantastic-server.onrender.com/api/books/"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setBooks(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto">
      <h2> 📖 books</h2>
      <div className="grid gap-3">
        {books.map((book) => (
          <Book book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
}

export default Books;
