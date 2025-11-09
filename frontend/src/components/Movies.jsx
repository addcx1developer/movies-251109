import { useEffect, useState } from "react";
import { Link } from "react-router";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Some long description",
      },
      {
        id: 2,
        title: "Raiders of the lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        description: "Some long description",
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold border-b border-gray-300 p-2">Movies</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-2 py-2 font-semibold text-gray-700">Movie</th>
            <th className="px-2 py-2 font-semibold text-gray-700">
              Release Date
            </th>
            <th className="px-2 py-2 font-semibold text-gray-700">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr
              key={m.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="px-2 py-2">
                <Link
                  to={`/movies/${m.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {m.title}
                </Link>
              </td>
              <td className="px-2 py-2">{m.release_date}</td>
              <td className="px-2 py-2">{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
