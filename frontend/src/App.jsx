import { Link, Outlet } from "react-router";

import { useState } from "react";

function App() {
  const [jwtToken] = useState("");

  return (
    <div className="flex justify-center">
      <div className="container space-y-4">
        <header className="flex justify-between items-center py-4 border border-transparent border-b-gray-300">
          <h1 className="text-xl font-bold">Go Watch a Movie!</h1>
          {jwtToken.trim() === "" ? (
            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-600 text-white text-xs rounded-sm p-1 cursor-pointer transition duration-300 ease-in-out"
            >
              Login
            </Link>
          ) : (
            <a
              href="#!"
              className="bg-red-700 hover:bg-red-600 text-white text-xs rounded-sm p-1 cursor-pointer tansition duration-300 ease-in-out"
            >
              Logout
            </a>
          )}
        </header>

        <div className="grid grid-cols-3 gap-4">
          <nav>
            <ul className="font-semibold border border-gray-300 rounded-md overflow-hidden divide-y divide-gray-300">
              <li>
                <Link
                  to="/"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/genres"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Genres
                </Link>
              </li>
              {jwtToken.trim() !== "" && (
                <>
                  <li>
                    <Link
                      to="/admin/movie/0"
                      className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                      Add Movie
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-catalogue"
                      className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                      Manage Catalogue
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/graphql"
                      className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                      GraphQL
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <main className="col-span-2">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
