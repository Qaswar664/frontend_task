import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
