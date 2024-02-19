import "./App.css";

import { Outlet, Link } from "@tanstack/react-router";

function App() {
  return (
    <>
      <nav className="mb-4 flex justify-between max-w-screen-md mx-auto">
        {" "}
        <Link to={"/"} className="border-b-2 border-blue-500">
          {" "}
          Home
        </Link>
        <Link to={"/login"} className="border-b-2 border-blue-500">
          login
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
