import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

import Input from "./input/Input";

function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { setJwtToken, setAlert } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      email: userInput.email,
      password: userInput.password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    };

    fetch(`/api/authenticate`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setAlert({
            message: data.message,
            className: "bg-red-50 border border-red-200 text-red-800",
          });
          return;
        }

        setJwtToken(data.access_token);
        setAlert({ message: "", className: "hidden" });
        navigate("/");
      })
      .catch((error) => {
        setAlert({
          message: error,
          className: "bg-red-50 border border-red-200 text-red-800",
        });
      });
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold border-b border-gray-300 py-2">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          title="Email Address"
          autoComplete="email-new"
          className="text-sm border border-gray-300 rounded-sm p-1"
          onChange={(e) =>
            setUserInput((pui) => ({ ...pui, email: e.target.value }))
          }
        />
        <Input
          type="password"
          name="password"
          title="Password"
          autoComplete="password-new"
          className="text-sm border border-gray-300 rounded-sm p-1"
          onChange={(e) =>
            setUserInput((pui) => ({ ...pui, password: e.target.value }))
          }
        />
        <hr className="mb-2 border-gray-300" />
        <input
          type="submit"
          value="Login"
          className="bg-blue-700 hover:bg-blue-600 text-white text-sm rounded-sm p-1 cursor-pointer transition duration-300 ease-in-out"
        />
      </form>
    </div>
  );
}

export default Login;
