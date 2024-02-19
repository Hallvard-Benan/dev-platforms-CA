import { useEffect, useState } from "react";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      const res = await fetch(
        "https://my-fantastic-server.onrender.com/api/auth/status",
        { credentials: "include" }
        //include the cookie in the request
      );
      const data = await res.json();

      if (data.msg.includes("Not Authenticated")) setIsLoggedIn(false);
      else setIsLoggedIn(true);
    };

    getStatus();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await fetch(
        "https://my-fantastic-server.onrender.com/api/auth/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          credentials: "include",
          redirect: "follow",
        }
      );

      if (!res.ok) {
        throw new Error("something went wrong", res);
      }

      console.log(res.headers);

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="grid max-w-screen-md mx-auto gap-4"
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="user name"
            className="border-2"
          />
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            className="border-2"
          />
          <button type="submit" className="bg-green-400">
            Login{" "}
          </button>
        </form>
      ) : (
        <h1>Already Logged in</h1>
      )}
    </div>
  );
}

export default LoginPage;
