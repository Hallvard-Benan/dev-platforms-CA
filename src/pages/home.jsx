import AddBook from "../components/addBook";
import AddUser from "../components/addUser";
import Books from "../components/books";
import Users from "../components/users";

function HomePage() {
  const handleSubmitBook = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const pagesString = formData.get("pages");
    const pages = parseInt(pagesString);
    const finishedString = formData.get("finished");
    const finished = Boolean(finishedString);

    try {
      const response = await fetch(
        "https://my-fantastic-server.onrender.com/api/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, author, pages, finished }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      const data = await response.json();
      console.log("Book added successfully:", data);
      window.location.reload();
    } catch (error) {
      console.log("Error adding book:", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto flex justify-evenly">
        <div>
          <h2>Add book:</h2>
          <AddBook handleSubmitBook={handleSubmitBook} />
        </div>
        <AddUser />
      </div>
      <div className="max-w-screen-md mx-auto flex justify-evenly">
        <div>
          <Books />
        </div>
        <div>
          <Users />
        </div>
      </div>
    </>
  );
}

export default HomePage;
