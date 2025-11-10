import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Movie() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    const requestOptions = {
      method: "GET",
      headers,
    }

    fetch(`/api/movies/${id}`, requestOptions).then((response) => response.json()).then((data) => {
      setMovie(data);
    }).catch((err) => console.log(err))
  }, [id]);

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2 font-bold border-b border-gray-300 py-2">
        <h2 className="text-lg">Movie: {movie.title}</h2>
        <small className="text-xs">
          <em>
            {movie.release_date}, {movie.runtime} minutes, Rated{" "}
            {movie.mpaa_rating}
          </em>
        </small>
        <div className="space-x-2">
          {movie.genres?.map((g) => (
            <span key={g.genre} className="bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-full p-1 cursor-pointer tansition duration-300 ease-in-out">
              {g.genre}
            </span>
          ))}
        </div>
      </div>
      {movie.image?.trim() !== "" && (
        <img src={`https://image.tmdb.org/t/p/w200/${movie.image}`} alt="poster" />
      )}
      <p>{movie.description}</p>
    </div>
  );
}

export default Movie;
