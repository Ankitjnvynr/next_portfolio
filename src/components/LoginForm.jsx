"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timeout);
  }, [error]);
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const hardcodedUsername = "admin";
    const hardcodedPassword = "Ankit@1558";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Store user info in localStorage (or any other method you prefer)
      localStorage.setItem("user", JSON.stringify({ username }));
      router.push("/dashboard"); // Redirect to protected page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
