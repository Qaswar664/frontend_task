import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import googleLogo from "../assets/googleLogo.svg";
import image from "../assets/image.png";
import logo from "../assets/logo.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
    try {
      await auth?.login(username, password);
      navigate('/dashboard');
      setError(null);
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex w-full items-center justify-between h-screen bg-white">
      <div className="w-full md:w-1/3 p-6 ">
        <div className="mb-6">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="text-3xl font-bold  mb-4">Welcome Back</h1>
        <p className=" mb-6">You need to be signed in the access the project dashboard</p>

        <form onSubmit={handleLogin}>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

          <Input
            label="Email or Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            required
            className="focus:ring-indigo-500"
          />

          <div className="relative mb-4">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              className="py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-11 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
            >
              {showPassword ? (
                <svg
                  className="shrink-0 size-3.5"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-3.5"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>


          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-black border-b border-black pb-[1px]"
            >
              Forgot password?
            </Link>


          </div>

          <Button type="submit" label="Sign In" className="w-full mb-4" />

          <button className="w-full p-2 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
            <img src={googleLogo} alt="Google" className="mr-2 w-5 h-5" />
            Sign In with Google
          </button>
          <div className="text-center mt-4">
            <span className="text-sm">
              Haven't joined yet?
              <Link to="/" className="text-black-500 underline">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="hidden md:block w-full md:w-2/3 min-h-screen lg:h-screen">
        <img
          src={image}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default LoginPage;
