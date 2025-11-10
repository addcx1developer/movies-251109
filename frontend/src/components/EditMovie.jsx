import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";

import Input from "./form/Input";

function EditMovie() {
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
  });
  const [formErrors, setFormErrors] = useState({
    general: null,
    fields: []
  });

  useEffect(() => {
    if (jwtToken.trim() === "") {
      navigate("/login");
      return;
    }
  }, [jwtToken, navigate]);

  const hasError = (key) => {
    return formErrors.fields.indexOf(key) !== -1;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setMovie((pv) => ({
      ...pv,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold border-b border-gray-300 py-2">
        Add/Edit Movie
      </h2>
      <pre>{JSON.stringify(movie, null, 3)}</pre>
      <form onSubmit={handleSubmit}>
        <input type="hidden" id="id" name="id" value={movie.id} />
        <Input
          type="text"
          name="title"
          title="Title"
          className="text-sm border border-gray-300 rounded-sm p-1"
          value={movie.title}
          onChange={handleChange("title")}
          errorDiv={hasError("title") ? "text-red-800" : "hidden"}
          errorMsg="Please enter a title"
        />
      </form>
    </div>
  );
}

export default EditMovie;
