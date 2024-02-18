import { useState } from "react";

function AddUser() {
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const displayName = formData.get("displayName");

    try {
      const response = await fetch(
        "https://my-fantastic-server.onrender.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, displayName }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const data = await response.json();
      console.log("user added successfully:", data);
      setSuccess(true);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <h2>Add user</h2>
      <div>
        <label htmlFor="username">User name:</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          className="border-2"
        />
      </div>
      <div>
        <label htmlFor="displayName">display name</label>
        <input
          name="displayName"
          type="text"
          placeholder="author"
          className="border-2"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="********"
          autoComplete="password"
          className="border-2"
        />
      </div>

      <button className="border-2" type="submit">
        submit
      </button>

      <p>{success && "success"}</p>
    </form>
  );
}

export default AddUser;
