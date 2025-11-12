import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";

import Input from "./form/Input";
import Select from "./form/Select";
import TextArea from "./form/TextArea";
import Checkbox from "./form/Checkbox";

function EditMovie() {
  const MPAA_OPTIONS = [
    { id: "G", value: "G" },
    { id: "PG", value: "PG" },
    { id: "PG-13", value: "PG-13" },
    { id: "R", value: "R" },
    { id: "NC17", value: "NC17" },
    { id: "18A", value: "18A" },
  ];
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext();
  const { id } = useParams();
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    release_date: "",
    runtime: "",
    mpaa_rating: "",
    description: "",
    genres: [],
    genres_array: [Array(13).fill(false)],
  });
  const [formErrors, setFormErrors] = useState({
    general: null,
    fields: [],
  });

  useEffect(() => {
    if (jwtToken.trim() === "") {
      navigate("/login");
      return;
    }

    if ((id ?? 0) === 0) {
      setMovie({
        id: 0,
        title: "",
        release_date: "",
        runtime: "",
        mpaa_rating: "",
        description: "",
        genres: [],
        genres_array: [Array(13).fill(false)],
      });

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers,
      };

      fetch(`/api/genres`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const checks = [];
          data.forEach((g) =>
            checks.push({ id: g.id, genre: g.genre, checked: false }),
          );
          setMovie((m) => ({
            ...m,
            genres: checks,
            genres_array: [],
          }));
        })
        .catch((err) => console.log(err));
      return;
    }
  }, [jwtToken, navigate, id]);

  const hasError = (key) => {
    return formErrors.fields.indexOf(key) !== -1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setMovie((pv) => ({
      ...pv,
      [name]: value,
    }));
  };

  const handleCheck = (e, p) => {
    console.log("handleCheck called");
    console.log("value in handleCheck:", e.target.value);
    console.log("checked is", e.target.checked);
    console.log("position is", p);

    const genres = movie.genres.map((g, i) =>
      i === p ? { ...g, checked: e.target.checked } : g,
    );

    let genres_array;
    if (e.target.checked) {
      genres_array = [...movie.genres_array, parseInt(e.target.value, 10)];
    } else {
      genres_array = movie.genres_array.filter(
        (id) => id !== parseInt(e.target.value, 10),
      );
    }

    setMovie((m) => ({
      ...m,
      genres,
      genres_array,
    }));
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold border-b border-gray-300 py-2">
        Add/Edit Movie
      </h2>
      <pre>{JSON.stringify(movie, null, 3)}</pre>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" id="id" name="id" value={movie.id} />
        <Input
          type="text"
          name="title"
          title="Title"
          className="text-sm border border-gray-300 rounded-sm p-1"
          value={movie.title}
          onChange={handleChange}
          errorDiv={hasError("title") ? "text-red-800" : "hidden"}
          errorMsg="Please enter a title"
        />
        <Input
          type="date"
          name="release_date"
          title="Release Date"
          className="text-sm border border-gray-300 rounded-sm p-1"
          value={movie.release_date}
          onChange={handleChange}
          errorDiv={hasError("release_date") ? "text-red-800" : "hidden"}
          errorMsg="Please enter a release date"
        />
        <Input
          type="text"
          name="runtime"
          title="Runtime"
          className="text-sm border border-gray-300 rounded-sm p-1"
          value={movie.runtime}
          onChange={handleChange}
          errorDiv={hasError("runtime") ? "text-red-800" : "hidden"}
          errorMsg="Please enter a runtime"
        />
        <Select
          name="mpaa_rating"
          title="MPAA Rating"
          options={MPAA_OPTIONS}
          onChange={handleChange}
          placeHolder="Choose..."
          errorDiv={hasError("mpaa_rating") ? "text-red-800" : "hidden"}
          errorMsg="Please choose"
        />
        <TextArea
          name="description"
          title="Description"
          rows="3"
          value={movie.description}
          onChange={handleChange}
          errorDiv={hasError("description") ? "text-red-800" : "hidden"}
          errorMsg="Please enter a description"
        />
        <hr className="border-gray-300" />
        <h3>Genres</h3>
        {movie.genres && movie.genres.length > 0 && (
          <>
            {Array.from(movie.genres).map((g, i) => (
              <Checkbox
                key={i}
                id={`genre-${i}`}
                name={`genre-${i}`}
                title={g.genre}
                checked={movie.genres[i].checked}
                value={g.id}
                onChange={(e) => handleCheck(e, i)}
              />
            ))}
          </>
        )}
      </form>
    </div>
  );
}

export default EditMovie;
