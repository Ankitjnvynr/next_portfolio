// components/LoginForm.js
"use client"
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      // Handle successful login (e.g., redirect to dashboard)
      console.log("Logged in successfully");
    } else {
      // Handle login failure (e.g., show error message)
      console.error("Login failed");
    }
  };

  return (
    
      <form className="flex flex-col gap-5 p-5 w-fit mx-auto " onSubmit={handleSubmit}>
        <input
        className="shadow p-2 rounded max-w-96"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
        className="shadow p-2 rounded max-w-96"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="cursor-pointer shadow-xl bg-blue-100 hover:bg-blue-400 transition rounded-lg p-2" type="submit">Login</button>
      </form>
   
  );
};

export default LoginForm;
