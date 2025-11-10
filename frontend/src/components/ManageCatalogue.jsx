import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";

function ManageCatalogue() {
  const [movies, setMovies] = useState([]);
  const { jwtToken } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtToken.trim() === "") {
      navigate("/login");
      return;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${jwtToken}`);

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(`/api/admin/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [jwtToken, navigate]);

  return (
    <div>
      <h2 className="text-lg font-bold border-b border-gray-300 py-2">
        ManageCatalogue
      </h2>
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
                  to={`/admin/movies/${m.id}`}
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

export default ManageCatalogue;
