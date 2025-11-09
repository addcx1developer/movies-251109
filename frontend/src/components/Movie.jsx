import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Movie() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Highlander",
      release_date: "1986-03-07",
      runtime: 116,
      mpaa_rating: "R",
      description: "Some long description",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2 className="flex flex-col gap-2 text-lg font-bold border-b border-gray-300 py-2">
        <span>Movie: {movie.title}</span>
        <small className="text-xs">
          <em>
            {movie.release_date}, {movie.runtime} minutes, Rated{" "}
            {movie.mpaa_rating}
          </em>
        </small>
      </h2>
      <p>{movie.description}</p>
    </div>
  );
}

export default Movie;
