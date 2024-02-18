import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import AddBook from "../components/addBook";

function BookPage() {
  const [book, setBook] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [bookId, setBookId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      setBookId(id);
      const res = await fetch(
        `https://my-fantastic-server.onrender.com/api/books/${id}`
      );
      const data = await res.json();
      setBook(data);
    };

    getBook();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://my-fantastic-server.onrender.com/api/books/${bookId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete book");
      }
      navigate({ to: "/" });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEditOpen = () => {
    setEditOpen((prev) => !prev);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const title = formData.get("title");
      const author = formData.get("author");
      const pages = parseInt(formData.get("pages"));
      const finished = formData.get("finished") === "true";

      const response = await fetch(
        `https://my-fantastic-server.onrender.com/api/books/${bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, author, pages, finished }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit book");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  return (
    <div className="border-2 p-2">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>{book.finished ? "finished" : "not finished"}</p>
      <p>Pages: {book.pages}</p>

      <div className=" flex justify-evenly">
        <button className="border-2 p-2 border-red-500" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="border-2 p-2 border-blue-500"
          onClick={handleEditOpen}
        >
          Edit
        </button>
      </div>

      {editOpen && (
        <div>
          <h2>Edit: </h2>
          <AddBook handleSubmitBook={handleSubmitEdit} />
        </div>
      )}
    </div>
  );
}

export default BookPage;
