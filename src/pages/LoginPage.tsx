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
      navigate("/dashboard");
      setError(null);
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex w-full h-full md:h-screen bg-gray-50 my-8 md:my-0">
     
      <div className="flex flex-col justify-center w-full md:w-2/5 lg:w-1/3 h-full px-8 bg-white">
        <div className="mb-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center md:items-start gap-1 md:gap-0 flex-row md:flex-col text-lg md:text-2xl lg:text-5xl font-semibold text-textblack">
          <h1>Welcome</h1>
          <h2>back</h2>
        </div>
        <p className="text-[#3B4752] my-2 font-light text-base md:text-lg">
          You need to be signed in to access the project dashboard.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div>
            <Input
              label="Email or Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              required
              placeholder="wesley.mendoza@example.com"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="*****"
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[53px] transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
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
                  className="w-5 h-5"
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
          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" id="keep-signed-in" className="mr-2" />
              <label
                htmlFor="keep-signed-in"
                className="text-[16px] text-textblack"
              >
                Keep me signed in
              </label>
            </div>

            <Link
              to="/#"
              className="text-[16px] font-medium text-black  underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            label="Sign In"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          />
          <button className="w-full flex items-center justify-center py-2 border text-[16px] border-inputBorder rounded ">
            <img src={googleLogo} alt="Google" className="mr-2 w-5 h-5" />
            <span className="text-center">Sign in with Google</span>
          </button>
        </form>
        <p className="mt-4 text-center  text-[16px] text-textblack">
          Don't have an account?{" "}
          <Link to="/#" className="text-[#11161B]  font-semibold underline">
            Sign in
          </Link>
        </p>
      </div>
    
      <div className="hidden md:block w-full md:w-3/5 lg:w-2/3 h-full bg-gray-100">
        <img src={image} alt="Login Illustration" className="w-full h-full" />
      </div>
    </div>
  );
};

export default LoginPage;
