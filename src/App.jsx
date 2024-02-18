import "./App.css";

import { Outlet, Link } from "@tanstack/react-router";

function App() {
  return (
    <>
      <nav className="mb-4">
        {" "}
        <Link to={"/"} className="border-b-2 border-blue-500">
          {" "}
          Home
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
