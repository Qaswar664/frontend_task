import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-100 text-gray-900 flex justify-between items-center p-4 shadow-md">
        <div className="text-lg font-semibold">Frontend Task</div>
        <div className="flex items-center space-x-4">
          <span className='text-gray-900'>Welcom,{auth?.user}</span>
          <button
            onClick={auth?.logout}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white"
          >
            Logout
          </button>
        </div>
      </header>
      <section className="bg-gradient-to-r min-h-screen bg-gray-900 text-white p-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
        <p className="text-xl">Welcome to your dashboard, where you can manage your tasks.</p>
      </section>
    </div>
  );
};

export default Dashboard;
