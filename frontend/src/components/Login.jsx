import { useState } from "react";
import { useOutletContext } from "react-router";

import Input from "./input/Input";

function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { setJwtToken } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.email !== "admin@example.com") return;

    setJwtToken("abc");
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
