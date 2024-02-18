import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://my-fantastic-server.onrender.com/api/users"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);

        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>👤 users:</h2>
      <div className="grid gap-3">
        {users.map(({ username, displayName, _id }) => (
          <div key={_id} className="border-2 grid gap-2 p-2">
            <p>username: {username}</p>
            <p>displayName: {displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
