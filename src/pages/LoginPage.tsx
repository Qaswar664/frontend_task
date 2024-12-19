import React, { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';


const LoginPage: React.FC = () => {
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted');
    try {
      await auth?.login(username, password);
      setError(null); // Clear any previous error
    } catch (err) {
      console.error('Login error:', err); // Log the error here
      setError('Invalid username or password.');
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 bg-white rounded shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
