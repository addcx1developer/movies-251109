import Home from "./components/Home";

function App() {
  return (
    <div className="flex justify-center">
      <div className="container space-y-4">
        <header className="flex justify-between items-center py-4 border border-transparent border-b-gray-300">
          <h1 className="text-xl font-bold">Go Watch a Movie!</h1>
          <button className="bg-green-700 hover:bg-green-600 text-white text-xs rounded-sm p-1 cursor-pointer transition duration-300 ease-in-out">
            Login
          </button>
        </header>

        <div className="grid grid-cols-3 gap-4">
          <nav>
            <ul className="font-semibold border border-gray-300 rounded-md overflow-hidden divide-y divide-gray-300">
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Genres
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Add Movie
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Manage Catalogue
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="block p-2 bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  GraphQL
                </a>
              </li>
            </ul>
          </nav>
          <main className="col-span-2">
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
