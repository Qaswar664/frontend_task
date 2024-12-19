import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import Input from "../components/Input"; // Assuming Input is a custom input component
import Button from "../components/Button"; // Assuming Button is a custom button component
import logo from "../assets/logo.svg";
import googleLogo from "../assets/googleLogo.svg";
import passwordIcon from "../assets/passwordIcon.svg";
import image from "../assets/image.png";

const LoginPage: React.FC = () => {
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
      setError(null);
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password.");
    }
  };

  if (auth?.user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <p>You are logged in!</p>
          <Link
            to="/dashboard"
            className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-between h-screen bg-white">
      {/* Parent container */}

      {/* Left child (login form) */}
      <div className="w-full md:w-1/3 p-6 ">
        <div className="mb-6">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold  mb-4">Welcome Back</h1>
        <p className=" mb-6">Sign in to your account</p>

        <form onSubmit={handleLogin}>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

          {/* Username input */}
          <Input
            label="Email or Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            required
            className="focus:ring-indigo-500"
          />

          {/* Password input */}
          <div className="relative mb-4">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              className="focus:ring-indigo-500 pr-10" // Add padding for the icon
            />
            <img
              src={passwordIcon}
              alt="Password icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Remember me and forgot password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <Button type="submit" label="Sign In" className="w-full mb-4" />

          {/* Google sign-in button */}
          <button className="w-full p-2 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
            <img src={googleLogo} alt="Google" className="mr-2 w-5 h-5" />
            Sign In with Google
          </button>

          {/* Have not joined yet? Sign up */}
          <div className="text-center mt-4">
            <span className="text-sm">
              Have not joined yet?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>

      {/* Right child (image) */}
      <div className="hidden md:block w-2/3 h-screen  justify-center items-center">
        <img
          src={image}
          alt="Login Illustration"
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default LoginPage;
