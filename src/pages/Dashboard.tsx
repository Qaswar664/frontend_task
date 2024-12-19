import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Welcome, {auth?.user}</h1>
      <button
        onClick={auth?.logout}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
