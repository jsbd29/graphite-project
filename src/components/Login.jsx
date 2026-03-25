import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payload:", { email, password });
  };

  return (
    <div className="bg-sky-200 p-5 rounded-md shadow-md m-10 w-64 flex flex-col gap-4">
      <h2 className="font-bold text-center">Login Page</h2>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-800 text-white py-2 rounded-md transition-colors hover:bg-blue-300 active:bg-blue-200 cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default Login;